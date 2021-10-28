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
