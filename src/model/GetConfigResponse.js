/*
 * Amber API Server
 * Boon Logic Amber API Server
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {FeatureConfig} from './FeatureConfig';
import {StreamingParameters} from './StreamingParameters';

/**
 * The GetConfigResponse model module.
 * @module model/GetConfigResponse
 * @version 1.0.3
 */
export class GetConfigResponse extends StreamingParameters {
  /**
   * Constructs a new <code>GetConfigResponse</code>.
   * @alias module:model/GetConfigResponse
   * @class
   * @extends module:model/StreamingParameters
   * @param featureCount {} number of features per sample
   * @param streamingWindowSize {} streaming window size
   * @param features {} 
   * @param percentVariation {} the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering
   * @param samplesToBuffer {} the number of samples to be applied before autotuning begins
   */
  constructor(featureCount, streamingWindowSize, features, percentVariation, samplesToBuffer) {
    super();
    this.featureCount = featureCount;
    this.streamingWindowSize = streamingWindowSize;
    this.features = features;
    this.percentVariation = percentVariation;
    this.samplesToBuffer = samplesToBuffer;
  }

  /**
   * Constructs a <code>GetConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetConfigResponse} obj Optional instance to populate.
   * @return {module:model/GetConfigResponse} The populated <code>GetConfigResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetConfigResponse();
      StreamingParameters.constructFromObject(data, obj);
      if (data.hasOwnProperty('featureCount'))
        obj.featureCount = ApiClient.convertToType(data['featureCount'], 'Number');
      if (data.hasOwnProperty('streamingWindowSize'))
        obj.streamingWindowSize = ApiClient.convertToType(data['streamingWindowSize'], 'Number');
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], [FeatureConfig]);
      if (data.hasOwnProperty('percentVariation'))
        obj.percentVariation = ApiClient.convertToType(data['percentVariation'], 'Number');
      if (data.hasOwnProperty('samplesToBuffer'))
        obj.samplesToBuffer = ApiClient.convertToType(data['samplesToBuffer'], 'Number');
    }
    return obj;
  }
}

/**
 * number of features per sample
 * @member {Number} featureCount
 */
GetConfigResponse.prototype.featureCount = undefined;

/**
 * streaming window size
 * @member {Number} streamingWindowSize
 */
GetConfigResponse.prototype.streamingWindowSize = undefined;

/**
 * @member {Array.<module:model/FeatureConfig>} features
 */
GetConfigResponse.prototype.features = undefined;

/**
 * the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering
 * @member {Number} percentVariation
 */
GetConfigResponse.prototype.percentVariation = undefined;

/**
 * the number of samples to be applied before autotuning begins
 * @member {Number} samplesToBuffer
 */
GetConfigResponse.prototype.samplesToBuffer = undefined;

