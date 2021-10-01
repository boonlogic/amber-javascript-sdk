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
import {ApiClient} from '../ApiClient';
import {VersionNumber} from './VersionNumber';

/**
 * The MNCP model module.
 * @module model/MNCP
 * @version 1.0.3
 */
export class MNCP {
  /**
   * Constructs a new <code>MNCP</code>.
   * @alias module:model/MNCP
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MNCP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MNCP} obj Optional instance to populate.
   * @return {module:model/MNCP} The populated <code>MNCP</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MNCP();
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
      if (data.hasOwnProperty('NumOfFeatures'))
        obj.numOfFeatures = ApiClient.convertToType(data['NumOfFeatures'], 'Number');
      if (data.hasOwnProperty('m_NumericFormat'))
        obj.mNumericFormat = ApiClient.convertToType(data['m_NumericFormat'], 'Number');
      if (data.hasOwnProperty('m_PercentVariation'))
        obj.mPercentVariation = ApiClient.convertToType(data['m_PercentVariation'], 'Number');
      if (data.hasOwnProperty('m_Accuracy'))
        obj.mAccuracy = ApiClient.convertToType(data['m_Accuracy'], 'Number');
      if (data.hasOwnProperty('m_StreamingWindowSize'))
        obj.mStreamingWindowSize = ApiClient.convertToType(data['m_StreamingWindowSize'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MNCP.prototype.versionNumber = undefined;

/**
 * @member {Number} numOfFeatures
 */
MNCP.prototype.numOfFeatures = undefined;

/**
 * @member {Number} mNumericFormat
 */
MNCP.prototype.mNumericFormat = undefined;

/**
 * @member {Number} mPercentVariation
 */
MNCP.prototype.mPercentVariation = undefined;

/**
 * @member {Number} mAccuracy
 */
MNCP.prototype.mAccuracy = undefined;

/**
 * @member {Number} mStreamingWindowSize
 */
MNCP.prototype.mStreamingWindowSize = undefined;
