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
        const getConfigResponse = await amberInstance.getConfig(mySensor)
        console.log(`getConfigResponse: ${JSON.stringify(getConfigResponse,null,4)}`)
    }
    catch(error) {
        if (error instanceof AmberHttpException) {
            console.log(`${error.method} ${error.url}: status=${error.status}\n${error.message}`)
        } else {
            console.log(error)
        }
    }
}

pretraining()
