/**
 * Amber Javascript SDK
 * @module amber-javascript-sdk
 */

const regeneratorRuntime = require("regenerator-runtime");
const process = require('process')
const parseurl = require('parse-url')
const https = require('https')
const {gzip} = require('node-gzip')
const HttpsProxyAgent = require('https-proxy-agent')
const axios = require('axios')

const expandHomeDir = require('expand-home-dir')
const fs = require('fs')

/**
 * AmberUserException is used when an AmberClient object
 * can't be created. (bad json, missing required fields, etc)
 */
export class AmberUserException extends Error {
    constructor(amber_message, error = null) {
        let message = amber_message
        if (error != null) {
            message += `: ${error.message}`
        }
        super(message)
        this.name = "AmberUserException"
    }
}

/**
 * AmberHttpException is used when an API request fails
 */
export function AmberHttpException(err_response) {
    this.name = "AmberHttpException"
    this.message = JSON.stringify(err_response.response.data)
    this.method = err_response.config.method
    this.status = err_response.response.status
    this.url = `${err_response.config.baseURL}${err_response.config.url}`
}

AmberHttpException.prototype = Error.prototype

/** AmberClient */
export class AmberClientClass {

    /**
     * AmberClient constructor. Main client which interfaces with the Amber cloud. Amber account
     * credentials are discovered within a .Amber.license file located in the
     * home directory, or optionally overridden using environment variables.
     *
     * @licenseId  {string} [input='default'] config license identifier label found within .Amber.license file
     * @licenseFile {string} [input=''] config path (~.Amber.license file will be used if null specified)
     * @verify {boolean} [input=] indicating whether to verify the server’s TLS certificate
     * @cert {string} [input=null] path to ssl client cert file (.pem)
     * @timeout {number} [input=300] maximum time length for a command
     *
     * Environment:
     *     `AMBER_LICENSE_FILE`: sets license_file path
     *     `AMBER_LICENSE_ID`: sets license_id
     *     `AMBER_USERNAME`: overrides the username as found in .Amber.license file
     *     `AMBER_PASSWORD`: overrides the password as found in .Amber.license file
     *     `AMBER_SERVER`: overrides the server as found in .Amber.license file
     *     `AMBER_OAUTH_SERVER`: overrides the oauth server as found in .Amber.license file
     *     `AMBER_SSL_CERT`: path to ssl client cert file (.pem)
     *     `AMBER_SSL_VERIFY`: A boolean value indicating whether to verify the server’s TLS certificate
     *     `AMBER_PROXY`: Use this proxy setting
     */
    constructor(licenseId = 'default', licenseFile = '~/.Amber.license', verify = true, cert = null, timeout = 300) {

        this.reauthTime = Math.floor(Date.now() / 1000) - 1  // init re-auth in the past
        this.apiKey = ''

        this.AmberApiServer = require('./index.js')

        // determine which license_id to use, override from environment if specified
        this.license_id = process.env.AMBER_LICENSE_ID || licenseId

        // create a stub license_profile
        this.license_profile = {username: null, password: null, server: null, oauth_server: null}

        // load from license file if necessary, override from environment if specified
        this.license_file = process.env.AMBER_LICENSE_FILE || licenseFile
        if (this.license_file) {
            this.license_file = expandHomeDir(this.license_file)
            if (fs.existsSync(this.license_file)) {
                let blob = fs.readFileSync(this.license_file).toString('utf-8')
                let license_json = JSON.parse(blob)
                if (!this.license_id) {
                    throw new AmberUserException(`missing licenseId`)
                } else if (license_json.hasOwnProperty(this.license_id)) {
                    this.license_profile = license_json[this.license_id]
                } else {
                    throw new AmberUserException(`bad licenseId ${this.license_id}`)
                }
            } else {
                if (this.license_file != '~/.Amber.license') {
                    // if license file is something other than default, throw exception
                    throw new AmberUserException(`license file ${this.license_file} not found`)
                }
            }
        }

        // override from environment
        this.license_profile.username = process.env.AMBER_USERNAME || this.license_profile.username || null
        this.license_profile.password = process.env.AMBER_PASSWORD || this.license_profile.password || null
        this.license_profile.server = process.env.AMBER_SERVER || this.license_profile.server || null
        // fallback oauth_server to server if not specified
        this.license_profile.oauth_server = process.env.AMBER_OAUTH_SERVER || this.license_profile.oauth_server || this.license_profile.server

        // verify required profile elements have been created
        if (this.license_profile.username === null) {
            throw new AmberUserException('missing username in profile')
        }
        if (this.license_profile.password === null) {
            throw new AmberUserException('missing password in profile')
        }
        if (this.license_profile.server === null) {
            throw new AmberUserException('missing server in profile')
        }

        // load the username, password and server into client
        this.auth2RequestBody = new this.AmberApiServer.PostAuth2Request()
        try {
            this.auth2RequestBody.username = this.license_profile.username
        } catch (error) {
            throw new AmberUserException('username not configured', error)
        }
        try {
            this.auth2RequestBody.password = this.license_profile.password
        } catch (error) {
            throw new AmberUserException('password not configured', error)
        }

        // process overrides for the cert and verify
        this.license_profile.cert = process.env.AMBER_SSL_CERT || cert
        if (this.license_profile.cert !== null) {
            console.log("cert specification not implemented yet")
        }

        // default to verify SSL cert
        this.license_profile.verify = verify
        delete process.env.NODE_TLS_REJECT_UNAUTHORIZED

        // override from environment if required
        let verify_str = process.env.AMBER_SSL_VERIFY
        if (verify_str && verify_str.toLowerCase() === "false") {
            this.license_profile.verify = false
        }

        let httpsAgent = undefined
        let proxyEnv = process.env.AMBER_PROXY || null
        if (proxyEnv === null) {
            httpsAgent = new https.Agent({
                rejectUnauthorized: this.verify
            })
        } else {
            httpsAgent = new HttpsProxyAgent(proxyEnv)
        }

        // generate the new axios instance
        this.client = axios.create({
            baseURL: `${this.license_profile.server}/`,
            timeout: timeout * 1000,
            headers: {
                'User-Agent': 'Boon Logic / amber-javascript-sdk / axios',
                'Content-Type': 'application/json'
            },
            proxy: false,
            httpsAgent: httpsAgent,
        });
    }

