const MyClient = require('amber-javascript-sdk')

async function version() {
    let amberInstance = MyClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        console.log(error.body)
        console.log(`${error.method} ${error.url}: status=${error.status}`)
    }
}

version()
