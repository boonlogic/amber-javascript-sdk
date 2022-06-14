# AmberApiServer.DefaultApi

All URIs are relative to *http://amber.boonlogic.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSensor**](DefaultApi.md#deleteSensor) | **DELETE** /sensor | Delete a sensor instance
[**getAmberSummary**](DefaultApi.md#getAmberSummary) | **GET** /__summary | Get the JSON block of the amber image
[**getConfig**](DefaultApi.md#getConfig) | **GET** /config | Get the current configuration of a sensor instance
[**getPretrain**](DefaultApi.md#getPretrain) | **GET** /pretrain | Get status of pretrain operation
[**getRootCause**](DefaultApi.md#getRootCause) | **GET** /rootCause | Get root cause analysis information from a sensor
[**getSensor**](DefaultApi.md#getSensor) | **GET** /sensor | Get basic information about a sensor instance
[**getSensors**](DefaultApi.md#getSensors) | **GET** /sensors | List all sensors for this user
[**getStatus**](DefaultApi.md#getStatus) | **GET** /status | Get analytic information from a sensor
[**getVersion**](DefaultApi.md#getVersion) | **GET** /version | Retrieves API version information
[**postConfig**](DefaultApi.md#postConfig) | **POST** /config | Apply configuration to a sensor instance
[**postOauth2**](DefaultApi.md#postOauth2) | **POST** /oauth2 | Request a bearer token using Amber account credentials
[**postOutage**](DefaultApi.md#postOutage) | **POST** /outage | Informs the server of an outage
[**postPretrain**](DefaultApi.md#postPretrain) | **POST** /pretrain | Pretrain a sensor using historical data
[**postSensor**](DefaultApi.md#postSensor) | **POST** /sensor | Create a new a sensor instance
[**postStream**](DefaultApi.md#postStream) | **POST** /stream | Stream data to a sensor
[**putConfig**](DefaultApi.md#putConfig) | **PUT** /config | Update configuration for a sensor instance
[**putSensor**](DefaultApi.md#putSensor) | **PUT** /sensor | Update label for a sensor instance
[**putStream**](DefaultApi.md#putStream) | **PUT** /stream | Stream data to a sensor fusion vector

<a name="deleteSensor"></a>
# **deleteSensor**
> Error deleteSensor(sensorId)

Delete a sensor instance

Deletes the sensor instance with the specified sensorId.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.deleteSensor(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**Error**](Error.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAmberSummary"></a>
# **getAmberSummary**
> GetSummaryResponse getAmberSummary(sensorId)

Get the JSON block of the amber image

Returns the json block of the amber sensor

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getAmberSummary(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**GetSummaryResponse**](GetSummaryResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConfig"></a>
# **getConfig**
> GetConfigResponse getConfig(sensorId)

Get the current configuration of a sensor instance

Returns the current configuration of the sensor instance specified.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getConfig(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**GetConfigResponse**](GetConfigResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPretrain"></a>
# **getPretrain**
> GetPretrainResponse getPretrain(sensorId)

Get status of pretrain operation

Get status of a sensor which is currently pretraining.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getPretrain(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**GetPretrainResponse**](GetPretrainResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRootCause"></a>
# **getRootCause**
> GetRootCauseResponse getRootCause(sensorId, opts)

Get root cause analysis information from a sensor

Returns analytic information on the root cause for the clusters provided.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor
let opts = { 
  'clusterID': "clusterID_example", // String | An array of cluster IDs
  'pattern': "pattern_example" // String | Patterns to compare to the nano model for the root cause analysis
};
apiInstance.getRootCause(sensorId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 
 **clusterID** | **String**| An array of cluster IDs | [optional] 
 **pattern** | **String**| Patterns to compare to the nano model for the root cause analysis | [optional] 

### Return type

[**GetRootCauseResponse**](GetRootCauseResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensor"></a>
# **getSensor**
> GetSensorResponse getSensor(sensorId)

Get basic information about a sensor instance

Returns basic information about an existing sensor instance.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getSensor(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**GetSensorResponse**](GetSensorResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensors"></a>
# **getSensors**
> GetSensorsResponse getSensors()

List all sensors for this user

Returns a list of all current sensor instances for this user.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
apiInstance.getSensors().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSensorsResponse**](GetSensorsResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatus"></a>
# **getStatus**
> GetStatusResponse getStatus(sensorId)

Get analytic information from a sensor

Returns analytic information derived from data processed by a sensor thus far.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getStatus(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**GetStatusResponse**](GetStatusResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVersion"></a>
# **getVersion**
> Version getVersion()

Retrieves API version information

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
apiInstance.getVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Version**](Version.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postConfig"></a>
# **postConfig**
> PostConfigResponse postConfig(body, sensorId)

Apply configuration to a sensor instance

Applies the provided configuration to the sensor instance specified.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PostConfigRequest(); // PostConfigRequest | Sensor configuration to be applied
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.postConfig(body, sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostConfigRequest**](PostConfigRequest.md)| Sensor configuration to be applied | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PostConfigResponse**](PostConfigResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOauth2"></a>
# **postOauth2**
> PostAuth2Response postOauth2(body)

Request a bearer token using Amber account credentials

Requests a bearer token using Amber account credentials. The requested bearer token is returned as the \&quot;id-token\&quot; response attribute. This token is to be used for authenticating API requests throughout a usage session and expires after 60 minutes.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PostAuth2Request(); // PostAuth2Request | Account credentials to be used for authentication

apiInstance.postOauth2(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostAuth2Request**](PostAuth2Request.md)| Account credentials to be used for authentication | 

### Return type

[**PostAuth2Response**](PostAuth2Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOutage"></a>
# **postOutage**
> PostOutageResponse postOutage(sensorId)

Informs the server of an outage

Clears the load buffer of streaming window and resets statistics. Returns stream status

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.postOutage(sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PostOutageResponse**](PostOutageResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postPretrain"></a>
# **postPretrain**
> PostPretrainResponse postPretrain(body, sensorId, opts)

Pretrain a sensor using historical data

Pretrains a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PostPretrainRequest(); // PostPretrainRequest | Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. "0,0.5,1,1.5,2").
let sensorId = "sensorId_example"; // String | Unique identifier for sensor
let opts = { 
  'amberChunk': "amberChunk_example", // String | Specification of chunk, 1:3 2:3 3:3 for example
  'amberTransaction': "amberTransaction_example" // String | Unique identifier for chunk transactions
};
apiInstance.postPretrain(body, sensorId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPretrainRequest**](PostPretrainRequest.md)| Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;). | 
 **sensorId** | **String**| Unique identifier for sensor | 
 **amberChunk** | **String**| Specification of chunk, 1:3 2:3 3:3 for example | [optional] 
 **amberTransaction** | **String**| Unique identifier for chunk transactions | [optional] 

### Return type

[**PostPretrainResponse**](PostPretrainResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSensor"></a>
# **postSensor**
> PostSensorResponse postSensor(body)

Create a new a sensor instance

Spawns a new sensor instance, returning its unique sensorId.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PostSensorRequest(); // PostSensorRequest | Label for new sensor instance to be created

apiInstance.postSensor(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostSensorRequest**](PostSensorRequest.md)| Label for new sensor instance to be created | 

### Return type

[**PostSensorResponse**](PostSensorResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postStream"></a>
# **postStream**
> PostStreamResponse postStream(body, sensorId)

Stream data to a sensor

Sends data to a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.  The following analytic results are returned: - state : sensor state as of this call (one of: \&quot;Buffering\&quot;, \&quot;Autotuning\&quot;, \&quot;Learning\&quot;, \&quot;Monitoring\&quot;, \&quot;Error\&quot;) - ID : array of cluster IDs. These correspond one-to-one with input samples, indicating the cluster to which each input pattern was assigned. - SI : array of smoothed anomaly index values. These values correspond one-to-one with the input samples and range between 0 and 1000. Values closer to 0 represent input patterns which are ordinary given the data seen so far on this sensor. Values closer to 1000 represent novel patterns which are anomalous with respect to data seen before. - AD : array of 0&#x27;s and 1&#x27;s as anomaly detection indicators. These correspond one-to-one with input samples and are produced by thresholding the smoothed anomaly index (SI). The threshold is determined automatically from the SI values. A value of 0 indicates that the SI has not exceeded the anomaly detection threshold. A value of 1 indicates it has, signaling an anomaly at the corresponding input sample. - AH : array of anomaly history values. These values are a moving-window sum of the AD, giving the number of anomaly detections (1&#x27;s) present in the AD signal over a \&quot;recent history\&quot; window whose length is the buffer size. - AM : array of Amber Metric values. These are floating-point values between 0.0 and 1.0 indicating the extent to which the AH contains an unusually high number of anomalies in recent history. The values are derived statistically from a Poisson model, with values close to 0.0 signaling a lower, and values close to 1.0 signaling a higher, frequency of anomalies than usual. - AW : array of Amber Warning Level values. This index is produced by thresholding the Amber Metric (AM) and takes on the values 0, 1 or 2 representing a discrete \&quot;warning level\&quot; for an asset based on the frequency of anomalies within recent history. 0 &#x3D; normal, 1 &#x3D; asset changing, 2 &#x3D; asset critical. The default thresholds for the two warning levels are the standard statistical values of 0.95 (outlier, asset chaing) and 0.997 (extreme outlier, asset critical).

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PostStreamRequest(); // PostStreamRequest | Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. "0,0.5,1,1.5,2").
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.postStream(body, sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostStreamRequest**](PostStreamRequest.md)| Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;). | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PostStreamResponse**](PostStreamResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putConfig"></a>
# **putConfig**
> PutConfigResponse putConfig(body, sensorId)

Update configuration for a sensor instance

Updates the configuration for the sensor instance specified.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PutConfigRequest(); // PutConfigRequest | Updates to sensor configuration
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.putConfig(body, sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutConfigRequest**](PutConfigRequest.md)| Updates to sensor configuration | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PutConfigResponse**](PutConfigResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSensor"></a>
# **putSensor**
> PutSensorResponse putSensor(body, sensorId)

Update label for a sensor instance

Changes the label of an existing sensor instance to the new label specified.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PutSensorRequest(); // PutSensorRequest | New label to apply to sensor instance
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.putSensor(body, sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutSensorRequest**](PutSensorRequest.md)| New label to apply to sensor instance | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PutSensorResponse**](PutSensorResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putStream"></a>
# **putStream**
> PutStreamResponse putStream(body, sensorId)

Stream data to a sensor fusion vector

Update fusion vector with new values for the given features, and optionally submit to Amber. Analytic results returned are the same as POST /stream.

### Example
```javascript
import {AmberApiServer} from 'amber_api_server';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.PutStreamRequest(); // PutStreamRequest | New values for sensor fusion vector.
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.putStream(body, sensorId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PutStreamRequest**](PutStreamRequest.md)| New values for sensor fusion vector. | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

[**PutStreamResponse**](PutStreamResponse.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

