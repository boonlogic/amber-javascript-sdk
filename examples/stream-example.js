const readline = require('readline')
const fs = require('fs')

let MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.createSensor("sensor-1-999").then(function (data) {
    console.log("createSensorResponse: %o", data)
    return amberInstance.configureSensor(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("configureSensorResponse: %o", data.response)
    const readInterface = readline.createInterface({
        input: fs.createReadStream('examples/data.csv'),
        output: process.stdout,
        console: false
    })
    readInterface.on('line', function (line) {
        amberInstance.streamSensor(data.sensorId, line).then(function (data) {
            console.log("%o", data.response)
        })
    })
})
