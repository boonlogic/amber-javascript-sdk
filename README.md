# amber-javascript-sdk

# Boon Amber Javascript SDK

An SDK for Boon Amber sensor analytics

- __Website__: [boonlogic.com](https://boonlogic.com)
- __Documentation__: [Boon Docs Main Page](https://docs.boonlogic.com)
- __SDK Functional Breakdown__: [amber-javascript-sdk methods and models](https://boonlogic.github.io/amber-javascript-sdk/docs/index.html)

## Installation

The Boon Amber Javascript SDK is a nodejs project but is not yet published.

```
npm install git+ssh://git@github.com/boonlogic/amber-javascript-sdk.git
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

The _~/.Amber.license_ file will be consulted by the Amber SDK to find and authenticate your account credentials with the Amber server. Credentials may optionally be provided instead via the environment variables `AMBER_USERNAME` and `AMBER_PASSWORD`.

## Connectivity test

The following javascript provides a basic proof-of-connectivity:

[connect-example.js](examples/connect-example.js)

```
const MyClient = require('amber-javascript-sdk')

async function version() {
    let amberInstance = MyClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        console.log(error)
        let response = error.response
        let request = response.request
        console.log(`${request.url}: status=${error.status}`)
        console.log(`body: ${response.text}`)
    }
}

version()
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
const MyClient = require('amber-javascript-sdk')

async function walkthrough() {
    try {
        let amberInstance = MyClient()

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
        let response = error.response
        let request = response.request
        console.log(`${request.url}: status=${error.status}`)
        console.log(`body: ${response.text}`)
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
const MyClient = require('amber-javascript-sdk')

// create amber instance

async function streaming() {
    try {
        let amberInstance = new MyClient()

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
        let response = error.response
        let request = response.request
        console.log(`${request.url}: status=${error.status}`)
        console.log(`body: ${response.text}`)
    }
}

streaming()
```

## Sample Pretraining

The following will process a file named pretrain.csv residing in the examples directory of this javascript.
The entire dataset will be pretrained.

[stream-example.js](examples/pretrain-example.js)<br>
[data.csv](examples/pretrain.csv)

```
const fs = require('fs')
const MyClient = require('amber-javascript-sdk')

// pretraining example

async function pretraining() {
    try {
        let amberInstance = MyClient()

        let createSensorResponse = await amberInstance.createSensor("sensor-1-999")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse,null,4)}`)
        const mySensor = createSensorResponse.sensorId

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, 1, 25)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse,null,4)}`)

        // read the entire data set
        let filedata = fs.readFileSync('pretrain.csv', 'UTF-8')

        // clean cr/nl
        filedata = filedata.replace(/[\r\n\t]/g, "")

        // begin pretraining
        let pretrainResponse = await amberInstance.pretrainSensor(mySensor, filedata, false)
        console.log(`pretrainResponse: ${JSON.stringify(pretrainResponse,null,4)}`)
        let state = pretrainResponse.response.state
        while (state == "Pretraining") {
            await new Promise(r => setTimeout(r, 5000));
            let pretrainStateResponse = await amberInstance.getPretrainState(mySensor)
            state = pretrainStateResponse.response.state
            console.log(`pretrainStateResponse: ${JSON.stringify(pretrainStateResponse,null,4)}`)
        }
    }
    catch(error) {
        let response = error.response
        let request = response.request
        console.log(`${request.url}: status=${error.status}`)
        console.log(`body: ${response.text}`)
    }
}

pretraining()
```
