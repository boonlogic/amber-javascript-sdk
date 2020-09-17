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
import EndpointUsageInfo from './EndpointUsageInfo';
import StreamingEndpointUsageInfo from './StreamingEndpointUsageInfo';

/**
* The SensorUsageInfo model module.
* @module model/SensorUsageInfo
* @version 1.0.3
*/
export default class SensorUsageInfo {
    /**
    * Constructs a new <code>SensorUsageInfo</code>.
    * @alias module:model/SensorUsageInfo
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SensorUsageInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SensorUsageInfo} obj Optional instance to populate.
    * @return {module:model/SensorUsageInfo} The populated <code>SensorUsageInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SensorUsageInfo();
                        
            
            if (data.hasOwnProperty('postConfig')) {
                obj['postConfig'] = EndpointUsageInfo.constructFromObject(data['postConfig']);
            }
            if (data.hasOwnProperty('postStream')) {
                obj['postStream'] = StreamingEndpointUsageInfo.constructFromObject(data['postStream']);
            }
            if (data.hasOwnProperty('putSensor')) {
                obj['putSensor'] = EndpointUsageInfo.constructFromObject(data['putSensor']);
            }
            if (data.hasOwnProperty('getSensor')) {
                obj['getSensor'] = EndpointUsageInfo.constructFromObject(data['getSensor']);
            }
            if (data.hasOwnProperty('getConfig')) {
                obj['getConfig'] = EndpointUsageInfo.constructFromObject(data['getConfig']);
            }
            if (data.hasOwnProperty('getStatus')) {
                obj['getStatus'] = EndpointUsageInfo.constructFromObject(data['getStatus']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/EndpointUsageInfo} postConfig
    */
    'postConfig' = undefined;
    /**
    * @member {module:model/StreamingEndpointUsageInfo} postStream
    */
    'postStream' = undefined;
    /**
    * @member {module:model/EndpointUsageInfo} putSensor
    */
    'putSensor' = undefined;
    /**
    * @member {module:model/EndpointUsageInfo} getSensor
    */
    'getSensor' = undefined;
    /**
    * @member {module:model/EndpointUsageInfo} getConfig
    */
    'getConfig' = undefined;
    /**
    * @member {module:model/EndpointUsageInfo} getStatus
    */
    'getStatus' = undefined;




}