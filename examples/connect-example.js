const MyClient = require('amber-javascript-sdk')

async function version() {
    let amberInstance = MyClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        console.log(error)
        let response = error.response
        let request = response.request
        console.log(`${request.url}: status=${error.status}`)
        console.log(`body: ${response.text}`)
    }
}

version()
