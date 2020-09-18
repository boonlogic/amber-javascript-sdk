const readline = require('readline');
const fs = require('fs');


let AmberApiServer = require('amber_javascript_sdk');

// create oauth2 token using credentials
let apiInstance = new AmberApiServer.DefaultApi();

// let body = new AmberApiServer.PostAuth2Request();
username = "your-username";
password = "your-password";

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

auth2Request(username, password).then(function (data) {  // authenticate
    console.log("auth2Response: %o", data)
    return postSensorRequest("Sensor-1-999") // create new sensor
}).then(function (data) {
    console.log("postSensorResponse: %o", data)
    return postConfigRequest(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("postConfigResponse: %o", data.response)
    const readInterface = readline.createInterface({
        input: fs.createReadStream('examples/data.csv'),
        output: process.stdout,
        console: false
    });
    readInterface.on('line', function (line) {
        postStreamRequest(data.sensorId, line).then(function (data) {
            console.log("%o", data.response)
        })
    })
})
