const readline = require('readline')
const fs = require('fs')

let MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.postSensorRequest("sensor-1-999").then(function (data) {
    console.log("postSensorResponse: %o", data)
    return amberInstance.postConfigRequest(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("postConfigResponse: %o", data.response)
    const readInterface = readline.createInterface({
        input: fs.createReadStream('examples/data.csv'),
        output: process.stdout,
        console: false
    })
    readInterface.on('line', function (line) {
        amberInstance.postStreamRequest(data.sensorId, line).then(function (data) {
            console.log("%o", data.response)
        })
    })
})
