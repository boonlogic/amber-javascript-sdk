# amber-javascript-sdk

# Boon Amber Javascript SDK

An SDK for Boon Amber sensor analytics

- __Website__: [boonlogic.com](https://boonlogic.com)
- __Documentation__: [Boon Docs Main Page](https://docs.boonlogic.com)
- __SDK Functional Breakdown__: [amber-javascript-sdk methods and models](https://boonlogic.github.io/amber-javascript-sdk/docs/index.html)

## Installation

The Boon Amber Javascript SDK is a nodejs project but is not yet published.

```
npm install amber-javascript-sdk
```

## Credentials setup
Note: An account in the Boon Amber cloud must be obtained from Boon Logic to use the Amber SDK.

The username and password should be placed in a file named _~/.Amber.license_ whose contents are the following:

```
{
    "default": {
        "username": "AMBER-ACCOUNT-USERNAME",
        "password": "AMBER-ACCOUNT-PASSWORD",
        "server": "https://amber.boonlogic.com/v1"
    }
}
```

The _~/.Amber.license_ file will be consulted by the Amber SDK to find and authenticate your account credentials with the Amber server. Credentials may optionally be provided instead via the environment variables `AMBER_USERNAME` and `AMBER_PASSWORD` and `AMBER_SERVER`

**amber-javascript-sdk** honors the `HTTP_PROXY` and `http_proxy` environemnt variables if the amber client resides behind a proxy.

[Internal Developers Notes](README-dev.md)

## Connectivity test

The following javascript provides a basic proof-of-connectivity:

[connect-example.js](examples/connect-example.js)

```
const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

async function version() {
    let amberInstance = AmberClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        if (error.name === "AmberHttpException") {
            console.log(error.body)
            console.log(`${error.method} ${error.url}: status=${error.status}`)
        } else {
            console.log(error)
        }
    }
}

version()
```

Running the connect-example.js script should yield output like the following:

```
% node connect-example.js 
getVersionResponse: {
    "release": "0.0.408",
    "apiVersion": "/v1",
    "builder": "005cbc71",
    "expertApi": "109a9be8",
    "expertCommon": "b1aea20e",
    "nanoSecure": "eefb97f1",
    "swaggerUi": "914af396"
}
```

## Full Example

The following javascript will demonstrate each API call in the Amber Javascript SDK.

[full-example.js](examples/full-example.js)

```
const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

async function walkthrough() {
    try {
        let amberInstance = AmberClient()

        const listSensorsResponse = await amberInstance.listSensors()
        console.log(`listSensorsResponse: ${JSON.stringify(listSensorsResponse,null,4)}`)

        const createSensorResponse = await amberInstance.createSensor("Sensor-1-4002")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse,null,4)}`)
        const mySensor = createSensorResponse.sensorId

        const updateLabelResponse = await amberInstance.updateLabel(mySensor, "newLabel")
        console.log(`updateLabelResponse: ${JSON.stringify(updateLabelResponse,null,4)}`)

        const getSensorResponse = await amberInstance.getSensor(mySensor)
        console.log(`getSensorResponse: ${JSON.stringify(getSensorResponse,null,4)}`)

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, 1, 25)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse,null,4)}`)

        const getConfigResponse = await amberInstance.getConfig(mySensor)
        console.log(`getConfigResponse: ${JSON.stringify(getConfigResponse,null,4)}`)

        const streamSensorResponse = await amberInstance.streamSensor(mySensor, "0.05,1.0,2.5,0.9")
        console.log(`streamSensorResponse: ${JSON.stringify(streamSensorResponse,null,4)}`)

        const getStatusResponse = await amberInstance.getStatus(mySensor)
        console.log(`getStatusResponse = ${JSON.stringify(getStatusResponse,null,4)}`)

        const deleteSensorResponse = await amberInstance.deleteSensor(mySensor)
        console.log(`deleteSensorResponse = ${JSON.stringify(deleteSensorResponse,null,4)}`)
    }
    catch(error) {
        if (error.name === "AmberHttpException") {
            console.log(error.body)
            console.log(`${error.method} ${error.url}: status=${error.status}`)
        } else {
            console.log(error)
        }
    }
}

walkthrough()
```

## Sample CSV file processor

The following will process a file named data.csv residing in the examples directory of this javascript.
Each row will be fed to an Amber instance with SI analytics being displayed.

[stream-example.js](examples/stream-example.js)<br>
[data.csv](examples/data.csv)

```
const fs = require('fs')
const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

// create amber instance

async function streaming() {
    try {
        let amberInstance = new AmberClient()

        let createSensorResponse = await amberInstance.createSensor("sensor-1-999")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse,null,4)}`)
        const mySensor = createSensorResponse.sensorId

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, 1, 25)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse,null,4)}`)

        const filedata = fs.readFileSync('data.csv', 'UTF-8')

        // split the contents by new line
        const lines = filedata.split(/\r?\n/)

        for (let line of lines) {
            console.log(data=`${line}`)
            let streamSensorResponse = await amberInstance.streamSensor(mySensor, line)
            console.log(`streamSensorResponse: ${JSON.stringify(streamSensorResponse,null,4)}`)
        }
    }
    catch(error) {
        if (error.name === "AmberHttpException") {
            console.log(error.body)
            console.log(`${error.method} ${error.url}: status=${error.status}`)
        } else {
            console.log(error)
        }
    }
}

streaming()
```

## Sample Pretraining

The following will process a file named pretrain.csv residing in the examples directory of this javascript.
The entire dataset will be pretrained.

[pretrain-example.js](examples/pretrain-example.js)<br>
[pretrain.csv](examples/pretrain.csv)

```
const fs = require('fs')
const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

// pretraining example

async function pretraining() {
    try {
        let amberInstance = AmberClient()

        let createSensorResponse = await amberInstance.createSensor("sensor-1-999")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse,null,4)}`)
        const mySensor = createSensorResponse.sensorId

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, 1, 25)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse,null,4)}`)

        // read the entire data set
        let filedata = fs.readFileSync('pretrain.csv', 'UTF-8')

        // clean cr/nl
        filedata = filedata.replace(/[\r\n\t]/g, "")

        // begin pretraining with autotuneConfig enabled
        let pretrainResponse = await amberInstance.pretrainSensor(mySensor, filedata, true)
        console.log(`pretrainResponse: ${JSON.stringify(pretrainResponse,null,4)}`)
        let state = pretrainResponse.state
        while (state == "Pretraining") {
            await new Promise(r => setTimeout(r, 5000));
            let pretrainStateResponse = await amberInstance.getPretrainState(mySensor)
            state = pretrainStateResponse.state
            console.log(`pretrainStateResponse: ${JSON.stringify(pretrainStateResponse,null,4)}`)
        }
    }
    catch(error) {
        if (error.name === "AmberHttpException") {
            console.log(error.body)
            console.log(`${error.method} ${error.url}: status=${error.status}`)
        } else {
            console.log(error)
        }
    }
}

pretraining()
```
