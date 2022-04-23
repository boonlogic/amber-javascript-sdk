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
import {ApiClient} from './ApiClient';
import {EndpointUsageInfo} from './model/EndpointUsageInfo';
import {Error} from './model/Error';
import {FeatureConfig} from './model/FeatureConfig';
import {Float32Array} from './model/Float32Array';
import {FusionConfig} from './model/FusionConfig';
import {GetConfigResponse} from './model/GetConfigResponse';
import {GetPretrainResponse} from './model/GetPretrainResponse';
import {GetRootCauseResponse} from './model/GetRootCauseResponse';
import {GetSensorResponse} from './model/GetSensorResponse';
import {GetSensorsResponse} from './model/GetSensorsResponse';
import {GetStatusResponse} from './model/GetStatusResponse';
import {GetSummaryResponse} from './model/GetSummaryResponse';
import {Int32Array} from './model/Int32Array';
import {MAP} from './model/MAP';
import {MAmberStatus} from './model/MAmberStatus';
import {MAutotune} from './model/MAutotune';
import {MBufferStats} from './model/MBufferStats';
import {MNCP} from './model/MNCP';
import {MNano} from './model/MNano';
import {MNanoBackend} from './model/MNanoBackend';
import {MNanoConfig} from './model/MNanoConfig';
import {MPatternMemory} from './model/MPatternMemory';
import {MRecentAMs} from './model/MRecentAMs';
import {MRecentAnalytics} from './model/MRecentAnalytics';
import {MRecentFloats} from './model/MRecentFloats';
import {MRecentIDs} from './model/MRecentIDs';
import {MRecentSamples} from './model/MRecentSamples';
import {MRecentTimes} from './model/MRecentTimes';
import {MStreamingParameters} from './model/MStreamingParameters';
import {MTraining} from './model/MTraining';
import {MagicNumber} from './model/MagicNumber';
import {MayContainNullsArray} from './model/MayContainNullsArray';
import {PCA} from './model/PCA';
import {PostAuth2Request} from './model/PostAuth2Request';
import {PostAuth2Response} from './model/PostAuth2Response';
import {PostConfigRequest} from './model/PostConfigRequest';
import {PostConfigResponse} from './model/PostConfigResponse';
import {PostPretrainRequest} from './model/PostPretrainRequest';
import {PostPretrainResponse} from './model/PostPretrainResponse';
import {PostSensorRequest} from './model/PostSensorRequest';
import {PostSensorResponse} from './model/PostSensorResponse';
import {PostStreamRequest} from './model/PostStreamRequest';
import {PostStreamResponse} from './model/PostStreamResponse';
import {PutConfigRequest} from './model/PutConfigRequest';
import {PutConfigResponse} from './model/PutConfigResponse';
import {PutSensorRequest} from './model/PutSensorRequest';
import {PutSensorResponse} from './model/PutSensorResponse';
import {PutStreamFeature} from './model/PutStreamFeature';
import {PutStreamRequest} from './model/PutStreamRequest';
import {PutStreamResponse} from './model/PutStreamResponse';
import {SensorInstance} from './model/SensorInstance';
import {SensorUsageInfo} from './model/SensorUsageInfo';
import {StreamStatus} from './model/StreamStatus';
import {StreamingEndpointUsageInfo} from './model/StreamingEndpointUsageInfo';
import {StreamingParameters} from './model/StreamingParameters';
import {Uint16Array} from './model/Uint16Array';
import {Uint32Array} from './model/Uint32Array';
import {Uint64Array} from './model/Uint64Array';
import {Version} from './model/Version';
import {VersionNumber} from './model/VersionNumber';
import {DefaultApi} from './api/DefaultApi';

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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

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
     * The FusionConfig model constructor.
     * @property {module:model/FusionConfig}
     */
    FusionConfig,

    /**
     * The GetConfigResponse model constructor.
     * @property {module:model/GetConfigResponse}
     */
    GetConfigResponse,

    /**
     * The GetPretrainResponse model constructor.
     * @property {module:model/GetPretrainResponse}
     */
    GetPretrainResponse,

    /**
     * The GetRootCauseResponse model constructor.
     * @property {module:model/GetRootCauseResponse}
     */
    GetRootCauseResponse,

    /**
     * The GetSensorResponse model constructor.
     * @property {module:model/GetSensorResponse}
     */
    GetSensorResponse,

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
     * The GetSummaryResponse model constructor.
     * @property {module:model/GetSummaryResponse}
     */
    GetSummaryResponse,

    /**
     * The Int32Array model constructor.
     * @property {module:model/Int32Array}
     */
    Int32Array,

    /**
     * The MAP model constructor.
     * @property {module:model/MAP}
     */
    MAP,

    /**
     * The MAmberStatus model constructor.
     * @property {module:model/MAmberStatus}
     */
    MAmberStatus,

    /**
     * The MAutotune model constructor.
     * @property {module:model/MAutotune}
     */
    MAutotune,

    /**
     * The MBufferStats model constructor.
     * @property {module:model/MBufferStats}
     */
    MBufferStats,

    /**
     * The MNCP model constructor.
     * @property {module:model/MNCP}
     */
    MNCP,

    /**
     * The MNano model constructor.
     * @property {module:model/MNano}
     */
    MNano,

    /**
     * The MNanoBackend model constructor.
     * @property {module:model/MNanoBackend}
     */
    MNanoBackend,

    /**
     * The MNanoConfig model constructor.
     * @property {module:model/MNanoConfig}
     */
    MNanoConfig,

    /**
     * The MPatternMemory model constructor.
     * @property {module:model/MPatternMemory}
     */
    MPatternMemory,

    /**
     * The MRecentAMs model constructor.
     * @property {module:model/MRecentAMs}
     */
    MRecentAMs,

    /**
     * The MRecentAnalytics model constructor.
     * @property {module:model/MRecentAnalytics}
     */
    MRecentAnalytics,

    /**
     * The MRecentFloats model constructor.
     * @property {module:model/MRecentFloats}
     */
    MRecentFloats,

    /**
     * The MRecentIDs model constructor.
     * @property {module:model/MRecentIDs}
     */
    MRecentIDs,

    /**
     * The MRecentSamples model constructor.
     * @property {module:model/MRecentSamples}
     */
    MRecentSamples,

    /**
     * The MRecentTimes model constructor.
     * @property {module:model/MRecentTimes}
     */
    MRecentTimes,

    /**
     * The MStreamingParameters model constructor.
     * @property {module:model/MStreamingParameters}
     */
    MStreamingParameters,

    /**
     * The MTraining model constructor.
     * @property {module:model/MTraining}
     */
    MTraining,

    /**
     * The MagicNumber model constructor.
     * @property {module:model/MagicNumber}
     */
    MagicNumber,

    /**
     * The MayContainNullsArray model constructor.
     * @property {module:model/MayContainNullsArray}
     */
    MayContainNullsArray,

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
     * The PostPretrainRequest model constructor.
     * @property {module:model/PostPretrainRequest}
     */
    PostPretrainRequest,

    /**
     * The PostPretrainResponse model constructor.
     * @property {module:model/PostPretrainResponse}
     */
    PostPretrainResponse,

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
     * The PutConfigRequest model constructor.
     * @property {module:model/PutConfigRequest}
     */
    PutConfigRequest,

    /**
     * The PutConfigResponse model constructor.
     * @property {module:model/PutConfigResponse}
     */
    PutConfigResponse,

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
     * The PutStreamFeature model constructor.
     * @property {module:model/PutStreamFeature}
     */
    PutStreamFeature,

    /**
     * The PutStreamRequest model constructor.
     * @property {module:model/PutStreamRequest}
     */
    PutStreamRequest,

    /**
     * The PutStreamResponse model constructor.
     * @property {module:model/PutStreamResponse}
     */
    PutStreamResponse,

    /**
     * The SensorInstance model constructor.
     * @property {module:model/SensorInstance}
     */
    SensorInstance,

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
     * The StreamingParameters model constructor.
     * @property {module:model/StreamingParameters}
     */
    StreamingParameters,

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
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version,

    /**
     * The VersionNumber model constructor.
     * @property {module:model/VersionNumber}
     */
    VersionNumber,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
