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
 * The MayContainNullsArray model module.
 * @module model/MayContainNullsArray
 * @version 1.0.3
 */
export class MayContainNullsArray extends Array {
  /**
   * Constructs a new <code>MayContainNullsArray</code>.
   * @alias module:model/MayContainNullsArray
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>MayContainNullsArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MayContainNullsArray} obj Optional instance to populate.
   * @return {module:model/MayContainNullsArray} The populated <code>MayContainNullsArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MayContainNullsArray();
      ApiClient.constructFromObject(data, obj, 'Object');
    }
    return obj;
  }
}