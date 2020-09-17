'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultApi = exports.Uint64Array = exports.Uint32Array = exports.Uint16Array = exports.TotalInferences = exports.StreamingEndpointUsageInfo = exports.StreamStatus = exports.SensorUsageInfo = exports.SensorInstanceFull = exports.SensorInstance = exports.PutSensorResponse = exports.PutSensorRequest = exports.PostStreamResponse = exports.PostStreamRequest = exports.PostSensorResponse = exports.PostSensorRequest = exports.PostConfigResponse = exports.PostConfigRequest = exports.PostAuth2Response = exports.PostAuth2Request = exports.PCA = exports.NumClusters = exports.InlineResponse400 = exports.InlineResponse200 = exports.GetStatusResponse = exports.GetSensorsResponse = exports.GetSensorResponseUsageInfoPostStream = exports.GetSensorResponseUsageInfoGetConfig = exports.GetSensorResponseUsageInfo = exports.GetSensorResponse = exports.GetConfigResponseFeatures = exports.GetConfigResponse = exports.Float32Array = exports.FeatureConfig = exports.Error = exports.EndpointUsageInfo = exports.Body4 = exports.Body3 = exports.Body2 = exports.Body1 = exports.Body = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Body = require('./model/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Body3 = require('./model/Body1');

var _Body4 = _interopRequireDefault(_Body3);

var _Body5 = require('./model/Body2');

var _Body6 = _interopRequireDefault(_Body5);

var _Body7 = require('./model/Body3');

var _Body8 = _interopRequireDefault(_Body7);

var _Body9 = require('./model/Body4');

var _Body10 = _interopRequireDefault(_Body9);

var _EndpointUsageInfo = require('./model/EndpointUsageInfo');

var _EndpointUsageInfo2 = _interopRequireDefault(_EndpointUsageInfo);

