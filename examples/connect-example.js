const MyClient = require('amber-javascript-sdk')

// create amber instance
let amberInstance = new MyClient.AmberClient()

amberInstance.listSensors().then(function (data) {
    console.log("listSensorsResponse: %o", data)
}).catch(error => {
    console.error(error)
})