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
 * The MRecentSamples model module.
 * @module model/MRecentSamples
 * @version 1.0.3
 */
export class MRecentSamples {
  /**
   * Constructs a new <code>MRecentSamples</code>.
   * @alias module:model/MRecentSamples
   * @class
   * @param mValues {Array.<Array.<Number>>} 
   */
  constructor(mValues) {
    this.mValues = mValues;
  }

  /**
   * Constructs a <code>MRecentSamples</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MRecentSamples} obj Optional instance to populate.
   * @return {module:model/MRecentSamples} The populated <code>MRecentSamples</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MRecentSamples();
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
      if (data.hasOwnProperty('m_Values'))
        obj.mValues = ApiClient.convertToType(data['m_Values'], [['Number']]);
    }
    return obj;
  }
}

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MRecentSamples.prototype.versionNumber = undefined;

/**
 * @member {Array.<Array.<Number>>} mValues
 */
MRecentSamples.prototype.mValues = undefined;
