const expect = require('chai').expect
const {AmberClient} = require("..")
const secrets = require('./secrets.js')

async function ExpectAmberUserException(message, f) {
    try {
        let args = Array.prototype.splice.call(arguments, 1);
        f.apply(this, args.slice(1));
    } catch(error) {
        expect(error.name).to.equal('AmberUserException')
        expect(error.message).to.equal(message)
    }
}

describe('#amber_instance()', function () {

    context('environmental profile tests', function () {

        it('should load same license profile with param & env', async function () {
            // this sets up the test profile that will be used throughout the tests
            let saved_env = await secrets.clear_environment()
            // load profile using license file specified as parameter
            let profile1 = AmberClient('default', 'test.Amber.license')
            // load the same profile using license loaded from environment
            process.env.AMBER_LICENSE_FILE = 'test.Amber.license'
            let profile2 = AmberClient('default')
            expect(profile1.license_profile).to.eql(profile2.license_profile)
            await secrets.restore_environment(saved_env)
        })

        it('should override items in license file through environment', async function () {
            let saved_env = await secrets.clear_environment()
            // override items in license file through environment
            process.env.AMBER_USERNAME = 'xyyyAmberUser'
            process.env.AMBER_PASSWORD = 'bogus_password'
            process.env.AMBER_SERVER = 'https://temp.amber.boonlogic.com/v1'
            process.env.AMBER_SSL_CERT = 'bogus_ssl_cert'
            process.env.AMBER_SSL_VERIFY = 'false'
            let profile3 = AmberClient('default', 'test.Amber.license')
            expect(profile3.license_profile.server).to.eql('https://temp.amber.boonlogic.com/v1')
            expect(profile3.license_profile.username).to.eql('xyyyAmberUser')
            expect(profile3.license_profile.password).to.eql('bogus_password')
            expect(profile3.license_profile.cert).to.eql('bogus_ssl_cert')
            expect(profile3.license_profile.verify).to.eql(false)
            await secrets.restore_environment(saved_env)
        })

        it('should environmental settings when default license file is absent', async function () {
            let saved_env = await secrets.clear_environment()
            // override items in license file through environment
            process.env.AMBER_USERNAME = 'xyyyAmberUser'
            process.env.AMBER_PASSWORD = 'bogus_password'
            process.env.AMBER_SERVER = 'https://temp.amber.boonlogic.com/v1'
            process.env.AMBER_SSL_CERT = 'bogus_ssl_cert'
            process.env.AMBER_SSL_VERIFY = 'false'
            let profile3 = AmberClient('default', '~/.Amber.license')
            expect(profile3.license_profile.username).to.eql('xyyyAmberUser')
            expect(profile3.license_profile.password).to.eql('bogus_password')
            expect(profile3.license_profile.server).to.eql('https://temp.amber.boonlogic.com/v1')
            expect(profile3.license_profile.cert).to.eql('bogus_ssl_cert')
            expect(profile3.license_profile.verify).to.eql(false)
            await secrets.restore_environment(saved_env)
        })
    })

    context('environmental negative tests', function () {

        it('should throw exception if license file set but does not exist', async function() {
            //set configuration through environment with non-existent license file
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException(`license file nonexistent-license-file not found`, AmberClient, 'default', 'nonexistent-license-file')
            await secrets.restore_environment(saved_env)
        })

        it('should throw exception when no license file specified AND no env set', async function () {
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException('missing username in profile', AmberClient, 'default', '')
            await secrets.restore_environment(saved_env)
        })

        it('should throw exception when no license_id is specified', async function () {
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException('missing licenseId', AmberClient, null, 'test.Amber.license')
            await secrets.restore_environment(saved_env)
        })

        it('should throw exception when no username is specified', async function() {
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException('missing username in profile', AmberClient, 'missing-username', 'test.Amber.license')
            await secrets.restore_environment(saved_env)
        })

        it('should throw exception when no password is specified', async function() {
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException('missing password in profile', AmberClient, 'missing-password', 'test.Amber.license')
            await secrets.restore_environment(saved_env)
        })

        it('should throw exception when no server is specified', async function() {
            let saved_env = await secrets.clear_environment()
            await ExpectAmberUserException('missing server in profile', AmberClient, 'missing-server', 'test.Amber.license')
            await secrets.restore_environment(saved_env)
        })
    })
})
