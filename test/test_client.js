const expect = require('chai').expect
const { SecretsManagerClient, GetSecretValueCommand} = require("@aws-sdk/client-secrets-manager")
const AmberClient = require("..")

let secrets = {}
let license_id = ''
let license_profile = {}
let saved_env = {
    AMBER_LICENSE_FILE: null,
    AMBER_USERNAME: null,
    AMBER_PASSWORD: null,
    AMBER_SERVER: null,
    AMBER_OAUTH_SERVER: null,
    AMBER_LICENSE_ID: null,
    AMBER_SSL_CERT: null,
    AMBER_SSL_VERIFY: null
}

function zero_maker() {
    return 0
}

/**
 *  fetch credentials from aws secrets manager
 **/
async function get_secrets()
{
    try {
        const client = new SecretsManagerClient({region: 'us-east-1'})
        const command = new GetSecretValueCommand({SecretId: 'amber-test-users'});
        const response = await client.send(command);
        return JSON.parse(response.SecretString)
    } catch (error) {
        console.log(error)
    }
}

/**
 * secrets downloaded from points beyond
 **/
async function amber_set_test_profile() {

    try {
        let local_license_file = process.env.AMBER_LICENSE_FILE || null
        if (local_license_file != null) {
            // load credential set for test using the AMBER_LICENSE_FILE specified
            // in the environment
            let amber_instance = AmberClient()
            process.env.AMBER_USERNAME = amber_instance.license_profile.username
            process.env.AMBER_PASSWORD = amber_instance.license_profile.password
            process.env.AMBER_SERVER = amber_instance.license_profile.server
            process.env.AMBER_OAUTH_SERVER = amber_instance.license_profile.oauth_server
        } else {
            // load credential set from secrets manager, AMBER_LICENSE_ID must be specified in environment
            // to select which credential set to use
            if (license_id === "") {
                license_id = process.env.AMBER_LICENSE_ID
                if (license_id === undefined) {
                    expect(license_id).to.not.be.undefined
                }
                secrets = await get_secrets()
                license_profile = secrets[license_id]
                if (license_profile === undefined) {
                    expect(license_profile).to.not.be.undefined
                }
            }
            process.env.AMBER_USERNAME = license_profile.username
            process.env.AMBER_PASSWORD = license_profile.password
            process.env.AMBER_SERVER = license_profile.server
            process.env.AMBER_OAUTH_SERVER = license_profile.oauth_server || license_profile.server
        }
    }
    catch(error) {
        throw error
    }
}


function clear_environment() {
    for (const [key, value] of Object.entries(saved_env)) {
        saved_env[key] = process.env[key] || null
        process.env[key] = undefined
    }
}

function restore_environment() {
    for (const [key, value] of Object.entries(saved_env)) {
        process.env[key] = saved_env[key]
    }
}

describe('#amber_instance()', function () {
    context('environmental profile tests', function () {

        // clear environment of AMBER vars
        clear_environment()

        it('should load same license profile with param & env', function() {
            // load profile using license file specified as parameter
            let profile1 = AmberClient(license_id, license_file='test.Amber.license')
            // load the same profile using license loaded from environment
            process.env.AMBER_LICENSE_FILE = 'test.Amber.license'
            let profile2 = AmberClient(license_id)
            expect(profile1.license_profile).to.eql(profile2.license_profile)
        })

        it('should override items in license file through environment', function() {
            // override items in license file through environment
            process.env.AMBER_USERNAME = 'xyyyAmberUser'
            process.env.AMBER_PASSWORD = 'bogus_password'
            process.env.AMBER_SERVER = 'https://temp.amber.boonlogic.com/v1'
            process.env.AMBER_SSL_CERT = 'bogus_ssl_cert'
            process.env.AMBER_SSL_VERIFY = 'false'
            let profile3 = AmberClient(license_id, 'test.Amber.license')
            expect(profile3.license_profile.server).to.eql('https://temp.amber.boonlogic.com/v1')
            expect(profile3.license_profile.username).to.eql('xyyyAmberUser')
            expect(profile3.license_profile.password).to.eql('bogus_password')
            expect(profile3.license_profile.cert).to.eql('bogus_ssl_cert')
            expect(profile3.license_profile.verify).to.eql(false)
        })

        it('should set configuration through environment with non-existent license file', function() {
            //set configuration through environment with non-existent license file
            process.env.AMBER_USERNAME = "EnvironmentAmberUser"
            process.env.AMBER_PASSWORD = "bogus_password"
            process.env.AMBER_SERVER = "https://temp.amber.boonlogic.com/v1"
            process.env.AMBER_SSL_CERT = "bogus_ssl_cert"
            process.env.AMBER_SSL_VERIFY = "false"
            let profile4 = AmberClient(license_id, 'bogus.Amber.license')
            expect(profile4.license_profile.server).to.eql('https://temp.amber.boonlogic.com/v1')
            expect(profile4.license_profile.username).to.eql('EnvironmentAmberUser')
            expect(profile4.license_profile.password).to.eql('bogus_password')
            expect(profile4.license_profile.cert).to.eql('bogus_ssl_cert')
            expect(profile4.license_profile.verify).to.eql(false)
        })

        // restore AMBER vars
        restore_environment()
    })
})

describe('#authenticate()', function () {

    before = (async function() {
        await amber_set_test_profile()
    })

    context('without arguments', function () {

        it('should return 0', function () {
        })

    })
})

describe('#sensor_ops()', function () {

    context('without arguments', function () {
        it('should return 0', function () {
        })
    })
})

describe('#csv_convert()', function () {

    context('without arguments', function () {
        it('should return 0', function () {
        })
    })
})

/*
describe('#version()', async function () {

    let amberInstance = MyClient()

    try {
        const data = await amberInstance.getVersion()
        console.log(`getVersionResponse: ${JSON.stringify(data,null,4)}`)
    }
    catch(error) {
        console.log(error.body)
        console.log(`${error.method} ${error.url}: status=${error.status}`)
    }

    context('without arguments', function () {
        it('should return 0', function () {
            expect(zero_maker()).to.equal(0)
        })
    })
})


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

*/
