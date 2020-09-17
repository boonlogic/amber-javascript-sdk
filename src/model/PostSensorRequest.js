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
* The PostSensorRequest model module.
* @module model/PostSensorRequest
* @version 1.0.3
*/
export default class PostSensorRequest {
    /**
    * Constructs a new <code>PostSensorRequest</code>.
    * @alias module:model/PostSensorRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PostSensorRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostSensorRequest} obj Optional instance to populate.
    * @return {module:model/PostSensorRequest} The populated <code>PostSensorRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSensorRequest();
                        
            
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }

    /**
    * Additional label to be assigned for sensor
    * @member {String} label
    */
    'label' = undefined;




}