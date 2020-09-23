'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var process = require('process');
var expandHomeDir = require('expand-home-dir');

var AmberClient = function () {
    function AmberClient() {
        var licenseId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        var licenseFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "~/.Amber.license";

        _classCallCheck(this, AmberClient);

        this.AmberApiServer = require('./index.js');
        this.apiInstance = new this.AmberApiServer.DefaultApi();
        this.defaultClient = this.AmberApiServer.ApiClient.instance;
        this.authorize_amber_pool = this.defaultClient.authentications['authorize-amber-pool'];

        var envLicenseFile = process.env.AMBER_LICENSE_FILE;
        var envLicenseId = process.env.AMBER_LICENSE_ID;
        var envUserName = process.env.AMBER_USERNAME;
        var envPassword = process.env.AMBER_PASSWORD;
        var envServer = process.env.AMBER_SERVER;

        // if username, password and server are all specified via environment, we're done here
        if (envUserName && envPassword && envServer) {
            this.auth2RequestBody = new AmberApiServer.PostAuth2Request(envPassword, envUserName);
            this.defaultClient.basePath = envServer;
            return;
        }

        // otherwise acquire either or both of them from license file
        var localLicenseFile = envLicenseFile;
        if (!localLicenseFile) {
            localLicenseFile = licenseFile;
        }
        var localLicenseId = envLicenseId;
        if (!localLicenseId) {
            localLicenseId = licenseId;
        }

        var fileData = {};
        var licenseData = {};
        var licensePath = expandHomeDir(localLicenseFile);
        try {
            fileData = require(licensePath);
        } catch (err) {
            // license file does not exist
            console.error(err);
            return;
        }

        try {
            licenseData = fileData[localLicenseId];
        } catch (err) {
            // license id not found
            console.error(err);
            return;
        }

        // load the username, password and server, still giving precedence to environment
        try {
            this.username = envUserName;
            if (!this.username) {
                this.username = licenseData['username'];
            }
        } catch (err) {
            // username not found
            console.error(err);
            return;
        }
        try {
            this.password = envPassword;
            if (!this.password) {
                this.password = licenseData['password'];
            }
        } catch (err) {
            // password not found
            console.error(err);
            return;
        }
        try {
            this.server = envServer;
            if (!this.server) {
                this.server = licenseData['server'];
            }
        } catch (err) {
            // server not found
            console.error(err);
            return;
        }
    }

    _createClass(AmberClient, [{
        key: 'authenticate',
        value: function authenticate() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.apiInstance.postOauth2(_this.auth2RequestBody, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        _this.authorize_amber_pool.apiKey = data.idToken;
                        resolve(data);
                    }
                });
            });
        }
    }, {
        key: 'getSensorsRequest',
        value: function getSensorsRequest() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.apiInstance.getSensors(function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }
    }, {
        key: 'getSensorRequest',
        value: function getSensorRequest(sensorId) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.apiInstance.getSensor(sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }, {
        key: 'postSensorRequest',
        value: function postSensorRequest() {
            var _this4 = this;

            var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            return new Promise(function (resolve, reject) {
                var postRequest = new AmberApiServer.PostSensorRequest(label);
                if (label) {
                    postRequest.label = label;
                }
                _this4.apiInstance.postSensor(postRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }
    }, {
        key: 'putSensorRequest',
        value: function putSensorRequest(sensorId, label) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                var putRequest = new AmberApiServer.PutSensorRequest(label);
                _this5.apiInstance.putSensor(putRequest, sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }, {
        key: 'postConfigRequest',
        value: function postConfigRequest(sensorId) {
            var featureCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var streamingWindowSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
            var samplesToBuffer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;
            var learningRateNumerator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
            var learningRateDenominator = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10000;

            var _this6 = this;

            var learningMaxClusters = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1000;
            var learningMaxSamples = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1000000;

            return new Promise(function (resolve, reject) {
                var body = new AmberApiServer.PostConfigRequest(featureCount, streamingWindowSize);
                body.samplesToBuffer = samplesToBuffer;
                body.learningRateNumerator = learningRateNumerator;
                body.learningRateDenominator = learningRateDenominator;
                body.learningMaxClusters = learningMaxClusters;
                body.learningMaxSamples = learningMaxSamples;
                _this6.apiInstance.postConfig(body, sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }, {
        key: 'getConfigRequest',
        value: function getConfigRequest(sensorId) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                _this7.apiInstance.getSensor(sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }, {
        key: 'deleteSensorRequest',
        value: function deleteSensorRequest(sensorId) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
                _this8.apiInstance.deleteSensor(sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: JSON.parse(response.text) });
                    }
                });
            });
        }
    }, {
        key: 'postStreamRequest',
        value: function postStreamRequest(sensorId, csv) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
                var body = new AmberApiServer.PostStreamRequest(csv);
                _this9.apiInstance.postStream(body, sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }, {
        key: 'getStatusRequest',
        value: function getStatusRequest(sensorId) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
                _this10.apiInstance.getStatus(sensorId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ sensorId: sensorId, response: data });
                    }
                });
            });
        }
    }]);

    return AmberClient;
}();