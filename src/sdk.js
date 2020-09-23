const process = require('process')
const expandHomeDir = require('expand-home-dir')
const fs = require('fs')

class AmberClient {
    constructor(licenseId = 'default', licenseFile = "~/.Amber.license") {

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

        let fileData = {}
        let licenseData = {}
        let licensePath = expandHomeDir(localLicenseFile)
        try {
            var licenseJson = JSON.parse(fs.readFileSync(licensePath).toString('utf-8'))
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

    _authenticate() {
        // check for initial auth or re-auth scenario
        return new Promise((resolve, reject) => {
            this.apiInstance.postOauth2(this.auth2RequestBody, (error, data, response) => {
                if (error) {
                    reject(error)
                } else {
                    this.authorize_amber_pool.apiKey = data.idToken
                    resolve(data)
                }
            })
        })
    }

    getSensorsRequest() {
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

    getSensorRequest(sensorId) {
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

    postSensorRequest(label = undefined) {
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

    putSensorRequest(sensorId, label) {
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

    postConfigRequest(sensorId, featureCount = 1, streamingWindowSize = 25,
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

    getConfigRequest(sensorId) {
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

    deleteSensorRequest(sensorId) {
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

    postStreamRequest(sensorId, csv) {
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

    getStatusRequest(sensorId) {
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
}

export {AmberClient}
