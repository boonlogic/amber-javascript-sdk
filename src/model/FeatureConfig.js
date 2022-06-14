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

/**
 * The FeatureConfig model module.
 * @module model/FeatureConfig
 * @version 1.0.3
 */
export class FeatureConfig {
  /**
   * Constructs a new <code>FeatureConfig</code>.
   * @alias module:model/FeatureConfig
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FeatureConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureConfig} obj Optional instance to populate.
   * @return {module:model/FeatureConfig} The populated <code>FeatureConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FeatureConfig();
      if (data.hasOwnProperty('maxVal'))
        obj.maxVal = ApiClient.convertToType(data['maxVal'], 'Number');
      if (data.hasOwnProperty('minVal'))
        obj.minVal = ApiClient.convertToType(data['minVal'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('submitRule'))
        obj.submitRule = ApiClient.convertToType(data['submitRule'], 'String');
    }
    return obj;
  }
}

/**
 * corresponding maximum value
 * @member {Number} maxVal
 */
FeatureConfig.prototype.maxVal = undefined;

/**
 * the value that should be considered the minimum value for this feature. This can be set to a value larger than the actual min if you want to treat all value less than that as the same (for instance, to keep a noise spike from having undue influence in the clustering
 * @member {Number} minVal
 */
FeatureConfig.prototype.minVal = undefined;

/**
 * corresponding weight
 * @member {Number} weight
 */
FeatureConfig.prototype.weight = undefined;

/**
 * label associated with feature
 * @member {String} label
 */
FeatureConfig.prototype.label = undefined;

/**
 * Allowed values for the <code>submitRule</code> property.
 * @enum {String}
 * @readonly
 */
FeatureConfig.SubmitRuleEnum = {
  /**
   * value: "submit"
   * @const
   */
  submit: "submit",

  /**
   * value: "nosubmit"
   * @const
   */
  nosubmit: "nosubmit"
};
/**
 * policy for submitting sensor fusion vector when this feature is updated. One of \"submit\", \"nosubmit\" (defaults to \"submit\")
 * @member {module:model/FeatureConfig.SubmitRuleEnum} submitRule
 */
FeatureConfig.prototype.submitRule = undefined;

