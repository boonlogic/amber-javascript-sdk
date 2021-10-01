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
import {FeatureConfig} from './FeatureConfig';
import {VersionNumber} from './VersionNumber';

/**
 * The MNanoConfig model module.
 * @module model/MNanoConfig
 * @version 1.0.3
 */
export class MNanoConfig {
  /**
   * Constructs a new <code>MNanoConfig</code>.
   * @alias module:model/MNanoConfig
   * @class
   * @param mPercentVariation {Number} the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering
   * @param numOfFeatures {Number} 
   * @param features {Array.<module:model/FeatureConfig>} 
   */
  constructor(mPercentVariation, numOfFeatures, features) {
    this.mPercentVariation = mPercentVariation;
    this.numOfFeatures = numOfFeatures;
    this.features = features;
  }

  /**
   * Constructs a <code>MNanoConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MNanoConfig} obj Optional instance to populate.
   * @return {module:model/MNanoConfig} The populated <code>MNanoConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MNanoConfig();
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
      if (data.hasOwnProperty('m_NumericFormat'))
        obj.mNumericFormat = ApiClient.convertToType(data['m_NumericFormat'], 'Number');
      if (data.hasOwnProperty('m_Accuracy'))
        obj.mAccuracy = ApiClient.convertToType(data['m_Accuracy'], 'Number');
      if (data.hasOwnProperty('m_PercentVariation'))
        obj.mPercentVariation = ApiClient.convertToType(data['m_PercentVariation'], 'Number');
      if (data.hasOwnProperty('NumOfFeatures'))
        obj.numOfFeatures = ApiClient.convertToType(data['NumOfFeatures'], 'Number');
      if (data.hasOwnProperty('Features'))
        obj.features = ApiClient.convertToType(data['Features'], [FeatureConfig]);
    }
    return obj;
  }
}

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MNanoConfig.prototype.versionNumber = undefined;

/**
 * @member {Number} mNumericFormat
 */
MNanoConfig.prototype.mNumericFormat = undefined;

/**
 * @member {Number} mAccuracy
 */
MNanoConfig.prototype.mAccuracy = undefined;

/**
 * the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering
 * @member {Number} mPercentVariation
 */
MNanoConfig.prototype.mPercentVariation = undefined;

/**
 * @member {Number} numOfFeatures
 */
MNanoConfig.prototype.numOfFeatures = undefined;

/**
 * @member {Array.<module:model/FeatureConfig>} features
 */
MNanoConfig.prototype.features = undefined;

