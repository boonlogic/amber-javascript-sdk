const fs = require('fs')
const {AmberClient,AmberHttpException,AmberUserException,TSMuxFromFiles} = require('amber-javascript-sdk')

// pretraining example

async function pretraining() {
    try {
        let amberInstance = AmberClient()

        let createSensorResponse = await amberInstance.createSensor("sensor-1-999")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse,null,4)}`)
        const mySensor = createSensorResponse.sensorId

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, 1, 25)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse,null,4)}`)

        // combine time series data into a single data stream
        console.log("creating time series data stream via tsmux")
        let filedata = TSMuxFromFiles('json', ["DCD_Chiller-5_ActivePower.txt", "DCD_Chiller-5_InletTemp.txt", "DCD_Chiller-5_OutletTemp.txt", "DCD_Chiller-5_TempSP.txt"])

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
