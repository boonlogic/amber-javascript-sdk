# amber_javascript_sdk

# Boon Amber Javascript SDK

An SDK for Boon Amber sensor analytics

- __Website__: [boonlogic.com](https://boonlogic.com)
- __Documentation__: [Boon Docs Main Page](https://docs.boonlogic.com)
- __SDK Functional Breakdown__: [amber-javascript-sdk methods and models](https://boonlogic.github.io/amber-javascript-sdk/FunctionalBreakdown.md)

## Installation

The Boon Amber Javascript SDK is a nodejs project but is not yet published.

```
npm install git+ssh://git@github.com/boonlogic/amber-javascript-sdk.git
```

## Credentials setup

Note: An account in the Boon Amber cloud must be obtained from Boon Logic to use the Amber SDK.

As of the beta release, the amber-javascript-sdk does not read from the .Amber.license file.
All oauth2 credentials must be used directly when fetching an oauth2 token.

## Connectivity test

The following javascript provides a basic proof-of-connectivity:

[connect-example.js](examples/connect-example.js)

```
let AmberApiServer = require('amber_javascript_sdk');

// create oauth2 token using credentials
let apiInstance = new AmberApiServer.DefaultApi();

// let body = new AmberApiServer.PostAuth2Request();
username = "your-username";
password = "your-password";

let defaultClient = AmberApiServer.ApiClient.instance;
let authorize_amber_pool = defaultClient.authentications['authorize-amber-pool'];

let body = new AmberApiServer.PostAuth2Request(password, username);
apiInstance.postOauth2(body, (error, data, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});

```
Running the connect-example.js script should yield output like the following:
```
$ node examples/connect-example.js
{
  idToken: 'eyJraWQiOiJMSElFb3JXWTVaY1lJeTZOTThMbXVBUHpWYWxUOEdTS2w3UGxiS2pTdkFRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1MjZlMzM2Yi00ZmY1LTQwNjQtYTY1ZS02MDBmZTA5NmMyYmEiLCJhdWQiOiIzbWFoZHZtMmU2dTlsdm5rYms2OW1hajloMCIsImNvZ25pdG86Z3JvdXBzIjpbInByb2R1Y3Rpb24iXSwiZXZlbnRfaWQiOiI1MjNmMzgzMC01Yzc3LTQ5NTYtODgwYy04YmMzZDU1OTkyOTgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwMDM5NTU5MSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfdDNuMmZoUEVsIiwiY29nbml0bzp1c2VybmFtZSI6ImppbS1wcm9kIiwiZXhwIjoxNjAwMzk5MTkxLCJpYXQiOjE2MDAzOTU1OTEsImVtYWlsIjoiamltdGZyb21tbkBnbWFpbC5jb20ifQ.eklP3LPVfPGhFzSvp6HyT8L8kt0OQsFAzgD4DMYuWru-RuqkdjPV5PwdMKlGbnjv09Cw4dQsN2gdZ6dcUemPZOn40XZif5OSoQZftsCMPuuXUphKt6wtXZKYBVH-kmgokzIn_zVoGLgG6acsqZCMp_XeYBHUGMeJUjNG_Bzu18RZ6hC_tml1RzySEh2fvN21fMKxIuCBgJOOZRmSD6D-wmExcIv3qPLMOHvgdmPMAv1ujqg0ES4U2KAaqjiPAFwzKvUpjV3-kuy0l99Sc-pH481rplgbK_Xjako35IpJpyFFWAHwLcUn5b22rzxw41vU5cMXYXdwR0MbRD2a8vXocQ',
  expiresIn: '3600',
  refreshToken: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.KRZMf9OEbQSqe8_3weF-TldpqgUNGkzU94ayATlZGj9HWwXIqRj0xxw2pY0k8HFAJ8Fy1aos_CnMsuuyKEDUhUyTtalYcEn6IvQP4C-gxJxEEDkVz-DCOijhxwS8HRF9nSizkFH8zCQaYVlao0hBEeU6uzofmB0GSPky8OTA2-Igvxq4kvE22teyHjCbM-qG7xR4Rrq4QRFWXtJqYawcZU2UpTtBe-r1NOxFyLF-0KLHj8sHePISDTNdb5632uzwzqTISV2sjND0Id5PRgmWHtL31sjdx4tPABw1HP_uvGh9bif0Sev4_7KerntDRzieOJIaHTR4qKTdRflOvesrAQ.HdrB2MB9XL1aVZD5.pBlou_qTg66pIYS2SFlWdHdDO9qcse6-96zp7dBTZHuX7eZW3abOnP09h3ieK5MmNEoN1Y4KBc5PIHWibY9NuSwW21u14sfO4wnsiO4a4PUWdJz4uUe26TX8QtiM219bfSMvPRAHzKIxdkMEKnsWePw8Kmi3KhqGo11jIaSQ9vjD36pFer0eUYzx0p92bDCyW7EveKV4EIKZYep2DoBicpLogvWxlE58rU0n8S42cjgewJodiQfIS0RiMM4UEwHw4PmP29Y6RCzbXMuw6hnkfYpqdpDvfZYNWDk0OkOOGyxQdVb3aLETdiy1B-o1tE8ZPxVwTE9w1TBmx6odCih-5qdyhSQ32nA5ztQDF2-crT8be2b0PQow6TAqOgiYriZF_uF1R__2uePYTEYsGV8YP3wDLIvdZxEW8QmyK_Tam6l4_QsbMiKwpnZYKYYYUdxcHcn45FeK6-AF7KwaOGQm3YnsQL4iARQIkOch-TBLTWJ6HcsTgRks-klaqcYoPimdekRWhuMYwLJ5RCq3ZcJy6QJBMGx2rvODe7vqGOD13YQsXsNlOhl98x6fanjC0v9d3ZGPLK7iVx7g3Pf2Eq-PSToFPayfh-lglZOe5RieJSeCE2ag3q49jerZcgsQeHDOMcaXwas51K79ltkq6ggJGvhYrP0CG30sTl7-2Hsf3jPYCajpUuWg7srm-Xs_J3l3keYWNSMWMSuLOyVb5R6WDl_YyXRIwo2oJ6epgmdyyZRtdpsILJC-YQLvq4d-A0JGAUnRhRIh3jqq0zRRyeur1s7SaBoL1vaVY1M2j8P42_WZVO7LZWA9CD-0KOILrgxzZXlddLJKibJRMVFITJ_ieJYFWLuWaexwU2F3-M3PdtHAb7uEsev469MBACJxlJw4PejXFYa1p947s23VPGe3YO0crKn-TvK2OeithgFxS_8wOX-X9y6-XSq1IJXvgTgqY82dJ7xH_2JGOMvgYZZGtE_9zZ26biMp9sXKnLT6Yz3cdjbFk7I5AZGTCaIIzTYgBipHgyJiROnB5g6U2TvyLBEAWagjl-BVn0v3ADHIlkM7Uyz8dQ1hrbamCk4mKOpUWB7K0isSxeOAWvPBYujxn7cIN7XCzpakhPn5zlZ1emXcZSAnkK4zLuocgbW5CaFqZ4_p4q2VqGUbrD_6bSD2qxk7EO88wmLBDMZShAzZvrsUTatmDMENGOsTtWCE8DLqavYW3HxkfkixmJj9r8O2CYoHT22NSHVoffG-Kz-lhnbBI_9Oz2xkac46ml7Su9fJXaBGax6gOBNL.SrEwhUF_Qo-l3PVkj23y0w',
  tokenType: 'Bearer'
}
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
username = "username";
password = "password";

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

The following will process a file named data.csv residing in the examples directory of this javascript.
Each row will be fed to an Amber instance with SI analytics being displayed.

[stream-example.js](examples/stream-example.js)<br>
[data.csv](examples/data.csv)

```
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
```
