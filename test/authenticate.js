const expect = require('chai').expect
const {AmberClient} = require("..")
const secrets = require('./secrets.js')

describe('#authenticate()', function () {

    context('authentication', function () {

        it('should successfully log in', async function() {
            try {
                let amber = await secrets.create_amber_client()
                expect(await amber._authenticate()).to.equal(true)
            } catch (error) {
                assert(false, 'unintended exception from _authentication')
            }
        })

        it('should fail log in', async function() {
            try {
                let amber = await secrets.create_amber_client()
                amber.license_profile.AMBER_PASSWORD = 'bad-password'
                expect(await amber._authenticate()).to.equal(true)
            } catch (error) {
                expect(error.message).to.equal('Unauthorized')
            }
        })
    })
})

