/**
 * Amber API Server
 * Boon Logic Amber API Server
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The PostPretrainRequest model module.
* @module model/PostPretrainRequest
* @version 1.0.3
*/
export default class PostPretrainRequest {
    /**
    * Constructs a new <code>PostPretrainRequest</code>.
    * @alias module:model/PostPretrainRequest
    * @class
    * @param data {String} 
    */

    constructor(data) {
        
        
        this['data'] = data;
        
    }

    /**
    * Constructs a <code>PostPretrainRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostPretrainRequest} obj Optional instance to populate.
    * @return {module:model/PostPretrainRequest} The populated <code>PostPretrainRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostPretrainRequest();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('autotuneConfig')) {
                obj['autotuneConfig'] = ApiClient.convertToType(data['autotuneConfig'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} data
    */
    'data' = undefined;
    /**
    * @member {Boolean} autotuneConfig
    * @default true
    */
    'autotuneConfig' = true;




}
