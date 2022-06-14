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
 * The PostAuth2Request model module.
 * @module model/PostAuth2Request
 * @version 1.0.3
 */
export class PostAuth2Request {
  /**
   * Constructs a new <code>PostAuth2Request</code>.
   * @alias module:model/PostAuth2Request
   * @class
   * @param username {String} Username for authenticating
   * @param password {String} Password for authenticating
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * Constructs a <code>PostAuth2Request</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostAuth2Request} obj Optional instance to populate.
   * @return {module:model/PostAuth2Request} The populated <code>PostAuth2Request</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostAuth2Request();
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * Username for authenticating
 * @member {String} username
 */
PostAuth2Request.prototype.username = undefined;

/**
 * Password for authenticating
 * @member {String} password
 */
PostAuth2Request.prototype.password = undefined;

