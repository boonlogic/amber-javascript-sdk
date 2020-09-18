let AmberApiServer = require('amber_api_server');

// create oauth2 token using credentials
let apiInstance = new AmberApiServer.DefaultApi();

// let body = new AmberApiServer.PostAuth2Request();
username = "jim-prod";
password = ":Csc39);J'<:-%*";

let defaultClient = AmberApiServer.ApiClient.instance;
let authorize_amber_pool = defaultClient.authentications['authorize-amber-pool'];

defaultClient.basePath = "https://amber.boonlogic.com/v1"
// defaultClient.basePath = "https://amber-local.boonlogic.com/dev"
// defaultClient.basePath = "https://amber-local.boonlogic.com/qa"

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    // console.log('code: ' + error.status, " message:", error.message);
    console.log(error.response.body)
});

function auth2Request(username, password) {
    return new Promise((resolve, reject) => {
        let body = new AmberApiServer.PostAuth2Request(password, username);
        apiInstance.postOauth2(body, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                authorize_amber_pool.apiKey = data.idToken;
                resolve(data)
            }
        });
    })
}

function getSensorsRequest() {
    return new Promise((resolve, reject) => {
        apiInstance.getSensors((error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        });
    })
}

function getSensorRequest(sensorId) {
    return new Promise((resolve, reject) => {
        apiInstance.getSensor(sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

function postSensorRequest(label = undefined) {
    return new Promise((resolve, reject) => {
        let postRequest = new AmberApiServer.PostSensorRequest(label)
        if (label) {
            postRequest.label = label
        }
        apiInstance.postSensor(postRequest, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        });
    })
}

function putSensorRequest(sensorId, label) {
    return new Promise((resolve, reject) => {
        let putRequest = new AmberApiServer.PutSensorRequest(label)
        apiInstance.putSensor(putRequest, sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

function postConfigRequest(sensorId, featureCount = 1, streamingWindowSize = 25,
                           samplesToBuffer = 10000, learningRateNumerator = 10,
                           learningRateDenominator = 10000, learningMaxClusters = 1000,
                           learningMaxSamples = 1000000) {
    return new Promise((resolve, reject) => {
        let body = new AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize);
        body.samplesToBuffer = samplesToBuffer
        body.learningRateNumerator = learningRateNumerator
        body.learningRateDenominator = learningRateDenominator
        body.learningMaxClusters = learningMaxClusters
        body.learningMaxSamples = learningMaxSamples
        apiInstance.postConfig(body, sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

function getConfigRequest(sensorId) {
    return new Promise((resolve, reject) => {
        apiInstance.getSensor(sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

function deleteSensorRequest(sensorId) {
    return new Promise((resolve, reject) => {
        apiInstance.deleteSensor(sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: JSON.parse(response.text)})
            }
        });
    })
}

function postStreamRequest(sensorId, csv) {
    return new Promise((resolve, reject) => {
        let body = new AmberApiServer.PostStreamRequest(csv);
        apiInstance.postStream(body, sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

function getStatusRequest(sensorId) {
    return new Promise((resolve, reject) => {
        apiInstance.getStatus(sensorId, (error, data, response) => {
            if (error) {
                reject(error)
            } else {
                resolve({sensorId: sensorId, response: data})
            }
        });
    })
}

// basic walkthrough of available api calls
auth2Request(username, password).then(function (data, msg) {  // authenticate
  console.log("auth2Response: %o", data)
  return postSensorRequest("Sensor-1-4002") // create new sensor
}).then(function (data) {
    console.log("postSensorResponse: %o", data)
    return getSensorsRequest()  // get list of sensors
}).then(function (data) {
    console.log("getSensorsResponse: %o", data)
    return getSensorRequest(data[0].sensorId) // get sensor details
}).then(function (data) {
    console.log("getSensorResponse: %o", data.response)
    return putSensorRequest(data.sensorId, "newLabel") // update sensor label
}).then(function (data) {
    console.log("putSensorResponse: %o", data.response)
    return postConfigRequest(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("postConfigResponse: %o", data.response)
    return getConfigRequest(data.sensorId) // get sensor configuration
}).then(function (data) {
    console.log("getConfigResponse: %o", data.response)
    return postStreamRequest(data.sensorId, "0.05,1.0,2.5,0.9") // post streaming data
}).then(function (data) {
    console.log("postStreamResponse: %o", data.response)
    return getStatusRequest(data.sensorId) // get sensor analytic status
}).then(function (data) {
    console.log("getStatusResponse: %o", data.response)
    return deleteSensorRequest(data.sensorId) // delete sensor
}).then(function (data) {
    console.log("deleteSensorResponse: %o", data.response)
    return data
})
