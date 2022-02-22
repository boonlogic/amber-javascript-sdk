const fs = require('fs')
const {AmberClient, AmberHttpException, AmberUserException} = require('amber-javascript-sdk')

// create amber instance

async function streaming() {
    try {
        let amberInstance = new AmberClient()

        let createSensorResponse = await amberInstance.createSensor("sensor-1-999")
        console.log(`createSensorResponse: ${JSON.stringify(createSensorResponse, null, 4)}`)
        const mySensor = createSensorResponse.sensorId

        let featureCount = 1
        let streamingWindowSize = 25
        let samplesToBuffer = 10000
        let learningRateNumerator = 10
        let learningRateDenominator = 10000
        let learningMaxClusters = 1000
        let learningMaxSamples = 1000000
        let anomaly_history_window = 10000
        let features = [
            {
                minVal: 0,
                maxVal: 25
            }
        ]

        const configureSensorResponse = await amberInstance.configureSensor(mySensor, featureCount, streamingWindowSize,
            samplesToBuffer, learningRateNumerator, learningRateDenominator, learningMaxClusters, learningMaxSamples,
            anomaly_history_window, features)
        console.log(`configureSensorResponse: ${JSON.stringify(configureSensorResponse, null, 4)}`)

        const filedata = fs.readFileSync('data.csv', 'UTF-8')

        // split the contents by new line
        const lines = filedata.split(/\r?\n/)

        for (let line of lines) {
            console.log(data = `${line}`)
            let streamSensorResponse = await amberInstance.streamSensor(mySensor, line)
            console.log(`streamSensorResponse: ${JSON.stringify(streamSensorResponse, null, 4)}`)
        }
    } catch (error) {
        if (error instanceof AmberHttpException) {
            console.log(`${error.method} ${error.url}: status=${error.status}\n${error.message}`)
        } else {
            console.log(error)
        }
    }
}

streaming()
