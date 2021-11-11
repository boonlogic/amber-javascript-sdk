const expect = require('chai').expect
const {AmberClient} = require("..")
const secrets = require('./secrets.js')

describe('#authenticate()', function () {

    context('authentication', function () {

        it('should successfully log in', async function() {
            let saved_env = await secrets.clear_environment()
            try {
                await secrets.load_credentials_into_env()
                let amber = AmberClient(null, null)
                expect(await amber._authenticate()).to.equal(true)
            } catch (error) {
                assert(false, 'unintended exception from _authentication')
            }
            secrets.restore_environment(saved_env)
        })

        it('should fail log in', async function() {
            let saved_env = secrets.clear_environment()
            try {
                await secrets.load_credentials_into_env()
                process.env.AMBER_PASSWORD = 'bad-password'
                let amber = AmberClient(null, null)
                await amber._authenticate()
                await secrets.restore_environment(saved_env)
            } catch (error) {
                expect(error.message).to.equal('Unauthorized')
            }
            secrets.restore_environment(saved_env)
        })
    })
})

