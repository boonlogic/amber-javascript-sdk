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
 * The PostPretrainResponse model module.
 * @module model/PostPretrainResponse
 * @version 1.0.3
 */
export class PostPretrainResponse {
  /**
   * Constructs a new <code>PostPretrainResponse</code>.
   * @alias module:model/PostPretrainResponse
   * @class
   * @param state {String} state of pretraining, one of: Chunking, Pretraining, Pretrained, Error
   */
  constructor(state) {
    this.state = state;
  }

  /**
   * Constructs a <code>PostPretrainResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostPretrainResponse} obj Optional instance to populate.
   * @return {module:model/PostPretrainResponse} The populated <code>PostPretrainResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostPretrainResponse();
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('amberTransaction'))
        obj.amberTransaction = ApiClient.convertToType(data['amberTransaction'], 'String');
      if (data.hasOwnProperty('amberChunk'))
        obj.amberChunk = ApiClient.convertToType(data['amberChunk'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }
}

/**
 * state of pretraining, one of: Chunking, Pretraining, Pretrained, Error
 * @member {String} state
 */
PostPretrainResponse.prototype.state = undefined;

/**
 * @member {String} amberTransaction
 */
PostPretrainResponse.prototype.amberTransaction = undefined;

/**
 * @member {String} amberChunk
 */
PostPretrainResponse.prototype.amberChunk = undefined;

/**
 * latest pretrain message
 * @member {String} message
 */
PostPretrainResponse.prototype.message = undefined;

