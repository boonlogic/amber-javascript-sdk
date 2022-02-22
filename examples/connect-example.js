const {AmberClient,AmberHttpException,AmberUserException} = require('amber-javascript-sdk')

async function version() {
    let amberInstance = AmberClient()
    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        if (error instanceof AmberHttpException) {
            console.log(`${error.method} ${error.url}: status=${error.status}\n${error.message}`)
        } else {
            console.log(error)
        }
    }
}

version()
