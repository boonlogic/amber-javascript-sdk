const fs = require('fs')
const MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.createSensor("sensor-1-999").then(function (data) {
    console.log("createSensorResponse: %o", data)
    return amberInstance.configureSensor(data.sensorId, 1, 25) // configure sensor
}).then(function (data) {
    console.log("configureSensorResponse: %o", data.response)

    const filedata = fs.readFileSync('data.csv', 'UTF-8')

    // split the contents by new line
    const lines = filedata.split(/\r?\n/)

    // stream data line by line using synchronous pattern.
    // amber results are received before next call is made
    let chain = Promise.resolve()
    for (let line of lines) {
        chain = chain.then(() => amberInstance.streamSensor(data.sensorId, line).then(function (data) {
            console.log("%o, %o", line, data.response)
        }))
    }
}).catch(error => {
    console.error(error)
})

