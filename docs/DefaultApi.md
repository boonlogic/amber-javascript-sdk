# AmberApiServer.DefaultApi

All URIs are relative to *https://amber.boonlogic.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSensor**](DefaultApi.md#deleteSensor) | **DELETE** /sensor | Delete a sensor instance
[**getConfig**](DefaultApi.md#getConfig) | **GET** /config | Get the current configuration of a sensor instance
[**getSensor**](DefaultApi.md#getSensor) | **GET** /sensor | Get basic information about a sensor instance
[**getSensors**](DefaultApi.md#getSensors) | **GET** /sensors | List all sensors for this user
[**getStatus**](DefaultApi.md#getStatus) | **GET** /status | Get analytic information from a sensor
[**postConfig**](DefaultApi.md#postConfig) | **POST** /config | Apply configuration to a sensor instance
[**postOauth2**](DefaultApi.md#postOauth2) | **POST** /oauth2 | Request a bearer token using Amber account credentials
[**postSensor**](DefaultApi.md#postSensor) | **POST** /sensor | Create a new a sensor instance
[**postStream**](DefaultApi.md#postStream) | **POST** /stream | Stream data to a sensor
[**putSensor**](DefaultApi.md#putSensor) | **PUT** /sensor | Update label for a sensor instance

<a name="deleteSensor"></a>
# **deleteSensor**
> deleteSensor(sensorId)

Delete a sensor instance

Deletes the sensor instance with the specified sensorId.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.deleteSensor(sensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

null (empty response body)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConfig"></a>
# **getConfig**
> Object getConfig(sensorId)

Get the current configuration of a sensor instance

Returns the current configuration of the sensor instance specified.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getConfig(sensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensor"></a>
# **getSensor**
> Object getSensor(sensorId)

Get basic information about a sensor instance

Returns basic information about an existing sensor instance.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getSensor(sensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSensors"></a>
# **getSensors**
> [InlineResponse200] getSensors()

List all sensors for this user

Returns a list of all current sensor instances for this user.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
apiInstance.getSensors((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatus"></a>
# **getStatus**
> Object getStatus(sensorId)

Get analytic information from a sensor

Returns analytic information derived from data processed by a sensor thus far.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.getStatus(sensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postConfig"></a>
# **postConfig**
> Object postConfig(bodysensorId)

Apply configuration to a sensor instance

Applies the provided configuration to the sensor instance specified.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.Body(); // Body | Sensor configuration to be applied
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.postConfig(bodysensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Sensor configuration to be applied | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOauth2"></a>
# **postOauth2**
> Object postOauth2(body)

Request a bearer token using Amber account credentials

Requests a bearer token using Amber account credentials. The requested bearer token is returned as the \&quot;id-token\&quot; response attribute. This token is to be used for authenticating API requests throughout a usage session and expires after 60 minutes.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.Body1(); // Body1 | Account credentials to be used for authentication

apiInstance.postOauth2(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)| Account credentials to be used for authentication | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postSensor"></a>
# **postSensor**
> Object postSensor(body)

Create a new a sensor instance

Spawns a new sensor instance, returning its unique sensorId.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.Body3(); // Body3 | Label for new sensor instance to be created

apiInstance.postSensor(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| Label for new sensor instance to be created | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postStream"></a>
# **postStream**
> Object postStream(bodysensorId)

Stream data to a sensor

Sends data to a sensor. Ingoing data should be formatted as a simple string of comma-separated numbers with no spaces.  The following analytic results are returned: - state : sensor state as of this call (one of: \&quot;Buffering\&quot;, \&quot;Autotuning\&quot;, \&quot;Learning\&quot;, \&quot;Monitoring\&quot;, \&quot;Error\&quot;) - ID : array of cluster IDs. These correspond one-to-one with input samples, indicating the cluster to which each input pattern was assigned. - SI : array of smoothed anomaly index values. These values correspond one-to-one with the input samples and range between 0 and 1000. Values closer to 0 represent input patterns which are ordinary given the data seen so far on this sensor. Values closer to 1000 represent novel patterns which are anomalous with respect to data seen before. - AD : array of 0&#x27;s and 1&#x27;s as anomaly detection indicators. These correspond one-to-one with input samples and are produced by thresholding the smoothed anomaly index (SI). The threshold is determined automatically from the SI values. A value of 0 indicates that the SI has not exceeded the anomaly detection threshold. A value of 1 indicates it has, signaling an anomaly at the corresponding input sample. - AH : array of anomaly history values. These values are a moving-window sum of the AD, giving the number of anomaly detections (1&#x27;s) present in the AD signal over a \&quot;recent history\&quot; window whose length is the buffer size. - AM : array of Amber Metric values. These are floating-point values between 0.0 and 1.0 indicating the extent to which the AH contains an unusually high number of anomalies in recent history. The values are derived statistically from a Poisson model, with values close to 0.0 signaling a lower, and values close to 1.0 signaling a higher, frequency of anomalies than usual. - AW : array of Amber Warning Level values. This index is produced by thresholding the Amber Metric (AM) and takes on the values 0, 1 or 2 representing a discrete \&quot;warning level\&quot; for an asset based on the frequency of anomalies within recent history. 0 &#x3D; normal, 1 &#x3D; asset changing, 2 &#x3D; asset critical. The default thresholds for the two warning levels are the standard statistical values of 0.95 (outlier, asset chaing) and 0.997 (extreme outlier, asset critical).

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.Body4(); // Body4 | Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. "0,0.5,1,1.5,2").
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.postStream(bodysensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| Data to be streamed to sensor. Should be formatted as a simple string of comma-separated numbers with no spaces (e.g. &quot;0,0.5,1,1.5,2&quot;). | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSensor"></a>
# **putSensor**
> Object putSensor(bodysensorId)

Update label for a sensor instance

Changes the label of an existing sensor instance to the new label specified.

### Example
```javascript
import AmberApiServer from 'amber_python_sdk';
let defaultClient = AmberApiServer.ApiClient.instance;

// Configure API key authorization: authorize-amber-pool
let authorize-amber-pool = defaultClient.authentications['authorize-amber-pool'];
authorize-amber-pool.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//authorize-amber-pool.apiKeyPrefix = 'Token';

let apiInstance = new AmberApiServer.DefaultApi();
let body = new AmberApiServer.Body2(); // Body2 | New label to apply to sensor instance
let sensorId = "sensorId_example"; // String | Unique identifier for sensor

apiInstance.putSensor(bodysensorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| New label to apply to sensor instance | 
 **sensorId** | **String**| Unique identifier for sensor | 

### Return type

**Object**

### Authorization

[authorize-amber-pool](../README.md#authorize-amber-pool)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

