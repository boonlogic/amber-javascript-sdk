# Amber Javascript Functional Breakdown

## Documentation for API Endpoints

All URIs are relative to *https://amber.boonlogic.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AmberApiServer.DefaultApi* | [**deleteSensor**](docs/DefaultApi.md#deleteSensor) | **DELETE** /sensor | Delete a sensor instance
*AmberApiServer.DefaultApi* | [**getConfig**](docs/DefaultApi.md#getConfig) | **GET** /config | Get the current configuration of a sensor instance
*AmberApiServer.DefaultApi* | [**getSensor**](docs/DefaultApi.md#getSensor) | **GET** /sensor | Get basic information about a sensor instance
*AmberApiServer.DefaultApi* | [**getSensors**](docs/DefaultApi.md#getSensors) | **GET** /sensors | List all sensors for this user
*AmberApiServer.DefaultApi* | [**getStatus**](docs/DefaultApi.md#getStatus) | **GET** /status | Get analytic information from a sensor
*AmberApiServer.DefaultApi* | [**postConfig**](docs/DefaultApi.md#postConfig) | **POST** /config | Apply configuration to a sensor instance
*AmberApiServer.DefaultApi* | [**postOauth2**](docs/DefaultApi.md#postOauth2) | **POST** /oauth2 | Request a bearer token using Amber account credentials
*AmberApiServer.DefaultApi* | [**postSensor**](docs/DefaultApi.md#postSensor) | **POST** /sensor | Create a new a sensor instance
*AmberApiServer.DefaultApi* | [**postStream**](docs/DefaultApi.md#postStream) | **POST** /stream | Stream data to a sensor
*AmberApiServer.DefaultApi* | [**putSensor**](docs/DefaultApi.md#putSensor) | **PUT** /sensor | Update label for a sensor instance

## Documentation for Models

 - [AmberApiServer.Body](docs/Body.md)
 - [AmberApiServer.Body1](docs/Body1.md)
 - [AmberApiServer.Body2](docs/Body2.md)
 - [AmberApiServer.Body3](docs/Body3.md)
 - [AmberApiServer.Body4](docs/Body4.md)
 - [AmberApiServer.EndpointUsageInfo](docs/EndpointUsageInfo.md)
 - [AmberApiServer.Error](docs/Error.md)
 - [AmberApiServer.FeatureConfig](docs/FeatureConfig.md)
 - [AmberApiServer.Float32Array](docs/Float32Array.md)
 - [AmberApiServer.GetConfigResponse](docs/GetConfigResponse.md)
 - [AmberApiServer.GetConfigResponseFeatures](docs/GetConfigResponseFeatures.md)
 - [AmberApiServer.GetSensorResponse](docs/GetSensorResponse.md)
 - [AmberApiServer.GetSensorResponseUsageInfo](docs/GetSensorResponseUsageInfo.md)
 - [AmberApiServer.GetSensorResponseUsageInfoGetConfig](docs/GetSensorResponseUsageInfoGetConfig.md)
 - [AmberApiServer.GetSensorResponseUsageInfoPostStream](docs/GetSensorResponseUsageInfoPostStream.md)
 - [AmberApiServer.GetSensorsResponse](docs/GetSensorsResponse.md)
 - [AmberApiServer.GetStatusResponse](docs/GetStatusResponse.md)
 - [AmberApiServer.InlineResponse200](docs/InlineResponse200.md)
 - [AmberApiServer.InlineResponse400](docs/InlineResponse400.md)
 - [AmberApiServer.NumClusters](docs/NumClusters.md)
 - [AmberApiServer.PCA](docs/PCA.md)
 - [AmberApiServer.PostAuth2Request](docs/PostAuth2Request.md)
 - [AmberApiServer.PostAuth2Response](docs/PostAuth2Response.md)
 - [AmberApiServer.PostConfigRequest](docs/PostConfigRequest.md)
 - [AmberApiServer.PostConfigResponse](docs/PostConfigResponse.md)
 - [AmberApiServer.PostSensorRequest](docs/PostSensorRequest.md)
 - [AmberApiServer.PostSensorResponse](docs/PostSensorResponse.md)
 - [AmberApiServer.PostStreamRequest](docs/PostStreamRequest.md)
 - [AmberApiServer.PostStreamResponse](docs/PostStreamResponse.md)
 - [AmberApiServer.PutSensorRequest](docs/PutSensorRequest.md)
 - [AmberApiServer.PutSensorResponse](docs/PutSensorResponse.md)
 - [AmberApiServer.SensorInstance](docs/SensorInstance.md)
 - [AmberApiServer.SensorInstanceFull](docs/SensorInstanceFull.md)
 - [AmberApiServer.SensorUsageInfo](docs/SensorUsageInfo.md)
 - [AmberApiServer.StreamStatus](docs/StreamStatus.md)
 - [AmberApiServer.StreamingEndpointUsageInfo](docs/StreamingEndpointUsageInfo.md)
 - [AmberApiServer.TotalInferences](docs/TotalInferences.md)
 - [AmberApiServer.Uint16Array](docs/Uint16Array.md)
 - [AmberApiServer.Uint32Array](docs/Uint32Array.md)
 - [AmberApiServer.Uint64Array](docs/Uint64Array.md)

## Documentation for Authorization


### authorize-amber-pool

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

