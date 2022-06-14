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
 * The Int32Array model module.
 * @module model/Int32Array
 * @version 1.0.3
 */
export class Int32Array extends Array {
  /**
   * Constructs a new <code>Int32Array</code>.
   * @alias module:model/Int32Array
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Int32Array</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Int32Array} obj Optional instance to populate.
   * @return {module:model/Int32Array} The populated <code>Int32Array</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Int32Array();
      ApiClient.constructFromObject(data, obj, 'Number');
    }
    return obj;
  }
}
