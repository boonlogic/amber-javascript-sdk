let MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.getSensorsRequest().then(function (data) {
    console.log("getSensorsResponse: %o", data)
})
