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
     *     `AMBER_OAUTH_SERVER`: overrides the oauth server as found in .Amber.license file
     */
    constructor(licenseId = 'default', licenseFile = "~/.Amber.license") {

        this.reauthTime = Math.floor(Date.now() / 1000) - 1  // init re-auth in the past
        this.AmberApiServer = require('./index.js')
        this.apiInstance = new this.AmberApiServer.DefaultApi()
        this.defaultClient = this.AmberApiServer.ApiClient.instance
        this.authorize_amber_pool = this.defaultClient.authentications['authorize-amber-pool']

        // first load from license file, override from environment if specified
        this.license_file = process.env.AMBER_LICENSE_FILE || licenseFile

        // determine which license_id to use, override from environment if specified
        this.license_id = process.env.AMBER_LICENSE_FILE || licenseId

        // create license profile
        this.license_profile = {username: "", password: "", server: "", oauth_server: ""}
        if (this.license_file !== null) {
            let license_path = expandHomeDir(this.license_file)
            if (!fs.existsSync(license_path)) {
                this.license_profile = {username: "", password: "", server: "", oauth_server: ""}
            } else {
                let license_json = JSON.parse(fs.readFileSync(license_path).toString('utf-8'))
                this.license_profile = license_json[this.license_id]
            }
        }

        this.license_profile.username = process.env.AMBER_USERNAME || this.license_profile.username
        this.license_profile.password = process.env.AMBER_PASSWORD || this.license_profile.password
        this.license_profile.server = process.env.AMBER_SERVER || this.license_profile.server
        this.license_profile.oauth_server = process.env.AMBER_OAUTH_SERVER || this.license_profile.oauth_server
        if (this.license_profile.oauth_server === undefined) {
            // fallback oauth_server to server if not specified
            this.license_profile.oauth_server = this.license_profile.server
        }

        // verify reququired profile elements have been created
        if (this.license_profile.username === "") {
            throw new AmberClient.AmberUserException('missing username in profile')
        }
        if (this.license_profile.password === "") {
            throw new AmberClient.AmberUserException('missing password in profile')
        }
        if (this.license_profile.server === "") {
            throw new AmberClient.AmberUserException('missing server in profile')
        }

        // load the username, password and server into client
        this.auth2RequestBody = new this.AmberApiServer.PostAuth2Request()
        try {
            this.auth2RequestBody.username = this.license_profile.username
        } catch (err) {
            throw new AmberClient.AmberUserException('username not configured')
        }
        try {
            this.auth2RequestBody.password = this.license_profile.password
        } catch (err) {
            throw new AmberClient.AmberUserException('password not configured')
        }
        try {
            this.defaultClient.basePath = this.license_profile.server
        } catch (err) {
            throw new AmberClient.AmberUserException('server not configured')
        }
    }

    /**
     * AmberUserException is used when an AmberClient object can't be constructed.
     */
    static AmberUserException(message) {
        const error = new Error(message)
        return error
    }

    /**
     * AmberCloudException is used when a an API request fails
     */
    static AmberCloudException(exc) {
        const error = new Error(exc.response.body);
        error.body = exc.response.body
        error.status = exc.status
        error.method = exc.response.request.method
        error.url = exc.response.request.url
        return error
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
                console.log(this.license_profile)
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getSensors(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            let postRequest = new this.AmberApiServer.PostSensorRequest(label)
            if (label) {
                postRequest.label = label
            }
            return await this.apiInstance.postSensor(postRequest)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            let putRequest = new this.AmberApiServer.PutSensorRequest(label)
            return await this.apiInstance.putSensor(putRequest, sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize)
            body.samplesToBuffer = samplesToBuffer
            body.learningRateNumerator = learningRateNumerator
            body.learningRateDenominator = learningRateDenominator
            body.learningMaxClusters = learningMaxClusters
            body.learningMaxSamples = learningMaxSamples
            return await this.apiInstance.postConfig(body, sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getConfig(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.deleteSensor(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostStreamRequest(csv)
            return await this.apiInstance.postStream(body, sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getStatus(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            let body = new this.AmberApiServer.PostPretrainRequest()
            body.data = this.AmberApiServer.ApiClient.convertToType(csv, 'String');
            body.autoTuneConfig = this.AmberApiServer.ApiClient.convertToType(autotuneConfig, 'Boolean');
            return await this.apiInstance.postPretrain(body, sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getPretrain(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getRootCause(sensorId)
        } catch (error) {
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
            this.defaultClient.basePath = this.license_profile.server
            return await this.apiInstance.getVersion()
        } catch (error) {
            throw new AmberClient.AmberCloudException(error)
        }
    }
}

module.exports = function (licenseId = 'default', licenseFile = "~/.Amber.license") {
    return new AmberClient(licenseId, licenseFile)
}
