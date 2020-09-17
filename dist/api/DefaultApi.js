'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Amber API Server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Boon Logic Amber API Server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: 1.0.3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Error = require('../model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _GetConfigResponse = require('../model/GetConfigResponse');

var _GetConfigResponse2 = _interopRequireDefault(_GetConfigResponse);

var _GetSensorResponse = require('../model/GetSensorResponse');

var _GetSensorResponse2 = _interopRequireDefault(_GetSensorResponse);

var _GetSensorsResponse = require('../model/GetSensorsResponse');

var _GetSensorsResponse2 = _interopRequireDefault(_GetSensorsResponse);

var _GetStatusResponse = require('../model/GetStatusResponse');

var _GetStatusResponse2 = _interopRequireDefault(_GetStatusResponse);

var _PostAuth2Request = require('../model/PostAuth2Request');

var _PostAuth2Request2 = _interopRequireDefault(_PostAuth2Request);

var _PostAuth2Response = require('../model/PostAuth2Response');

var _PostAuth2Response2 = _interopRequireDefault(_PostAuth2Response);

var _PostConfigRequest = require('../model/PostConfigRequest');

var _PostConfigRequest2 = _interopRequireDefault(_PostConfigRequest);

var _PostConfigResponse = require('../model/PostConfigResponse');

var _PostConfigResponse2 = _interopRequireDefault(_PostConfigResponse);

var _PostSensorRequest = require('../model/PostSensorRequest');

var _PostSensorRequest2 = _interopRequireDefault(_PostSensorRequest);

var _PostSensorResponse = require('../model/PostSensorResponse');

var _PostSensorResponse2 = _interopRequireDefault(_PostSensorResponse);

var _PostStreamRequest = require('../model/PostStreamRequest');

var _PostStreamRequest2 = _interopRequireDefault(_PostStreamRequest);

var _PostStreamResponse = require('../model/PostStreamResponse');

var _PostStreamResponse2 = _interopRequireDefault(_PostStreamResponse);

var _PutSensorRequest = require('../model/PutSensorRequest');

var _PutSensorRequest2 = _interopRequireDefault(_PutSensorRequest);

var _PutSensorResponse = require('../model/PutSensorResponse');

