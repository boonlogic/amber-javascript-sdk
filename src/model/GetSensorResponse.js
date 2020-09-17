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
import SensorUsageInfo from './SensorUsageInfo';

/**
* The GetSensorResponse model module.
* @module model/GetSensorResponse
* @version 1.0.3
*/
export default class GetSensorResponse {
    /**
    * Constructs a new <code>GetSensorResponse</code>.
    * @alias module:model/GetSensorResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetSensorResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetSensorResponse} obj Optional instance to populate.
    * @return {module:model/GetSensorResponse} The populated <code>GetSensorResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSensorResponse();
                        
            
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('sensorId')) {
                obj['sensorId'] = ApiClient.convertToType(data['sensorId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('usageInfo')) {
                obj['usageInfo'] = SensorUsageInfo.constructFromObject(data['usageInfo']);
            }
        }
        return obj;
    }

    /**
    * Additional label to be assigned for sensor
    * @member {String} label
    */
    'label' = undefined;
    /**
    * Unique identifier for sensor
    * @member {String} sensorId
    */
    'sensorId' = undefined;
    /**
    * Tenant identifier of caller
    * @member {String} tenantId
    */
    'tenantId' = undefined;
    /**
    * @member {module:model/SensorUsageInfo} usageInfo
    */
    'usageInfo' = undefined;




}