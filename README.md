# amber-javascript-sdk

# Boon Amber Javascript SDK

An SDK for Boon Amber sensor analytics

- __Website__: [boonlogic.com](https://boonlogic.com)
- __Documentation__: [Boon Docs Main Page](https://docs.boonlogic.com)
- __SDK Functional Breakdown__: [amber-javascript-sdk methods and models](https://boonlogic.github.io/amber-javascript-sdk/docs/index.html)

## Installation

The Boon Amber Javascript SDK is a nodejs project but is not yet published.

```
npm install amber-javascript-sdk
```

## Credentials setup
Note: An account in the Boon Amber cloud must be obtained from Boon Logic to use the Amber SDK.

The username and password should be placed in a file named _~/.Amber.license_ whose contents are the following:

```
{
    "default": {
        "username": "AMBER-ACCOUNT-USERNAME",
        "password": "AMBER-ACCOUNT-PASSWORD",
        "server": "https://amber.boonlogic.com/v1"
    }
}
```

The _~/.Amber.license_ file will be consulted by the Amber SDK to find and authenticate your account credentials with the Amber server. Credentials may optionally be provided instead via the environment variables `AMBER_USERNAME` and `AMBER_PASSWORD` and `AMBER_SERVER`

Amber configuration can be specified through the environment if a license file is not present OR if
certain settings need to be overridden.

**AMBER_LICENSE_FILE**: sets license_file path<br>
**AMBER_LICENSE_ID**: sets license_id to use in amber license file<br>
**AMBER_USERNAME**: overrides the username as found in .Amber.license file<br>
**AMBER_PASSWORD**: overrides the password as found in .Amber.license file<br>
**AMBER_SERVER**: overrides the server as found in .Amber.license file<br>
**AMBER_OAUTH_SERVER**: overrides the oauth server as found in .Amber.license file<br>
**AMBER_SSL_CERT**: path to ssl client cert file (.pem)<br>
**AMBER_SSL_VERIFY**: A boolean value indicating whether to verify the server’s TLS certificate<br>
**AMBER_PROXY**: Send requests through this proxy<br>

[Internal Developers Notes](README-dev.md)

## Connectivity test

The following javascript provides a basic proof-of-connectivity:

[connect-example.js](examples/connect-example.js)

```
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
```

Running the connect-example.js script should yield output like the following:

```
% node connect-example.js 
getVersionResponse: {
    "release": "0.0.408",
    "apiVersion": "/v1",
    "builder": "005cbc71",
    "expertApi": "109a9be8",
    "expertCommon": "b1aea20e",
    "nanoSecure": "eefb97f1",
    "swaggerUi": "914af396"
}
```

## Full Example

The following javascript will demonstrate each API call in the Amber Javascript SDK.

[full-example.js](examples/full-example.js)

## Sample CSV file processor

The following will process a file named data.csv residing in the examples directory of this javascript.
Each row will be fed to an Amber instance with SI analytics being displayed.

[stream-example.js](examples/stream-example.js)<br>
[data.csv](examples/data.csv)

## Sample Pretraining

The following will process a file named pretrain.csv residing in the examples directory of this javascript.
The entire dataset will be pretrained.

[pretrain-example.js](examples/pretrain-example.js)<br>
[pretrain.csv](examples/pretrain.csv)

