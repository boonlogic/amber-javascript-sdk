/**
 * Amber Javascript SDK
 * @module amber-javascript-sdk
 */

const process = require('process')
const expandHomeDir = require('expand-home-dir')
const fs = require('fs')

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
    _authenticate() {
        return new Promise((resolve, reject) => {
            let _tsIn = Math.floor(Date.now() / 1000)
            // check for initial auth or re-auth scenario
            if (_tsIn > this.reauthTime) {
                this.apiInstance.postOauth2(this.auth2RequestBody, (error, data, response) => {
                    if (error) {
                        console.error(error)
                    } else {
                        this.authorize_amber_pool.apiKey = data.idToken
                        this.reauthTime = _tsIn + parseInt(data.expiresIn) - 60
                        resolve(this.reauthTime - _tsIn)
                    }
                })
            } else {
                resolve(this.reauthTime - _tsIn)
            }
        })
    }

    /**
     * List all sensor instances currently associated with Amber account
     * @returns {Promise<unknown>}
     */
    listSensors() {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getSensors((error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
            })
        })
    }

    /**
     * Get info about a sensor
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    getSensor(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getSensor(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Create a new sensor instance
     * @param label
     * @returns {Promise<unknown>}
     */
    createSensor(label = undefined) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                let postRequest = new this.AmberApiServer.PostSensorRequest(label)
                if (label) {
                    postRequest.label = label
                }
                this.apiInstance.postSensor(postRequest, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
            })
        })
    }

    /**
     * Update the label of a sensor instance
     * @param sensorId sensor identifier
     * @param label new label to assign to sensor
     * @returns {Promise<unknown>}
     */
    updateLabel(sensorId, label) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                let putRequest = new this.AmberApiServer.PutSensorRequest(label)
                this.apiInstance.putSensor(putRequest, sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
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
    configureSensor(sensorId, featureCount = 1, streamingWindowSize = 25,
                      samplesToBuffer = 10000, learningRateNumerator = 10,
                      learningRateDenominator = 10000, learningMaxClusters = 1000,
                      learningMaxSamples = 1000000) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                let body = new this.AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize)
                body.samplesToBuffer = samplesToBuffer
                body.learningRateNumerator = learningRateNumerator
                body.learningRateDenominator = learningRateDenominator
                body.learningMaxClusters = learningMaxClusters
                body.learningMaxSamples = learningMaxSamples
                this.apiInstance.postConfig(body, sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Get current sensor configuration
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    getConfig(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getSensor(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Delete an amber sensor instance
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    deleteSensor(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.deleteSensor(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: JSON.parse(response.text)})
                    }
                })
            })
        })
    }

    /**
     * Stream data to an amber sensor and return the inference result
     * @param sensorId
     * @param csv
     * @returns {Promise<unknown>}
     */
    streamSensor(sensorId, csv) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                let body = new this.AmberApiServer.PostStreamRequest(csv)
                this.apiInstance.postStream(body, sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Get sensor status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    getStatus(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getStatus(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Pretrain data to an amber sensor
     * @param sensorId
     * @param csv
     * @returns {Promise<unknown>}
     */
    pretrainSensor(sensorId, csv, autotuneConfig) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                let body = new this.AmberApiServer.PostPretrainRequest()
                body.data = this.AmberApiServer.ApiClient.convertToType(csv, 'String');
                body.autoTuneConfig = this.AmberApiServer.ApiClient.convertToType(autotuneConfig, 'Boolean');
                this.apiInstance.postPretrain(body, sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Get pretrain status
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    getPretrainState(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getPretrain(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Get rootcause
     * @param sensorId
     * @returns {Promise<unknown>}
     */
    getRootCause(sensorId) {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getRootCause(sensorId, (error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({sensorId: sensorId, response: data})
                    }
                })
            })
        })
    }

    /**
     * Get version information for Amber server
     * @returns {Promise<unknown>}
     */
    getVersion() {
        return this._authenticate().then((data) => {
            return new Promise((resolve, reject) => {
                this.apiInstance.getVersion((error, data, response) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(data)
                    }
                })
            })
        })
    }
}

module.exports = function(licenseId = 'default', licenseFile = "~/.Amber.license") {
    return new AmberClient(licenseId, licenseFile)
}


