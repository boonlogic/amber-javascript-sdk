const {assert, expect} = require('chai')
const {AmberClient} = require("..")
const secrets = require('./secrets.js')
const fs = require('fs')

let amber = null
let test_sensor = null
let pretrainData = null

describe('#sensor_ops()', function () {

    before(async function () {
        try {
            // create amber client object using environment
            await secrets.load_credentials_into_env()
            amber = AmberClient(null, null)

            // read in pretrain data
            pretrainData = fs.readFileSync('pretrain.csv').toString('utf-8')
        } catch (error) {
            console.log(error)
        }
    });

    context('createSensor', function () {
        it('should create a sensor', async function () {
            try {
                // create a sensor
                let sensor_obj = await amber.createSensor('test-sensor-javascript')
                test_sensor = sensor_obj.sensorId
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from createSensor')
            }
        })
    })

    context('updateSensor', function () {
        it('should update the label for created sensor', async function () {
            try {
                let response = await amber.updateLabel(test_sensor, 'test-sensor-javascript-sdk')
                expect(response.label).to.equal('test-sensor-javascript-sdk')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from updateLabel')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.updateLabel(test_sensor + '7', 'test-sensor-javascript-sdk')
                assert.fail(null, response, 'unintended response from updateLabel')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('getSensor', function () {
        it('should get the test sensor', async function () {
            try {
                let response = await amber.getSensor(test_sensor)
                expect(response.label).to.equal('test-sensor-javascript-sdk')
                expect(response.sensorId).to.equal(test_sensor)
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getSensor')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.getSensor(test_sensor + '7', 'test-sensor-javascript-sdk')
                assert.fail(null, response, 'unintended response from getSensor')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('listSensors', function () {
        it('should list all sensors', async function () {
            try {
                let response = await amber.listSensors()
                expect(response).to.be.a('Array')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from listSensors')
            }
        })
    })

    context('configureSensor', function () {
        it('should configure the test sensor with custom features', async function () {
            try {
                let features = [{'minVal': 1, 'maxVal': 10, 'label': 'fancy-label'}]
                let response = await amber.configureSensor(test_sensor, 1, 25,
                    10000, 10,
                    10000, 1000,
                    1000000, 10000, features)
                expect(response.featureCount).to.equal(1)
                expect(response.streamingWindowSize).to.equal(25)
                expect(response.samplesToBuffer).to.equal(10000)
                expect(response.learningRateNumerator).to.equal(10)
                expect(response.learningRateDenominator).to.equal(10000)
                expect(response.learningMaxClusters).to.equal(1000)
                expect(response.learningMaxSamples).to.equal(1000000)
                expect(response.anomalyHistoryWindow).to.equal(10000)
                expect(response.features[0].minVal).to.equal(1)
                expect(response.features[0].maxVal).to.equal(10)
                expect(response.features[0].label).to.equal('fancy-label')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from configureSensor')
            }
        })
        it('should configure the test sensor using default feature values', async function () {
            try {
                let response = await amber.configureSensor(test_sensor, 1, 25,
                    10000, 10,
                    10000, 1000,
                    1000000, 10000)
                expect(response.featureCount).to.equal(1)
                expect(response.streamingWindowSize).to.equal(25)
                expect(response.samplesToBuffer).to.equal(10000)
                expect(response.learningRateNumerator).to.equal(10)
                expect(response.learningRateDenominator).to.equal(10000)
                expect(response.learningMaxClusters).to.equal(1000)
                expect(response.learningMaxSamples).to.equal(1000000)
                expect(response.anomalyHistoryWindow).to.equal(10000)
                expect(response.features[0].minVal).to.equal(0)
                expect(response.features[0].maxVal).to.equal(1)
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from configureSensor')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.configureSensor(test_sensor + '7')
                assert.fail(null, response, 'unintended response from configureSensor')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
        // note: we won't handle all possibilities of misconfigurations here.  We are mostly
        // testing the sdk's abillity to properly report a http status of 400
        it('should return http status 400 when featureCount = -1', async function () {
            try {
                let response = await amber.configureSensor(test_sensor, -1)
                assert.fail(null, response, 'unintended response from configureSensor')
            } catch (error) {
                expect(error.status).to.equal(400)
            }
        })
        it('should return http status 400 when featureCount = 1.5', async function () {
            try {
                let response = await amber.configureSensor(test_sensor, 1.5)
                assert.fail(null, response, 'unintended response from configureSensor')
            } catch (error) {
                expect(error.status).to.equal(400)
            }
        })
    })

    context('getConfig', function () {
        it('should get same configuration', async function () {
            try {
                let response = await amber.getConfig(test_sensor)
                expect(response.featureCount).to.equal(1)
                expect(response.streamingWindowSize).to.equal(25)
                expect(response.samplesToBuffer).to.equal(10000)
                expect(response.learningRateNumerator).to.equal(10)
                expect(response.learningRateDenominator).to.equal(10000)
                expect(response.learningMaxClusters).to.equal(1000)
                expect(response.learningMaxSamples).to.equal(1000000)
                expect(response.anomalyHistoryWindow).to.equal(10000)
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getConfig')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.getConfig(test_sensor + '7')
                assert.fail(null, response, 'unintended response from getConfig')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('postStream', function () {
        it('should stream data and get results', async function () {
            try {
                let csv = '1.0,2.0,1.0,1.5'
                let response = await amber.streamSensor(test_sensor, csv)
                expect(response.state).to.equal('Buffering')
                expect(response.message).to.equal('')
                expect(response.progress).to.equal(0)
                expect(response.clusterCount).to.equal(0)
                expect(response.retryCount).to.equal(0)
                expect(response.streamingWindowSize).to.equal(25)
                expect(response.totalInferences).to.equal(0)
                expect(response.RI).to.deep.equal([0, 0, 0, 0])
                expect(response.SI).to.deep.equal([0, 0, 0, 0])
                expect(response.AD).to.deep.equal([0, 0, 0, 0])
                expect(response.AH).to.deep.equal([0, 0, 0, 0])
                expect(response.AW).to.deep.equal([0, 0, 0, 0])
                expect(response.ID).to.deep.equal([0, 0, 0, 0])
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from postStream')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let csv = '1.0,2.0,1.0,1.5'
                let response = await amber.streamSensor(test_sensor + '7', csv)
                assert.fail(null, response, 'unintended response from postStream')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('pretrainSensor/getPretrainState', function () {
        it('should pretrain a sensor and wait for Pretrained state', async function () {
            try {
                let response = await amber.pretrainSensor(test_sensor, pretrainData, true)
                expect(response.state).to.be.oneOf(['Pretrained', 'Pretraining'])
                response = await amber.getPretrainState(test_sensor)
                expect(response.state).to.be.oneOf(['Pretrained', 'Pretraining'])
                let state = response.state
                while (state == 'Pretraining') {
                    await new Promise(r => setTimeout(r, 5000));
                    response = await amber.getPretrainState(test_sensor)
                    expect(response.state).to.be.oneOf(['Pretrained', 'Pretraining'])
                    state = response.state
                }
                expect(state).to.equal('Pretrained')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from pretrainSensor')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.pretrainSensor(test_sensor + '7', pretrainData, true)
                assert.fail(null, response, 'unintended response from pretrainSensor')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('getRootCause', function () {
        it('should get root cause with clusterID', async function () {
            try {
                let response = await amber.getRootCause(test_sensor, '[1,2]')
                expect(response).to.be.a('Array')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getRootCause')
            }
        })
        it('should get root cause with pattern', async function () {
            try {
                let response = await amber.getRootCause(test_sensor, null, '[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]]')
                expect(response).to.be.a('Array')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getRootCause')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.getRootCause(test_sensor + '7', '[1]')
                assert.fail(null, response, 'unintended response from getRootCause')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('getStatus', function () {
        it('should get status', async function () {
            try {
                let response = await amber.getStatus(test_sensor)
                expect(response.pca).to.be.a('Array')
                expect(response.pca).to.have.lengthOf(55)
                expect(response.clusterGrowth).to.be.a('Array')
                expect(response.clusterGrowth).to.have.lengthOf(55)
                expect(response.clusterSizes).to.be.a('Array')
                expect(response.clusterSizes).to.have.lengthOf(55)
                expect(response.anomalyIndexes).to.be.a('Array')
                expect(response.anomalyIndexes).to.have.lengthOf(55)
                expect(response.frequencyIndexes).to.be.a('Array')
                expect(response.frequencyIndexes).to.have.lengthOf(55)
                expect(response.distanceIndexes).to.be.a('Array')
                expect(response.distanceIndexes).to.have.lengthOf(55)
                expect(response.totalInferences).to.equal(115306)
                expect(response.numClusters).to.equal(55)
                expect(response.anomalyThreshold).to.equal(750)
                expect(response.state).to.equal('Monitoring')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getStatus')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.getStatus(test_sensor + '7')
                assert.fail(null, response, 'unintended response from getStatus')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('deleteSensor', function () {
        it('should delete sensor', async function () {
            try {
                let response = await amber.deleteSensor(test_sensor)
                expect(response.message).to.equal('sensor has been deleted')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from deleteSensor')
            }
        })
        it('should return http status 404 if sensor not found', async function () {
            try {
                let response = await amber.deleteSensor(test_sensor + '7')
                assert.fail(null, response, 'unintended response from deleteSensor')
            } catch (error) {
                expect(error.status).to.equal(404)
            }
        })
    })

    context('getVersion', function () {
        it('should get version', async function () {
            try {
                let response = await amber.getVersion()
                expect(response).to.be.a('object')
                expect(response['api-version']).to.be.a('string')
                expect(response.builder).to.be.a('string')
                expect(response['expert-api']).to.be.a('string')
                expect(response['expert-common']).to.be.a('string')
                expect(response['nano-secure']).to.be.a('string')
                expect(response.release).to.be.a('string')
                expect(response['swagger-ui']).to.be.a('string')
            } catch (error) {
                assert.fail(!error, error, 'unintended exception from getVersion')
            }
        })
    })
})