var _Error = require('./model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _FeatureConfig = require('./model/FeatureConfig');

var _FeatureConfig2 = _interopRequireDefault(_FeatureConfig);

var _Float32Array = require('./model/Float32Array');

var _Float32Array2 = _interopRequireDefault(_Float32Array);

var _GetConfigResponse = require('./model/GetConfigResponse');

var _GetConfigResponse2 = _interopRequireDefault(_GetConfigResponse);

var _GetConfigResponseFeatures = require('./model/GetConfigResponseFeatures');

var _GetConfigResponseFeatures2 = _interopRequireDefault(_GetConfigResponseFeatures);

var _GetSensorResponse = require('./model/GetSensorResponse');

var _GetSensorResponse2 = _interopRequireDefault(_GetSensorResponse);

var _GetSensorResponseUsageInfo = require('./model/GetSensorResponseUsageInfo');

var _GetSensorResponseUsageInfo2 = _interopRequireDefault(_GetSensorResponseUsageInfo);

var _GetSensorResponseUsageInfoGetConfig = require('./model/GetSensorResponseUsageInfoGetConfig');

var _GetSensorResponseUsageInfoGetConfig2 = _interopRequireDefault(_GetSensorResponseUsageInfoGetConfig);

var _GetSensorResponseUsageInfoPostStream = require('./model/GetSensorResponseUsageInfoPostStream');

var _GetSensorResponseUsageInfoPostStream2 = _interopRequireDefault(_GetSensorResponseUsageInfoPostStream);

var _GetSensorsResponse = require('./model/GetSensorsResponse');

var _GetSensorsResponse2 = _interopRequireDefault(_GetSensorsResponse);

var _GetStatusResponse = require('./model/GetStatusResponse');

var _GetStatusResponse2 = _interopRequireDefault(_GetStatusResponse);

var _InlineResponse = require('./model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./model/InlineResponse400');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _NumClusters = require('./model/NumClusters');

var _NumClusters2 = _interopRequireDefault(_NumClusters);

var _PCA = require('./model/PCA');

var _PCA2 = _interopRequireDefault(_PCA);

var _PostAuth2Request = require('./model/PostAuth2Request');

var _PostAuth2Request2 = _interopRequireDefault(_PostAuth2Request);

var _PostAuth2Response = require('./model/PostAuth2Response');

var _PostAuth2Response2 = _interopRequireDefault(_PostAuth2Response);

var _PostConfigRequest = require('./model/PostConfigRequest');

var _PostConfigRequest2 = _interopRequireDefault(_PostConfigRequest);

var _PostConfigResponse = require('./model/PostConfigResponse');

var _PostConfigResponse2 = _interopRequireDefault(_PostConfigResponse);

var _PostSensorRequest = require('./model/PostSensorRequest');

var _PostSensorRequest2 = _interopRequireDefault(_PostSensorRequest);

var _PostSensorResponse = require('./model/PostSensorResponse');

var _PostSensorResponse2 = _interopRequireDefault(_PostSensorResponse);

var _PostStreamRequest = require('./model/PostStreamRequest');

var _PostStreamRequest2 = _interopRequireDefault(_PostStreamRequest);

var _PostStreamResponse = require('./model/PostStreamResponse');

var _PostStreamResponse2 = _interopRequireDefault(_PostStreamResponse);

var _PutSensorRequest = require('./model/PutSensorRequest');

var _PutSensorRequest2 = _interopRequireDefault(_PutSensorRequest);

var _PutSensorResponse = require('./model/PutSensorResponse');

var _PutSensorResponse2 = _interopRequireDefault(_PutSensorResponse);

var _SensorInstance = require('./model/SensorInstance');

var _SensorInstance2 = _interopRequireDefault(_SensorInstance);

var _SensorInstanceFull = require('./model/SensorInstanceFull');

var _SensorInstanceFull2 = _interopRequireDefault(_SensorInstanceFull);

var _SensorUsageInfo = require('./model/SensorUsageInfo');

var _SensorUsageInfo2 = _interopRequireDefault(_SensorUsageInfo);

var _StreamStatus = require('./model/StreamStatus');

var _StreamStatus2 = _interopRequireDefault(_StreamStatus);

var _StreamingEndpointUsageInfo = require('./model/StreamingEndpointUsageInfo');

var _StreamingEndpointUsageInfo2 = _interopRequireDefault(_StreamingEndpointUsageInfo);

var _TotalInferences = require('./model/TotalInferences');

var _TotalInferences2 = _interopRequireDefault(_TotalInferences);

var _Uint16Array = require('./model/Uint16Array');

var _Uint16Array2 = _interopRequireDefault(_Uint16Array);

var _Uint32Array = require('./model/Uint32Array');

var _Uint32Array2 = _interopRequireDefault(_Uint32Array);

var _Uint64Array = require('./model/Uint64Array');

var _Uint64Array2 = _interopRequireDefault(_Uint64Array);

var _DefaultApi = require('./api/DefaultApi');

var _DefaultApi2 = _interopRequireDefault(_DefaultApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Boon_Logic_Amber_API_Server.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var AmberApiServer = require('index'); // See note below*.
* var xxxSvc = new AmberApiServer.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new AmberApiServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new AmberApiServer.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new AmberApiServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.3
*/
/**
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

exports.ApiClient = _ApiClient2.default;
exports.Body = _Body2.default;
exports.Body1 = _Body4.default;
exports.Body2 = _Body6.default;
exports.Body3 = _Body8.default;
exports.Body4 = _Body10.default;
exports.EndpointUsageInfo = _EndpointUsageInfo2.default;
exports.Error = _Error2.default;
exports.FeatureConfig = _FeatureConfig2.default;
exports.Float32Array = _Float32Array2.default;
exports.GetConfigResponse = _GetConfigResponse2.default;
exports.GetConfigResponseFeatures = _GetConfigResponseFeatures2.default;
exports.GetSensorResponse = _GetSensorResponse2.default;
exports.GetSensorResponseUsageInfo = _GetSensorResponseUsageInfo2.default;
exports.GetSensorResponseUsageInfoGetConfig = _GetSensorResponseUsageInfoGetConfig2.default;
exports.GetSensorResponseUsageInfoPostStream = _GetSensorResponseUsageInfoPostStream2.default;
exports.GetSensorsResponse = _GetSensorsResponse2.default;
exports.GetStatusResponse = _GetStatusResponse2.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse400 = _InlineResponse4.default;
exports.NumClusters = _NumClusters2.default;
exports.PCA = _PCA2.default;
exports.PostAuth2Request = _PostAuth2Request2.default;
exports.PostAuth2Response = _PostAuth2Response2.default;
exports.PostConfigRequest = _PostConfigRequest2.default;
exports.PostConfigResponse = _PostConfigResponse2.default;
exports.PostSensorRequest = _PostSensorRequest2.default;
exports.PostSensorResponse = _PostSensorResponse2.default;
exports.PostStreamRequest = _PostStreamRequest2.default;
exports.PostStreamResponse = _PostStreamResponse2.default;
exports.PutSensorRequest = _PutSensorRequest2.default;
exports.PutSensorResponse = _PutSensorResponse2.default;
exports.SensorInstance = _SensorInstance2.default;
exports.SensorInstanceFull = _SensorInstanceFull2.default;
exports.SensorUsageInfo = _SensorUsageInfo2.default;
exports.StreamStatus = _StreamStatus2.default;
exports.StreamingEndpointUsageInfo = _StreamingEndpointUsageInfo2.default;
exports.TotalInferences = _TotalInferences2.default;
exports.Uint16Array = _Uint16Array2.default;
exports.Uint32Array = _Uint32Array2.default;
exports.Uint64Array = _Uint64Array2.default;
exports.DefaultApi = _DefaultApi2.default;