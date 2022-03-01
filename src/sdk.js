/**
 * Amber Javascript SDK
 * @module amber-javascript-sdk
 */

const regeneratorRuntime = require("regenerator-runtime");
const process = require('process')

const expandHomeDir = require('expand-home-dir')
const fs = require('fs')
const {gzip} = require('node-gzip');

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
 * AmberHttpException is used when a an API request fails
 */
export class AmberHttpException extends Error {
    constructor(amber_message, error = null) {
        let message = amber_message
        if (error != null) {
            message += `: ${error.message}`
        }
        super(message)
        this.name = "AmberHttpException"
        if (error != null && error.hasOwnProperty('status')) {
            // this is a superagent/http response error
            this.body = error.response.body
            this.status = error.status
            this.method = error.response.request.method
            this.url = error.response.request.url
        }
    }
}

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
        this.AmberApiServer = require('./index.js')
        this.apiInstance = new this.AmberApiServer.DefaultApi()
        this.defaultClient = this.AmberApiServer.ApiClient.instance
        this.authorize_amber_pool = this.defaultClient.authentications['authorize-amber-pool']

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
        try {
            this.defaultClient.basePath = this.license_profile.server
        } catch (error) {
            throw new AmberUserException('server not configured', error)
        }

        // set timeout in milliseconds
        this.defaultClient.timeout = timeout * 1000

        // set the proxy
        this.defaultClient.proxy = process.env.AMBER_PROXY || null

        // process overrides for the cert and verify
        this.license_profile.cert = process.env.AMBER_SSL_CERT || cert
        if (this.license_profile.cert !== null) {
            console.log("cert specification not implemented yet")
        }
        this.license_profile.verify = verify
        let verify_str = process.env.AMBER_SSL_VERIFY
        if (verify_str && verify_str.toLowerCase() === "false") {
            this.license_profile.verify = false
        }
        if (this.license_profile.verify === false) {
            this.defaultClient.verifyTLS = this.license_profile.verify
        }
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
                this.defaultClient.basePath = this.license_profile.oauth_server
                let response = await this.apiInstance.postOauth2(this.auth2RequestBody)
                if (response) {
                    this.authorize_amber_pool.apiKey = response.idToken
                    this.reauthTime = _tsIn + parseInt(response.expiresIn) - 60
                    return true
                } else {
                    return false
                }
            }
            return true
        } catch (error) {
            throw(error)
        }
    }

    /**
     * List all sensor instances currently associated with Amber account
     */
    async listSensors() {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getSensors()
        } catch (error) {
            throw new AmberHttpException('listSensors failed', error)
        }
    }

    /**
     * Get info about a sensor
     * @param sensorId
     */
    async getSensor(sensorId) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getSensor(sensorId)
        } catch (error) {
            throw new AmberHttpException('getSensor failed', error)
        }
    }

    /**
     * Create a new sensor instance
     * @param label
     */
    async createSensor(label = undefined) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let postRequest = new this.AmberApiServer.PostSensorRequest(label)
            if (label) {
                postRequest.label = label
            }
            return await this.apiInstance.postSensor(postRequest)
        } catch (error) {
            throw new AmberHttpException('createSensor failed', error)
        }
    }

    /**
     * Update the label of a sensor instance
     * @param sensorId sensor identifier
     * @param label new label to assign to sensor
     */
    async updateLabel(sensorId, label) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let putRequest = new this.AmberApiServer.PutSensorRequest(label)
            return await this.apiInstance.putSensor(putRequest, sensorId)
        } catch (error) {
            throw new AmberHttpException('updateLabel failed', error)
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
                          learningMaxSamples = 1000000, anomaly_history_window= 10000,
                          features = []) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize)
            body.samplesToBuffer = samplesToBuffer
            body.anomalyHistoryWindow = anomaly_history_window
            body.learningRateNumerator = learningRateNumerator
            body.learningRateDenominator = learningRateDenominator
            body.learningMaxClusters = learningMaxClusters
            body.learningMaxSamples = learningMaxSamples
            body.features = features
            return await this.apiInstance.postConfig(body, sensorId)
        } catch (error) {
            throw new AmberHttpException('configureSensor failed', error)
        }
    }

    /**
     * Get current sensor configuration
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getConfig(sensorId) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getConfig(sensorId)
        } catch (error) {
            throw new AmberHttpException('getConfig failed', error)
        }
    }

    /**
     * Delete an amber sensor instance
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async deleteSensor(sensorId) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.deleteSensor(sensorId)
        } catch (error) {
            throw new AmberHttpException('deleteSensor failed', error)
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
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostStreamRequest(saveImage, csv)
            return await this.apiInstance.postStream(body, sensorId)
        } catch (error) {
            throw new AmberHttpException('streamSensor failed', error)
        }
    }

    /**
     * Get sensor status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getStatus(sensorId) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getStatus(sensorId)
        } catch (error) {
            throw new AmberHttpException('getStatus failed', error)
        }
    }

    /**
     * Pretrain data to an amber sensor
     * @param sensorId
     * @param csv
     * @param autotuneConfig
     * @returns {Promise<unknown>}
     */
    async pretrainSensor(sensorId, csv, autotuneConfig) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostPretrainRequest()
            // trim spaces from beginning and end
            csv = csv.trim()
            // trim whitespace other than newlines
            csv = csv.replace(/\r \t/g, "")
            // create a single csv string with no newlines
            csv = csv.replace(/\n/g, ",")
            body.data = this.AmberApiServer.ApiClient.convertToType(csv, 'String');
            body.autoTuneConfig = this.AmberApiServer.ApiClient.convertToType(autotuneConfig, 'Boolean');
            let bodyStr = JSON.stringify(body)
            if (bodyStr.length > 10000) {
                bodyStr = await gzip(bodyStr)
            }
            return await this.apiInstance.postPretrain(bodyStr, sensorId)
        } catch (error) {
            throw new AmberHttpException('pretrainSensor failed', error)
        }
    }

    /**
     * Get pretrain status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getPretrainState(sensorId) {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getPretrain(sensorId)
        } catch (error) {
            throw new AmberHttpException('getPretrainState failed', error)
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
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            let opts = {}
            if (clusterId != null) {
                opts = {
                    clusterID: clusterId.replace(/[\r\n\t]/g, "")
                }
            } else if (pattern != null) {
                pattern = pattern.replace(/[\r\n\t]/g, "")
                opts = {
                    pattern: pattern.replace(/[\r\n\t]/g, "")
                }
            }
            return await this.apiInstance.getRootCause(sensorId, opts)
        } catch (error) {
            throw new AmberHttpException('getRootCause failed', error)
        }
    }

    /**
     * Get version information for Amber server
     * @returns {Promise<unknown>}
     */
    async getVersion() {
        try {
            await this._authenticate()
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getVersion()
        } catch (error) {
            console.log(error)
            throw new AmberHttpException('getVersion failed', error)
        }
    }
}

export function AmberClient(licenseId = 'default', licenseFile = '~/.Amber.license', verify = true, cert = null, timeout = 300) {
    return new AmberClientClass(licenseId, licenseFile, verify, cert, timeout)
}

import {TSMuxFromFiles} from "./tsmux.js"
import {TSMuxFromBlobs} from "./tsmux.js"
export {TSMuxFromFiles, TSMuxFromBlobs}