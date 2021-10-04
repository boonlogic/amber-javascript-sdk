/**
 * Amber Javascript SDK
 * @module amber-javascript-sdk
 */

const regeneratorRuntime = require("regenerator-runtime");
const process = require('process')
const expandHomeDir = require('expand-home-dir')
const fs = require('fs')

const superagent = require('superagent');
require('superagent-proxy')(superagent);

/** AmberClient */
class AmberClient {


    /**
     * AmberClient constructor. Main client which interfaces with the Amber cloud. Amber account
     * credentials are discovered within a .Amber.license file located in the
     * home directory, or optionally overridden using environment variables.
     *
     * @licenseId  {string} [input='default'] config license identifier label found within .Amber.license file
     * @licenseFile {string} [input='~/Amber.license'] config path to .Amber.license file
     *
     * Environment:
     *     `AMBER_LICENSE_FILE`: sets license_file path
     *     `AMBER_LICENSE_ID`: sets license_id
     *     `AMBER_USERNAME`: overrides the username as found in .Amber.license file
     *     `AMBER_PASSWORD`: overrides the password as found in .Amber.license file
     *     `AMBER_SERVER`: overrides the server as found in .Amber.license file
     */
    constructor(licenseId = 'default', licenseFile = "~/.Amber.license") {

        this.reauthTime = Math.floor(Date.now() / 1000) - 1  // init re-auth in the past
        this.AmberApiServer = require('./index.js')
        this.apiInstance = new this.AmberApiServer.DefaultApi()
        this.defaultClient = this.AmberApiServer.ApiClient.instance
        this.authorize_amber_pool = this.defaultClient.authentications['authorize-amber-pool']

        // override agent to support proxies
        this.defaultClient.userAgent = new superagent.agent();

        let envLicenseFile = process.env.AMBER_LICENSE_FILE
        let envLicenseId = process.env.AMBER_LICENSE_ID
        let envUserName = process.env.AMBER_USERNAME
        let envPassword = process.env.AMBER_PASSWORD
        let envServer = process.env.AMBER_SERVER

        // if username, password and server are all specified via environment, we're done here
        if (envUserName && envPassword && envServer) {
            this.auth2RequestBody = new AmberApiServer.PostAuth2Request(envPassword, envUserName)
            this.defaultClient.basePath = envServer
            return
        }

        // otherwise acquire either or both of them from license file
        let localLicenseFile = envLicenseFile
        if (!localLicenseFile) {
            localLicenseFile = licenseFile
        }
        let localLicenseId = envLicenseId
        if (!localLicenseId) {
            localLicenseId = licenseId
        }

        let licenseData = {}
        let licenseJson = undefined
        try {
            let licensePath = expandHomeDir(localLicenseFile)
            licenseJson = JSON.parse(fs.readFileSync(licensePath).toString('utf-8'))
        } catch (err) {
            // license file does not exist
            console.error(err)
            return
        }

        try {
            licenseData = licenseJson[localLicenseId]
        } catch (err) {
            // license id not found
            console.error(err)
            return
        }

        // load the username, password and server, still giving precedence to environment
        this.auth2RequestBody = new this.AmberApiServer.PostAuth2Request()
        try {
            this.auth2RequestBody.username = envUserName
            if (!this.auth2RequestBody.username) {
                this.auth2RequestBody.username = licenseData['username']
            }
        } catch (err) {
            // username not found
            console.error(err)
            return
        }
        try {
            this.auth2RequestBody.password = envPassword
            if (!this.auth2RequestBody.password) {
                this.auth2RequestBody.password = licenseData['password']
            }
        } catch (err) {
            // password not found
            console.error(err)
            return
        }
        try {
            this.defaultClient.basePath = envServer
            if (!this.server) {
                this.defaultClient.basePath = licenseData['server']
            }
        } catch (err) {
            // server not found
            console.error(err)
            return
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
            return await this.apiInstance.getSensors()
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Get info about a sensor
     * @param sensorId
     */
    async getSensor(sensorId) {
        try {
            await this._authenticate()
            return await this.apiInstance.getSensors(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Create a new sensor instance
     * @param label
     */
    async createSensor(label = undefined) {
        try {
            await this._authenticate()
            let postRequest = new this.AmberApiServer.PostSensorRequest(label)
            if (label) {
                postRequest.label = label
            }
            return await this.apiInstance.postSensor(postRequest)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
            let putRequest = new this.AmberApiServer.PutSensorRequest(label)
            return await this.apiInstance.putSensor(putRequest, sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
     * @returns {Promise<unknown>}
     */
    async configureSensor(sensorId, featureCount = 1, streamingWindowSize = 25,
                          samplesToBuffer = 10000, learningRateNumerator = 10,
                          learningRateDenominator = 10000, learningMaxClusters = 1000,
                          learningMaxSamples = 1000000) {
        try {
            await this._authenticate()
            let body = new this.AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize)
            body.samplesToBuffer = samplesToBuffer
            body.learningRateNumerator = learningRateNumerator
            body.learningRateDenominator = learningRateDenominator
            body.learningMaxClusters = learningMaxClusters
            body.learningMaxSamples = learningMaxSamples
            return await this.apiInstance.postConfig(body, sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
            return await this.apiInstance.getConfig(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
            return await this.apiInstance.deleteSensor(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Stream data to an amber sensor and return the inference result
     * @param sensorId
     * @param csv
     * @returns {Promise<unknown>}
     */
    async streamSensor(sensorId, csv) {
        try {
            await this._authenticate()
            let body = new this.AmberApiServer.PostStreamRequest(csv)
            return await this.apiInstance.postStream(body, sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
            return await this.apiInstance.getStatus(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Pretrain data to an amber sensor
     * @param sensorId
     * @param csv
     * @returns {Promise<unknown>}
     */
    async pretrainSensor(sensorId, csv, autotuneConfig) {
        try {
            await this._authenticate()
            let body = new this.AmberApiServer.PostPretrainRequest()
            body.data = this.AmberApiServer.ApiClient.convertToType(csv, 'String');
            body.autoTuneConfig = this.AmberApiServer.ApiClient.convertToType(autotuneConfig, 'Boolean');
            return await this.apiInstance.postPretrain(body, sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
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
            return await this.apiInstance.getPretrain(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Get rootcause
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    async getRootCause(sensorId) {
        try {
            await this._authenticate()
            return await this.apiInstance.getRootCause(sensorId)
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    /**
     * Get version information for Amber server
     * @returns {Promise<unknown>}
     */
    async getVersion() {
        try {
            await this._authenticate()
            return await this.apiInstance.getVersion()
        } catch(error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }

    static AmberCloudException(exc) {
        const error = new Error(exc.response.body);
        error.body = exc.response.body
        error.status = exc.status
        error.method = exc.response.request.method
        error.url = exc.response.request.url
        return error
    }
}

module.exports = function (licenseId = 'default', licenseFile = "~/.Amber.license") {
    return new AmberClient(licenseId, licenseFile)
}
