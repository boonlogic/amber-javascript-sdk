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
 * The PutSensorRequest model module.
 * @module model/PutSensorRequest
 * @version 1.0.3
 */
export class PutSensorRequest {
  /**
   * Constructs a new <code>PutSensorRequest</code>.
   * @alias module:model/PutSensorRequest
   * @class
   * @param label {String} Label to be updated for sensor
   */
  constructor(label) {
    this.label = label;
  }

  /**
   * Constructs a <code>PutSensorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSensorRequest} obj Optional instance to populate.
   * @return {module:model/PutSensorRequest} The populated <code>PutSensorRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutSensorRequest();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
    }
    return obj;
  }
}

/**
 * Label to be updated for sensor
 * @member {String} label
 */
PutSensorRequest.prototype.label = undefined;

