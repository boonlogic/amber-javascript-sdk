/*
 * Amber API Server
 * Boon Logic Amber API Server
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Error} from '../model/Error';
import {GetConfigResponse} from '../model/GetConfigResponse';
import {GetPretrainResponse} from '../model/GetPretrainResponse';
import {GetSensorResponse} from '../model/GetSensorResponse';
import {GetSensorsResponse} from '../model/GetSensorsResponse';
import {GetStatusResponse} from '../model/GetStatusResponse';
import {GetSummaryResponse} from '../model/GetSummaryResponse';
import {PostAuth2Request} from '../model/PostAuth2Request';
import {PostAuth2Response} from '../model/PostAuth2Response';
import {PostConfigRequest} from '../model/PostConfigRequest';
import {PostConfigResponse} from '../model/PostConfigResponse';
import {PostPretrainRequest} from '../model/PostPretrainRequest';
import {PostPretrainResponse} from '../model/PostPretrainResponse';
import {PostSensorRequest} from '../model/PostSensorRequest';
import {PostStreamRequest} from '../model/PostStreamRequest';
import {PostStreamResponse} from '../model/PostStreamResponse';
import {PutSensorRequest} from '../model/PutSensorRequest';
import {RootCauseResponse} from '../model/RootCauseResponse';
import {SensorInstance} from '../model/SensorInstance';
import {Version} from '../model/Version';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.3
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a sensor instance
     * Deletes the sensor instance with the specified sensorId.
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Error} and HTTP response
     */
    deleteSensorWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling deleteSensor");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;

      return this.apiClient.callApi(
        '/sensor', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a sensor instance
     * Deletes the sensor instance with the specified sensorId.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Error}
     */
    deleteSensor(sensorId) {
      return this.deleteSensorWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the JSON block of the amber image
     * Returns the json block of the amber sensor
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSummaryResponse} and HTTP response
     */
    getAmberSummaryWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getAmberSummary");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSummaryResponse;

      return this.apiClient.callApi(
        '/__summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the JSON block of the amber image
     * Returns the json block of the amber sensor
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSummaryResponse}
     */
    getAmberSummary(sensorId) {
      return this.getAmberSummaryWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current configuration of a sensor instance
     * Returns the current configuration of the sensor instance specified.
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetConfigResponse} and HTTP response
     */
    getConfigWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getConfig");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetConfigResponse;

      return this.apiClient.callApi(
        '/config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the current configuration of a sensor instance
     * Returns the current configuration of the sensor instance specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetConfigResponse}
     */
    getConfig(sensorId) {
      return this.getConfigWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get status of pretrain operation
     * Get status of a sensor which is currently pretraining.
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPretrainResponse} and HTTP response
     */
    getPretrainWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getPretrain");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetPretrainResponse;

      return this.apiClient.callApi(
        '/pretrain', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get status of pretrain operation
     * Get status of a sensor which is currently pretraining.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPretrainResponse}
     */
    getPretrain(sensorId) {
      return this.getPretrainWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get root cause analysis information from a sensor
     * Returns analytic information on the root cause for the clusters provided.
     * @param {String} sensorId Unique identifier for sensor
     * @param {Object} opts Optional parameters
     * @param {String} opts.clusterID An array of cluster IDs
     * @param {String} opts.pattern Patterns to compare to the nano model for the root cause analysis
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RootCauseResponse} and HTTP response
     */
    getRootCauseWithHttpInfo(sensorId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getRootCause");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'clusterID': opts['clusterID'],'pattern': opts['pattern']
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RootCauseResponse;

      return this.apiClient.callApi(
        '/rootCause', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get root cause analysis information from a sensor
     * Returns analytic information on the root cause for the clusters provided.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @param {Object} opts Optional parameters
     * @param {String} opts.clusterID An array of cluster IDs
     * @param {String} opts.pattern Patterns to compare to the nano model for the root cause analysis
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RootCauseResponse}
     */
    getRootCause(sensorId, opts) {
      return this.getRootCauseWithHttpInfo(sensorId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get basic information about a sensor instance
     * Returns basic information about an existing sensor instance.
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSensorResponse} and HTTP response
     */
    getSensorWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getSensor");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSensorResponse;

      return this.apiClient.callApi(
        '/sensor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get basic information about a sensor instance
     * Returns basic information about an existing sensor instance.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSensorResponse}
     */
    getSensor(sensorId) {
      return this.getSensorWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all sensors for this user
     * Returns a list of all current sensor instances for this user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSensorsResponse} and HTTP response
     */
    getSensorsWithHttpInfo() {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSensorsResponse;

      return this.apiClient.callApi(
        '/sensors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all sensors for this user
     * Returns a list of all current sensor instances for this user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSensorsResponse}
     */
    getSensors() {
      return this.getSensorsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get analytic information from a sensor
     * Returns analytic information derived from data processed by a sensor thus far.
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatusResponse} and HTTP response
     */
    getStatusWithHttpInfo(sensorId) {
      
      let postBody = null;
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling getStatus");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStatusResponse;

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get analytic information from a sensor
     * Returns analytic information derived from data processed by a sensor thus far.
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatusResponse}
     */
    getStatus(sensorId) {
      return this.getStatusWithHttpInfo(sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves API version information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Version} and HTTP response
     */
    getVersionWithHttpInfo() {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Version;

      return this.apiClient.callApi(
        '/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves API version information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Version}
     */
    getVersion() {
      return this.getVersionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Apply configuration to a sensor instance
     * Applies the provided configuration to the sensor instance specified.
     * @param {module:model/PostConfigRequest} body Sensor configuration to be applied
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostConfigResponse} and HTTP response
     */
    postConfigWithHttpInfo(body, sensorId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postConfig");
      }
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling postConfig");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostConfigResponse;

      return this.apiClient.callApi(
        '/config', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Apply configuration to a sensor instance
     * Applies the provided configuration to the sensor instance specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Sensor configuration to be applied
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostConfigResponse}
     */
    postConfig(body, sensorId) {
      return this.postConfigWithHttpInfo(body, sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Request a bearer token using Amber account credentials
     * Requests a bearer token using Amber account credentials. The requested bearer token is returned as the \&quot;id-token\&quot; response attribute. This token is to be used for authenticating API requests throughout a usage session and expires after 60 minutes.
     * @param {module:model/PostAuth2Request} body Account credentials to be used for authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostAuth2Response} and HTTP response
     */
    postOauth2WithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postOauth2");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostAuth2Response;

      return this.apiClient.callApi(
        '/oauth2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Request a bearer token using Amber account credentials
     * Requests a bearer token using Amber account credentials. The requested bearer token is returned as the \&quot;id-token\&quot; response attribute. This token is to be used for authenticating API requests throughout a usage session and expires after 60 minutes.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Account credentials to be used for authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostAuth2Response}
     */
    postOauth2(body) {
      return this.postOauth2WithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pretrain a sensor using historical data
     * Pretrains a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.
     * @param {module:model/PostPretrainRequest} body Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;).
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostPretrainResponse} and HTTP response
     */
    postPretrainWithHttpInfo(body, sensorId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postPretrain");
      }
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling postPretrain");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostPretrainResponse;

      return this.apiClient.callApi(
        '/pretrain', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pretrain a sensor using historical data
     * Pretrains a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;).
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostPretrainResponse}
     */
    postPretrain(body, sensorId) {
      return this.postPretrainWithHttpInfo(body, sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new a sensor instance
     * Spawns a new sensor instance, returning its unique sensorId.
     * @param {module:model/PostSensorRequest} body Label for new sensor instance to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SensorInstance} and HTTP response
     */
    postSensorWithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postSensor");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SensorInstance;

      return this.apiClient.callApi(
        '/sensor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new a sensor instance
     * Spawns a new sensor instance, returning its unique sensorId.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Label for new sensor instance to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SensorInstance}
     */
    postSensor(body) {
      return this.postSensorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Stream data to a sensor
     * Sends data to a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.  The following analytic results are returned: - state : sensor state as of this call (one of: \&quot;Buffering\&quot;, \&quot;Autotuning\&quot;, \&quot;Learning\&quot;, \&quot;Monitoring\&quot;, \&quot;Error\&quot;) - ID : array of cluster IDs. These correspond one-to-one with input samples, indicating the cluster to which each input pattern was assigned. - SI : array of smoothed anomaly index values. These values correspond one-to-one with the input samples and range between 0 and 1000. Values closer to 0 represent input patterns which are ordinary given the data seen so far on this sensor. Values closer to 1000 represent novel patterns which are anomalous with respect to data seen before. - AD : array of 0&#x27;s and 1&#x27;s as anomaly detection indicators. These correspond one-to-one with input samples and are produced by thresholding the smoothed anomaly index (SI). The threshold is determined automatically from the SI values. A value of 0 indicates that the SI has not exceeded the anomaly detection threshold. A value of 1 indicates it has, signaling an anomaly at the corresponding input sample. - AH : array of anomaly history values. These values are a moving-window sum of the AD, giving the number of anomaly detections (1&#x27;s) present in the AD signal over a \&quot;recent history\&quot; window whose length is the buffer size. - AM : array of Amber Metric values. These are floating-point values between 0.0 and 1.0 indicating the extent to which the AH contains an unusually high number of anomalies in recent history. The values are derived statistically from a Poisson model, with values close to 0.0 signaling a lower, and values close to 1.0 signaling a higher, frequency of anomalies than usual. - AW : array of Amber Warning Level values. This index is produced by thresholding the Amber Metric (AM) and takes on the values 0, 1 or 2 representing a discrete \&quot;warning level\&quot; for an asset based on the frequency of anomalies within recent history. 0 &#x3D; normal, 1 &#x3D; asset changing, 2 &#x3D; asset critical. The default thresholds for the two warning levels are the standard statistical values of 0.95 (outlier, asset chaing) and 0.997 (extreme outlier, asset critical).
     * @param {module:model/PostStreamRequest} body Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;).
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostStreamResponse} and HTTP response
     */
    postStreamWithHttpInfo(body, sensorId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postStream");
      }
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling postStream");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostStreamResponse;

      return this.apiClient.callApi(
        '/stream', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Stream data to a sensor
     * Sends data to a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.  The following analytic results are returned: - state : sensor state as of this call (one of: \&quot;Buffering\&quot;, \&quot;Autotuning\&quot;, \&quot;Learning\&quot;, \&quot;Monitoring\&quot;, \&quot;Error\&quot;) - ID : array of cluster IDs. These correspond one-to-one with input samples, indicating the cluster to which each input pattern was assigned. - SI : array of smoothed anomaly index values. These values correspond one-to-one with the input samples and range between 0 and 1000. Values closer to 0 represent input patterns which are ordinary given the data seen so far on this sensor. Values closer to 1000 represent novel patterns which are anomalous with respect to data seen before. - AD : array of 0&#x27;s and 1&#x27;s as anomaly detection indicators. These correspond one-to-one with input samples and are produced by thresholding the smoothed anomaly index (SI). The threshold is determined automatically from the SI values. A value of 0 indicates that the SI has not exceeded the anomaly detection threshold. A value of 1 indicates it has, signaling an anomaly at the corresponding input sample. - AH : array of anomaly history values. These values are a moving-window sum of the AD, giving the number of anomaly detections (1&#x27;s) present in the AD signal over a \&quot;recent history\&quot; window whose length is the buffer size. - AM : array of Amber Metric values. These are floating-point values between 0.0 and 1.0 indicating the extent to which the AH contains an unusually high number of anomalies in recent history. The values are derived statistically from a Poisson model, with values close to 0.0 signaling a lower, and values close to 1.0 signaling a higher, frequency of anomalies than usual. - AW : array of Amber Warning Level values. This index is produced by thresholding the Amber Metric (AM) and takes on the values 0, 1 or 2 representing a discrete \&quot;warning level\&quot; for an asset based on the frequency of anomalies within recent history. 0 &#x3D; normal, 1 &#x3D; asset changing, 2 &#x3D; asset critical. The default thresholds for the two warning levels are the standard statistical values of 0.95 (outlier, asset chaing) and 0.997 (extreme outlier, asset critical).
     * @param {<&vendorExtensions.x-jsdoc-type>} body Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;).
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostStreamResponse}
     */
    postStream(body, sensorId) {
      return this.postStreamWithHttpInfo(body, sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update label for a sensor instance
     * Changes the label of an existing sensor instance to the new label specified.
     * @param {module:model/PutSensorRequest} body New label to apply to sensor instance
     * @param {String} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SensorInstance} and HTTP response
     */
    putSensorWithHttpInfo(body, sensorId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putSensor");
      }
      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling putSensor");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'sensorId': sensorId
      };
      let formParams = {
        
      };

      let authNames = ['authorize-amber-pool'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SensorInstance;

      return this.apiClient.callApi(
        '/sensor', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update label for a sensor instance
     * Changes the label of an existing sensor instance to the new label specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} body New label to apply to sensor instance
     * @param {<&vendorExtensions.x-jsdoc-type>} sensorId Unique identifier for sensor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SensorInstance}
     */
    putSensor(body, sensorId) {
      return this.putSensorWithHttpInfo(body, sensorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}