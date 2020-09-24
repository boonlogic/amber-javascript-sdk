let MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.listSensor().then(function (data) {
    console.log("sensorList: %o", data)
})
