const MyClient = require('amber-javascript-sdk')

//
// amber-javascript-sdk example
//
// walk through all of the available amber endpoints
//
async function walkthrough() {
    try {
        let amberInstance = new MyClient.AmberClient()

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
        console.error(error)
    }
}

walkthrough()
