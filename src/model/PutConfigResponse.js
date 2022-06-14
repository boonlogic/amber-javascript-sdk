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
import {FusionConfig} from './FusionConfig';
import {StreamingParameters} from './StreamingParameters';

/**
 * The PutConfigResponse model module.
 * @module model/PutConfigResponse
 * @version 1.0.3
 */
export class PutConfigResponse {
  /**
   * Constructs a new <code>PutConfigResponse</code>.
   * @alias module:model/PutConfigResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutConfigResponse} obj Optional instance to populate.
   * @return {module:model/PutConfigResponse} The populated <code>PutConfigResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutConfigResponse();
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], [FusionConfig]);
      if (data.hasOwnProperty('streaming'))
        obj.streaming = StreamingParameters.constructFromObject(data['streaming']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FusionConfig>} features
 */
PutConfigResponse.prototype.features = undefined;

/**
 * @member {module:model/StreamingParameters} streaming
 */
PutConfigResponse.prototype.streaming = undefined;

