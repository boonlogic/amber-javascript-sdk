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

import ApiClient from './ApiClient';
import Body from './model/Body';
import Body1 from './model/Body1';
import Body2 from './model/Body2';
import Body3 from './model/Body3';
import Body4 from './model/Body4';
import EndpointUsageInfo from './model/EndpointUsageInfo';
import Error from './model/Error';
import FeatureConfig from './model/FeatureConfig';
import Float32Array from './model/Float32Array';
import GetConfigResponse from './model/GetConfigResponse';
import GetConfigResponseFeatures from './model/GetConfigResponseFeatures';
import GetSensorResponse from './model/GetSensorResponse';
import GetSensorResponseUsageInfo from './model/GetSensorResponseUsageInfo';
import GetSensorResponseUsageInfoGetConfig from './model/GetSensorResponseUsageInfoGetConfig';
import GetSensorResponseUsageInfoPostStream from './model/GetSensorResponseUsageInfoPostStream';
import GetSensorsResponse from './model/GetSensorsResponse';
import GetStatusResponse from './model/GetStatusResponse';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse400 from './model/InlineResponse400';
import NumClusters from './model/NumClusters';
import PCA from './model/PCA';
import PostAuth2Request from './model/PostAuth2Request';
import PostAuth2Response from './model/PostAuth2Response';
import PostConfigRequest from './model/PostConfigRequest';
import PostConfigResponse from './model/PostConfigResponse';
import PostSensorRequest from './model/PostSensorRequest';
import PostSensorResponse from './model/PostSensorResponse';
import PostStreamRequest from './model/PostStreamRequest';
import PostStreamResponse from './model/PostStreamResponse';
import PutSensorRequest from './model/PutSensorRequest';
import PutSensorResponse from './model/PutSensorResponse';
import SensorInstance from './model/SensorInstance';
import SensorInstanceFull from './model/SensorInstanceFull';
import SensorUsageInfo from './model/SensorUsageInfo';
import StreamStatus from './model/StreamStatus';
import StreamingEndpointUsageInfo from './model/StreamingEndpointUsageInfo';
import TotalInferences from './model/TotalInferences';
import Uint16Array from './model/Uint16Array';
import Uint32Array from './model/Uint32Array';
import Uint64Array from './model/Uint64Array';
import DefaultApi from './api/DefaultApi';

/**
* Boon_Logic_Amber_SDK.<br>
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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body,

    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1,

    /**
     * The Body2 model constructor.
     * @property {module:model/Body2}
     */
    Body2,

    /**
     * The Body3 model constructor.
     * @property {module:model/Body3}
     */
    Body3,

    /**
     * The Body4 model constructor.
     * @property {module:model/Body4}
     */
    Body4,

    /**
     * The EndpointUsageInfo model constructor.
     * @property {module:model/EndpointUsageInfo}
     */
    EndpointUsageInfo,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The FeatureConfig model constructor.
     * @property {module:model/FeatureConfig}
     */
    FeatureConfig,

    /**
     * The Float32Array model constructor.
     * @property {module:model/Float32Array}
     */
    Float32Array,

    /**
     * The GetConfigResponse model constructor.
     * @property {module:model/GetConfigResponse}
     */
    GetConfigResponse,

    /**
     * The GetConfigResponseFeatures model constructor.
     * @property {module:model/GetConfigResponseFeatures}
     */
    GetConfigResponseFeatures,

    /**
     * The GetSensorResponse model constructor.
     * @property {module:model/GetSensorResponse}
     */
    GetSensorResponse,

    /**
     * The GetSensorResponseUsageInfo model constructor.
     * @property {module:model/GetSensorResponseUsageInfo}
     */
    GetSensorResponseUsageInfo,

    /**
     * The GetSensorResponseUsageInfoGetConfig model constructor.
     * @property {module:model/GetSensorResponseUsageInfoGetConfig}
     */
    GetSensorResponseUsageInfoGetConfig,

    /**
     * The GetSensorResponseUsageInfoPostStream model constructor.
     * @property {module:model/GetSensorResponseUsageInfoPostStream}
     */
    GetSensorResponseUsageInfoPostStream,

    /**
     * The GetSensorsResponse model constructor.
     * @property {module:model/GetSensorsResponse}
     */
    GetSensorsResponse,

    /**
     * The GetStatusResponse model constructor.
     * @property {module:model/GetStatusResponse}
     */
    GetStatusResponse,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The NumClusters model constructor.
     * @property {module:model/NumClusters}
     */
    NumClusters,

    /**
     * The PCA model constructor.
     * @property {module:model/PCA}
     */
    PCA,

    /**
     * The PostAuth2Request model constructor.
     * @property {module:model/PostAuth2Request}
     */
    PostAuth2Request,

    /**
     * The PostAuth2Response model constructor.
     * @property {module:model/PostAuth2Response}
     */
    PostAuth2Response,

    /**
     * The PostConfigRequest model constructor.
     * @property {module:model/PostConfigRequest}
     */
    PostConfigRequest,

    /**
     * The PostConfigResponse model constructor.
     * @property {module:model/PostConfigResponse}
     */
    PostConfigResponse,

    /**
     * The PostSensorRequest model constructor.
     * @property {module:model/PostSensorRequest}
     */
    PostSensorRequest,

    /**
     * The PostSensorResponse model constructor.
     * @property {module:model/PostSensorResponse}
     */
    PostSensorResponse,

    /**
     * The PostStreamRequest model constructor.
     * @property {module:model/PostStreamRequest}
     */
    PostStreamRequest,

    /**
     * The PostStreamResponse model constructor.
     * @property {module:model/PostStreamResponse}
     */
    PostStreamResponse,

    /**
     * The PutSensorRequest model constructor.
     * @property {module:model/PutSensorRequest}
     */
    PutSensorRequest,

    /**
     * The PutSensorResponse model constructor.
     * @property {module:model/PutSensorResponse}
     */
    PutSensorResponse,

    /**
     * The SensorInstance model constructor.
     * @property {module:model/SensorInstance}
     */
    SensorInstance,

    /**
     * The SensorInstanceFull model constructor.
     * @property {module:model/SensorInstanceFull}
     */
    SensorInstanceFull,

    /**
     * The SensorUsageInfo model constructor.
     * @property {module:model/SensorUsageInfo}
     */
    SensorUsageInfo,

    /**
     * The StreamStatus model constructor.
     * @property {module:model/StreamStatus}
     */
    StreamStatus,

    /**
     * The StreamingEndpointUsageInfo model constructor.
     * @property {module:model/StreamingEndpointUsageInfo}
     */
    StreamingEndpointUsageInfo,

    /**
     * The TotalInferences model constructor.
     * @property {module:model/TotalInferences}
     */
    TotalInferences,

    /**
     * The Uint16Array model constructor.
     * @property {module:model/Uint16Array}
     */
    Uint16Array,

    /**
     * The Uint32Array model constructor.
     * @property {module:model/Uint32Array}
     */
    Uint32Array,

    /**
     * The Uint64Array model constructor.
     * @property {module:model/Uint64Array}
     */
    Uint64Array,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
