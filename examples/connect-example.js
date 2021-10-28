const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

async function version() {
    let amberInstance = AmberClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        if (error.name === "AmberHttpException") {
            console.log(error.body)
            console.log(`${error.method} ${error.url}: status=${error.status}`)
        } else {
            console.log(error)
        }
    }
}

version()
