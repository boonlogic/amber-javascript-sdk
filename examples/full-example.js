const MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

// basic walkthrough of available api calls
amberInstance.createSensor("Sensor-1-4002").then(function (data) { // create new sensor
    console.log("createSensorResponse: %o", data)
    return amberInstance.listSensors()  // get list of sensors
}).then(function (data) {
    console.log("listSensorsResponse: %o", data)
    return amberInstance.getSensor(data[0].sensorId) // get sensor details
}).then(function (data) {
    console.log("getSensorResponse: %o", data.response)
    return amberInstance.updateLabel(data.sensorId, "newLabel") // update sensor label
}).then(function (data) {
    console.log("updateLabelResponse: %o", data.response)
    return amberInstance.configureSensor(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("configureSensorResponse: %o", data.response)
    return amberInstance.getConfig(data.sensorId) // get sensor configuration
}).then(function (data) {
    console.log("getConfigResponse: %o", data.response)
    return amberInstance.streamSensor(data.sensorId, "0.05,1.0,2.5,0.9") // post streaming data
}).then(function (data) {
    console.log("streamSensorResponse: %o", data.response)
    return amberInstance.getStatus(data.sensorId) // get sensor analytic status
}).then(function (data) {
    console.log("getStatusResponse: %o", data.response)
    return amberInstance.deleteSensor(data.sensorId) // delete sensor
}).then(function (data) {
    console.log("deleteSensorResponse: %o", data.response)
    return data
}).catch(error => {
    console.error(error)
})