var _PutSensorResponse2 = _interopRequireDefault(_PutSensorResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.3
*/
var DefaultApi = function () {

  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the deleteSensor operation.
   * @callback module:api/DefaultApi~deleteSensorCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a sensor instance
   * Deletes the sensor instance with the specified sensorId.
   * @param {module:api/DefaultApi~deleteSensorCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DefaultApi, [{
    key: 'deleteSensor',
    value: function deleteSensor(sensorId, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi('/sensor', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getConfig operation.
     * @callback module:api/DefaultApi~getConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetConfigResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current configuration of a sensor instance
     * Returns the current configuration of the sensor instance specified.
     * @param {module:api/DefaultApi~getConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetConfigResponse}
     */

  }, {
    key: 'getConfig',
    value: function getConfig(sensorId, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetConfigResponse2.default;

      return this.apiClient.callApi('/config', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensor operation.
     * @callback module:api/DefaultApi~getSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSensorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get basic information about a sensor instance
     * Returns basic information about an existing sensor instance.
     * @param {module:api/DefaultApi~getSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSensorResponse}
     */

  }, {
    key: 'getSensor',
    value: function getSensor(sensorId, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSensorResponse2.default;

      return this.apiClient.callApi('/sensor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getSensors operation.
     * @callback module:api/DefaultApi~getSensorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSensorsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all sensors for this user
     * Returns a list of all current sensor instances for this user.
     * @param {module:api/DefaultApi~getSensorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSensorsResponse}
     */

  }, {
    key: 'getSensors',
    value: function getSensors(callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSensorsResponse2.default;

      return this.apiClient.callApi('/sensors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the getStatus operation.
     * @callback module:api/DefaultApi~getStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get analytic information from a sensor
     * Returns analytic information derived from data processed by a sensor thus far.
     * @param {module:api/DefaultApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStatusResponse}
     */

  }, {
    key: 'getStatus',
    value: function getStatus(sensorId, callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStatusResponse2.default;

      return this.apiClient.callApi('/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postConfig operation.
     * @callback module:api/DefaultApi~postConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostConfigResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply configuration to a sensor instance
     * Applies the provided configuration to the sensor instance specified.
     * @param {module:api/DefaultApi~postConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostConfigResponse}
     */

  }, {
    key: 'postConfig',
    value: function postConfig(body, sensorId, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostConfigResponse2.default;

      return this.apiClient.callApi('/config', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postOauth2 operation.
     * @callback module:api/DefaultApi~postOauth2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PostAuth2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a bearer token using Amber account credentials
     * Requests a bearer token using Amber account credentials. The requested bearer token is returned as the \&quot;id-token\&quot; response attribute. This token is to be used for authenticating API requests throughout a usage session and expires after 60 minutes.
     * @param {module:api/DefaultApi~postOauth2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostAuth2Response}
     */

  }, {
    key: 'postOauth2',
    value: function postOauth2(body, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostAuth2Response2.default;

      return this.apiClient.callApi('/oauth2', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postSensor operation.
     * @callback module:api/DefaultApi~postSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSensorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new a sensor instance
     * Spawns a new sensor instance, returning its unique sensorId.
     * @param {module:api/DefaultApi~postSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSensorResponse}
     */

  }, {
    key: 'postSensor',
    value: function postSensor(body, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostSensorResponse2.default;

      return this.apiClient.callApi('/sensor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the postStream operation.
     * @callback module:api/DefaultApi~postStreamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostStreamResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stream data to a sensor
     * Sends data to a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.  The following analytic results are returned: - state : sensor state as of this call (one of: \&quot;Buffering\&quot;, \&quot;Autotuning\&quot;, \&quot;Learning\&quot;, \&quot;Monitoring\&quot;, \&quot;Error\&quot;) - ID : array of cluster IDs. These correspond one-to-one with input samples, indicating the cluster to which each input pattern was assigned. - SI : array of smoothed anomaly index values. These values correspond one-to-one with the input samples and range between 0 and 1000. Values closer to 0 represent input patterns which are ordinary given the data seen so far on this sensor. Values closer to 1000 represent novel patterns which are anomalous with respect to data seen before. - AD : array of 0&#x27;s and 1&#x27;s as anomaly detection indicators. These correspond one-to-one with input samples and are produced by thresholding the smoothed anomaly index (SI). The threshold is determined automatically from the SI values. A value of 0 indicates that the SI has not exceeded the anomaly detection threshold. A value of 1 indicates it has, signaling an anomaly at the corresponding input sample. - AH : array of anomaly history values. These values are a moving-window sum of the AD, giving the number of anomaly detections (1&#x27;s) present in the AD signal over a \&quot;recent history\&quot; window whose length is the buffer size. - AM : array of Amber Metric values. These are floating-point values between 0.0 and 1.0 indicating the extent to which the AH contains an unusually high number of anomalies in recent history. The values are derived statistically from a Poisson model, with values close to 0.0 signaling a lower, and values close to 1.0 signaling a higher, frequency of anomalies than usual. - AW : array of Amber Warning Level values. This index is produced by thresholding the Amber Metric (AM) and takes on the values 0, 1 or 2 representing a discrete \&quot;warning level\&quot; for an asset based on the frequency of anomalies within recent history. 0 &#x3D; normal, 1 &#x3D; asset changing, 2 &#x3D; asset critical. The default thresholds for the two warning levels are the standard statistical values of 0.95 (outlier, asset chaing) and 0.997 (extreme outlier, asset critical).
     * @param {module:api/DefaultApi~postStreamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostStreamResponse}
     */

  }, {
    key: 'postStream',
    value: function postStream(body, sensorId, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PostStreamResponse2.default;

      return this.apiClient.callApi('/stream', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the putSensor operation.
     * @callback module:api/DefaultApi~putSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PutSensorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update label for a sensor instance
     * Changes the label of an existing sensor instance to the new label specified.
     * @param {module:api/DefaultApi~putSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PutSensorResponse}
     */

  }, {
    key: 'putSensor',
    value: function putSensor(body, sensorId, callback) {
      var postBody = body;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'sensorId': sensorId
      };
      var formParams = {};

      var authNames = ['authorize-amber-pool'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PutSensorResponse2.default;

      return this.apiClient.callApi('/sensor', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return DefaultApi;
}();

exports.default = DefaultApi;