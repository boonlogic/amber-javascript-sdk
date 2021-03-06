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
* The PostStreamRequest model module.
* @module model/PostStreamRequest
* @version 1.0.3
*/
export default class PostStreamRequest {
    /**
    * Constructs a new <code>PostStreamRequest</code>.
    * @alias module:model/PostStreamRequest
    * @class
    * @param data {String} 
    */

    constructor(data) {
        
        
        this['data'] = data;
        
    }

    /**
    * Constructs a <code>PostStreamRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostStreamRequest} obj Optional instance to populate.
    * @return {module:model/PostStreamRequest} The populated <code>PostStreamRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStreamRequest();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} data
    */
    'data' = undefined;




}
