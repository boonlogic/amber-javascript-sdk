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

/**
 * The MagicNumber model module.
 * @module model/MagicNumber
 * @version 1.0.3
 */
export class MagicNumber {
  /**
   * Constructs a new <code>MagicNumber</code>.
   * @alias module:model/MagicNumber
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MagicNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MagicNumber} obj Optional instance to populate.
   * @return {module:model/MagicNumber} The populated <code>MagicNumber</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MagicNumber();
    }
    return obj;
  }
}