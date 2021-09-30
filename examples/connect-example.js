const MyClient = require('amber-javascript-sdk')

async function list() {
    let amberInstance = new MyClient.AmberClient()
    try {
        const data = await amberInstance.listSensors()
        console.log(`listSensorsResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        console.error(error)
    }
}

list()