    /**
     * Authenticate client for the next hour using the credentials given at
     * initialization. This acquires and stores an oauth2 token which remains
     * valid for one hour and is used to authenticate all other API requests.
     * @returns {Promise<unknown>}
     * @private
     */
    async _authenticate() {
        try {
            let _tsIn = Math.floor(Date.now() / 1000)
            if (_tsIn > this.reauthTime) {
                let payload = this.auth2RequestBody
                let config = {

                    proxy: false
                }
                let response = await this.client.post(`${this.license_profile.oauth_server}/oauth2`, payload, config)
                if (response.status === 200) {
                    this.apiKey = response.data.idToken
                    this.reauthTime = _tsIn + parseInt(response.data.expiresIn - 60)
                    return true
                }
                return false
            }
            return true
        } catch (error) {
            throw new AmberHttpException(error)
        }
    }

    /**
     * List all sensor instances currently associated with Amber account
     */
    async listSensors() {
        try {
            let response = await this.apiCall('get', 'sensors', null, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get info about a sensor
     * @param sensorId
     */
    async getSensor(sensorId) {
        try {
            let headers = {'sensorId': sensorId}
            let response = await this.apiCall('get', 'sensor', headers, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Create a new sensor instance
     * @param label
     */
    async createSensor(label = undefined) {
        try {
            let postRequest = new this.AmberApiServer.PostSensorRequest(label)
            if (label != undefined) {
                postRequest.label = label
            }
            let response = await this.apiCall('post', 'sensor', null, null, postRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Update the label of a sensor instance
     * @param sensorId sensor identifier
     * @param label new label to assign to sensor
     */
    async updateLabel(sensorId, label) {
        try {
            let headers = {'sensorId': sensorId}
            let putRequest = new this.AmberApiServer.PutSensorRequest(label)
            let response = await this.apiCall('put', 'sensor', headers, null, putRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Configure an amber sensor instance
     * @param sensorId
     * @param featureCount
     * @param streamingWindowSize
     * @param samplesToBuffer
     * @param learningRateNumerator
     * @param learningRateDenominator
     * @param learningMaxClusters
     * @param learningMaxSamples
     * @param anomaly_history_window
     * @param features
     * @returns {Promise<unknown>}
     */
    async configureSensor(sensorId, featureCount = 1, streamingWindowSize = 25,
                          samplesToBuffer = 10000, learningRateNumerator = 10,
                          learningRateDenominator = 10000, learningMaxClusters = 1000,
                          learningMaxSamples = 1000000, anomaly_history_window = 10000,
                          features = []) {
        try {
            let headers = {'sensorId': sensorId}
            let postRequest = new this.AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize)
            postRequest.samplesToBuffer = samplesToBuffer
            postRequest.anomalyHistoryWindow = anomaly_history_window
            postRequest.learningRateNumerator = learningRateNumerator
            postRequest.learningRateDenominator = learningRateDenominator
            postRequest.learningMaxClusters = learningMaxClusters
            postRequest.learningMaxSamples = learningMaxSamples
            postRequest.features = features
            let response = await this.apiCall('post', 'config', headers, null, postRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get current sensor configuration
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getConfig(sensorId) {
        try {
            let headers = {'sensorId': sensorId}
            let response = await this.apiCall('get', 'config', headers, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Delete an amber sensor instance
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async deleteSensor(sensorId) {
        try {
            let headers = {'sensorId': sensorId}
            let response = await this.apiCall('delete', 'sensor', headers, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Stream data to an amber sensor and return the inference result
     * @param sensorId
     * @param csv
     * @param saveImage
     * @returns {Promise<unknown>}
     */
    async streamSensor(sensorId, csv, saveImage = true) {
        try {
            let headers = {'sensorId': sensorId}
            let postRequest = new this.AmberApiServer.PostStreamRequest(saveImage, csv)
            let response = await this.apiCall('post', 'stream', headers, null, postRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get sensor status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getStatus(sensorId) {
        try {
            let headers = {'sensorId': sensorId}
            let response = await this.apiCall('get', 'status', headers, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Pretrain data to an amber sensor
     * @param sensorId
     * @param csv
     * @param autotuneConfig
     * @returns {Promise<unknown>}
     */
    async pretrainSensor(sensorId, csv, autotuneConfig = undefined) {
        try {
            let headers = {'sensorId': sensorId}

            // trim spaces from beginning and end
            csv = csv.trim()
            // trim whitespace other than newlines
            csv = csv.replace(/\r \t/g, "")
            // create a single csv string with no newlines
            csv = csv.replace(/\n/g, ",")

            let postRequest = new this.AmberApiServer.PostPretrainRequest(csv)
            if (autotuneConfig !== undefined) {
                postRequest.autoTuneConfig = autotuneConfig
            }
            let response = await this.apiCall('post', 'pretrain', headers, null, postRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get pretrain status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getPretrainState(sensorId) {
        try {
            let headers = {'sensorId': sensorId}
            let response = await this.apiCall('get', 'pretrain', headers, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get rootcause
     * @param sensorId
     * @param clusterId
     * @param pattern
     * @returns {Promise<unknown>}
     */
    async getRootCause(sensorId, clusterId, pattern) {
        try {
            let query = {}
            let headers = {'sensorId': sensorId}
            if (clusterId != null) {
                query = {
                    clusterID: clusterId.replace(/[\r\n\t]/g, "")
                }
            } else if (pattern != null) {
                pattern = pattern.replace(/[\r\n\t]/g, "")
                query = {
                    pattern: pattern.replace(/[\r\n\t]/g, "")
                }
            }
            let response = await this.apiCall('get', 'rootCause', headers, query, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    /**
     * Get version information for Amber server
     * @returns {Promise<unknown>}
     */
    async getVersion() {
        try {
            let response = await this.apiCall('get', 'version', null, null, null)
            return Promise.resolve(response.data)
        } catch (error) {
            throw(error)
        }
    }

    async apiCall(method, url, head, query, body) {

        // compress post requests that exceed 10k bytes
        let bodyStr = JSON.stringify(body)
        let encoding = {}
        if (method === 'post' && bodyStr.length > 10000) {
            encoding = {
                'content-encoding': 'gzip'
            }
            bodyStr = await gzip(bodyStr)
        }

        try {
            await this._authenticate()
            const config = {
                method: method,
                url: url,
                data: bodyStr,
                params: query,
                headers: {
                    'Authorization': this.apiKey,
                    ...head,
                    ...encoding
                },
                proxy: false
            }
            return await this.client.request(config)
        } catch (error) {
            throw new AmberHttpException(error)
        }
    }
}

export function AmberClient(licenseId = 'default', licenseFile = '~/.Amber.license', verify = true, cert = null, timeout = 300) {
    return new AmberClientClass(licenseId, licenseFile, verify, cert, timeout)
}

import {TSMuxFromBlobs, TSMuxFromFiles} from "./tsmux.js"

export {TSMuxFromFiles, TSMuxFromBlobs}
