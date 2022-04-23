const {AmberClient} = require("../dist/sdk")
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const env_mappings = {
    'AMBER_LICENSE_ID': 'license_id',
    'AMBER_LICENSE_FILE': 'license_file',
    'AMBER_USERNAME': 'username',
    'AMBER_PASSWORD': 'password',
    'AMBER_SERVER': 'server',
    'AMBER_OAUTH_SERVER': 'oauth-server',
    'AMBER_SSL_CERT': 'ssl-cert',
    'AMBER_SSL_VERIFY': 'ssl-verify'
}

/**
 *  create an amber client using either local configuration file OR secrets manager
 *  AMBER_TEST_LICENSE_ID is required in environment
 *  AMBER_TEST_LICENSE_FILE is optional, secrets manager is used if AMBER_TEST_LICENSE_FILE is not
 *  found in env.
 **/
async function create_amber_client() {

    let amber_license_file = process.env.AMBER_TEST_LICENSE_FILE || null
    let amber_license_id = process.env.AMBER_TEST_LICENSE_ID || null
    if (amber_license_id == null) {
        throw `AMBER_TEST_LICENSE_ID must be sent in environment`
    }

    let amber_client = null
    try {
        clear_environment()

        if (amber_license_file != null) {
            // load license profile using a local license file
            amber_client = AmberClient(amber_license_id, amber_license_file)
        } else {
            // load license profile from secrets manager
            let secrets = await get_secrets()
            let license_profile = secrets[amber_license_id]
            if (license_profile === undefined) {
                throw `license id of ${amber_license_id} not found in secrets manager`
            }
            process.env.AMBER_USERNAME = license_profile['username']
            process.env.AMBER_PASSWORD = license_profile['password']
            process.env.AMBER_SERVER = license_profile['server']
            process.env.AMBER_OAUTH_SERVER = license_profile['oauth-server']
            amber_client = AmberClient(null, null)
        }
    } catch (error) {
        console.log(error)
        throw error
    }
    return amber_client
}

/**
 *  fetch credentials from aws secrets manager
 **/
async function get_secrets() {
    try {
        const client = new SecretsManagerClient({region: 'us-east-1'})
        const command = new GetSecretValueCommand({SecretId: 'amber-test-users'})
        const response = await client.send(command)
        return JSON.parse(response.SecretString)
    } catch (error) {
        console.log(error)
    }
}

/**
 * secrets downloaded from points beyond OR read from local test file if AMBER_LICENSE_FILE is set
 * The results will always be stored in savved_env
 **/

/*
async function amber_create_test_profile() {

    try {
        let local_license_file = process.env.AMBER_LICENSE_FILE || null
        if (local_license_file != null) {
            // load credential set for test using the AMBER_LICENSE_FILE specified
            // in the environment
            let amber_instance = AmberClient()
            test_profile.AMBER_USERNAME = amber_instance.license_profile.username
            test_profile.AMBER_USERNAME = amber_instance.license_profile.username
            test_profile.AMBER_PASSWORD = amber_instance.license_profile.password
            test_profile.AMBER_SERVER = amber_instance.license_profile.server
            test_profile.AMBER_OAUTH_SERVER = amber_instance.license_profile.oauth_server
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
            test_profile.AMBER_USERNAME = license_profile.username
            test_profile.AMBER_PASSWORD = license_profile.password
            test_profile.AMBER_SERVER = license_profile.server
            test_profile.AMBER_OAUTH_SERVER = license_profile.oauth_server || license_profile.server
        }
    } catch (error) {
        throw error
    }
}
 */

async function load_credentials_into_env() {
    try {
        let profile = process.env.AMBER_TEST_PROFILE
        if (!profile) {
            return false
        }
        let secrets = await get_secrets()
        if (secrets[profile] === undefined) {
            return false
        }
        process.env.AMBER_USERNAME = secrets[profile]['username']
        process.env.AMBER_PASSWORD = secrets[profile]['password']
        process.env.AMBER_SERVER = secrets[profile]['server']
    } catch (error) {
        console.log(error)
    }
}


function clear_environment() {
    let saved_profile = {}
    for (const [key, value] of Object.entries(env_mappings)) {
        if (process.env[key]) {
            saved_profile[key] = process.env[key]
            delete process.env[key]
        }
    }
    return saved_profile
}

function restore_environment(saved_profile) {

    // clear out existing environment
    for (const [key, value] of Object.entries(env_mappings)) {
        if (process.env[key]) {
            delete process.env[key]
        }
    }

    // load environment from saved_profile
    for (const [key, value] of Object.entries(saved_profile)) {
        process.env[key] = value
    }
}

module.exports = {create_amber_client, get_secrets, load_credentials_into_env, clear_environment, restore_environment}