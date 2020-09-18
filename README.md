# amber_javascript_sdk

# Boon Amber Javascript SDK

An SDK for Boon Amber sensor analytics

- __Website__: [boonlogic.com](https://boonlogic.com)
- __Documentation__: [Boon Docs Main Page](https://docs.boonlogic.com)
- __SDK Functional Breakdown__: [amber-javascript-sdk methods and models](https://boonlogic.github.io/amber-javascript-sdk/docs/FunctionalBreakDown.md)

## Installation

The Boon Amber Javascript SDK is a nodejs project but is not yet published.

```
npm install git+ssh://git@github.com/boonlogic/amber-javascript-sdk.git
```

## Credentials setup

Note: An account in the Boon Amber cloud must be obtained from Boon Logic to use the Amber SDK.

As of the beta release, the amber-javascript-sdk does not read from from the .Amber.license file.
All oauth2 credentials must be used directly when fetching an oauth2 token.

## Connectivity test

The following javascript provides a basic proof-of-connectivity:

[connect-example.js](examples/connect-example.js)

```

```

Running the connect-example.js script should yield output like the following:
```
$ node connect-example.py
sensors: {}
```
where the dictionary `{}` lists all sensors that currently exist under the given Boon Amber account.

## Full Example

The following javascript will demonstrate each API call in the Amber Javascript SDK.

[full-example.js](examples/full-example.js)

```
let AmberApiServer = require('amber_javascript_sdk');

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
```

## Sample CSV file processor

The following will process a file named data.csv residing in the current working directory of this javascript.
Each row will be fed to an Amber instance with SI analytics being displayed.

[stream-example.js](examples/stream-example.js)<br>
[data.csv](examples/data.csv)

```
<empty>
```
