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
 * The PostSensorResponse model module.
 * @module model/PostSensorResponse
 * @version 1.0.3
 */
export class PostSensorResponse {
  /**
   * Constructs a new <code>PostSensorResponse</code>.
   * @alias module:model/PostSensorResponse
   * @class
   * @param label {String} Additional label to be assigned for sensor
   * @param sensorId {String} Unique identifier for sensor
   */
  constructor(label, sensorId) {
    this.label = label;
    this.sensorId = sensorId;
  }

  /**
   * Constructs a <code>PostSensorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostSensorResponse} obj Optional instance to populate.
   * @return {module:model/PostSensorResponse} The populated <code>PostSensorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostSensorResponse();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('sensorId'))
        obj.sensorId = ApiClient.convertToType(data['sensorId'], 'String');
    }
    return obj;
  }
}

/**
 * Additional label to be assigned for sensor
 * @member {String} label
 */
PostSensorResponse.prototype.label = undefined;

/**
 * Unique identifier for sensor
 * @member {String} sensorId
 */
PostSensorResponse.prototype.sensorId = undefined;

