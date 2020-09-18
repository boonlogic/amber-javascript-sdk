let AmberApiServer = require('amber_javascript_sdk');

// create oauth2 token using credentials
let apiInstance = new AmberApiServer.DefaultApi();

// let body = new AmberApiServer.PostAuth2Request();
username = "your-username";
password = "your-password";

let defaultClient = AmberApiServer.ApiClient.instance;
let authorize_amber_pool = defaultClient.authentications['authorize-amber-pool'];

let body = new AmberApiServer.PostAuth2Request(password, username);
apiInstance.postOauth2(body, (error, data, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});
