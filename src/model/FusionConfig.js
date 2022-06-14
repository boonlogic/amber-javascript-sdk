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
 * The FusionConfig model module.
 * @module model/FusionConfig
 * @version 1.0.3
 */
export class FusionConfig {
  /**
   * Constructs a new <code>FusionConfig</code>.
   * @alias module:model/FusionConfig
   * @class
   * @param label {String} label associated with feature
   */
  constructor(label) {
    this.label = label;
  }

  /**
   * Constructs a <code>FusionConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FusionConfig} obj Optional instance to populate.
   * @return {module:model/FusionConfig} The populated <code>FusionConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FusionConfig();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('submitRule'))
        obj.submitRule = ApiClient.convertToType(data['submitRule'], 'String');
    }
    return obj;
  }
}

/**
 * label associated with feature
 * @member {String} label
 */
FusionConfig.prototype.label = undefined;

/**
 * Allowed values for the <code>submitRule</code> property.
 * @enum {String}
 * @readonly
 */
FusionConfig.SubmitRuleEnum = {
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
 * @member {module:model/FusionConfig.SubmitRuleEnum} submitRule
 */
FusionConfig.prototype.submitRule = undefined;

