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
 * The GetPretrainResponse model module.
 * @module model/GetPretrainResponse
 * @version 1.0.3
 */
export class GetPretrainResponse {
  /**
   * Constructs a new <code>GetPretrainResponse</code>.
   * @alias module:model/GetPretrainResponse
   * @class
   * @param state {String} state of pretraining, None, Pretraining, Pretrained, Error
   */
  constructor(state) {
    this.state = state;
  }

  /**
   * Constructs a <code>GetPretrainResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPretrainResponse} obj Optional instance to populate.
   * @return {module:model/GetPretrainResponse} The populated <code>GetPretrainResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetPretrainResponse();
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }
}

/**
 * state of pretraining, None, Pretraining, Pretrained, Error
 * @member {String} state
 */
GetPretrainResponse.prototype.state = undefined;

/**
 * latest pretrain message
 * @member {String} message
 */
GetPretrainResponse.prototype.message = undefined;

