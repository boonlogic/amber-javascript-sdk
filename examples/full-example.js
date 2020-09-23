let MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

// basic walkthrough of available api calls
amberInstance.postSensorRequest("Sensor-1-4002").then(function (data) { // create new sensor
    console.log("postSensorResponse: %o", data)
    return amberInstance.getSensorsRequest()  // get list of sensors
}).then(function (data) {
    console.log("getSensorsResponse: %o", data)
    return amberInstance.getSensorRequest(data[0].sensorId) // get sensor details
}).then(function (data) {
    console.log("getSensorResponse: %o", data.response)
    return amberInstance.putSensorRequest(data.sensorId, "newLabel") // update sensor label
}).then(function (data) {
    console.log("putSensorResponse: %o", data.response)
    return amberInstance.postConfigRequest(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("postConfigResponse: %o", data.response)
    return amberInstance.getConfigRequest(data.sensorId) // get sensor configuration
}).then(function (data) {
    console.log("getConfigResponse: %o", data.response)
    return amberInstance.postStreamRequest(data.sensorId, "0.05,1.0,2.5,0.9") // post streaming data
}).then(function (data) {
    console.log("postStreamResponse: %o", data.response)
    return amberInstance.getStatusRequest(data.sensorId) // get sensor analytic status
}).then(function (data) {
    console.log("getStatusResponse: %o", data.response)
    return amberInstance.deleteSensorRequest(data.sensorId) // delete sensor
}).then(function (data) {
    console.log("deleteSensorResponse: %o", data.response)
    return data
})
