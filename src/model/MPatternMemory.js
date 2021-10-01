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
 * The MPatternMemory model module.
 * @module model/MPatternMemory
 * @version 1.0.3
 */
export class MPatternMemory {
  /**
   * Constructs a new <code>MPatternMemory</code>.
   * @alias module:model/MPatternMemory
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MPatternMemory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MPatternMemory} obj Optional instance to populate.
   * @return {module:model/MPatternMemory} The populated <code>MPatternMemory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MPatternMemory();
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
    }
    return obj;
  }
}

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MPatternMemory.prototype.versionNumber = undefined;
