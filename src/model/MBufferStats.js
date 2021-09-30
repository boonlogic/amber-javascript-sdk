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
import VersionNumber from './VersionNumber';

/**
* The MBufferStats model module.
* @module model/MBufferStats
* @version 1.0.3
*/
export default class MBufferStats {
    /**
    * Constructs a new <code>MBufferStats</code>.
    * @alias module:model/MBufferStats
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>MBufferStats</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MBufferStats} obj Optional instance to populate.
    * @return {module:model/MBufferStats} The populated <code>MBufferStats</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MBufferStats();
                        
            
            if (data.hasOwnProperty('VersionNumber')) {
                obj['VersionNumber'] = VersionNumber.constructFromObject(data['VersionNumber']);
            }
            if (data.hasOwnProperty('TotalBytesWritten')) {
                obj['TotalBytesWritten'] = ApiClient.convertToType(data['TotalBytesWritten'], 'Number');
            }
            if (data.hasOwnProperty('TotalBytesProcessed')) {
                obj['TotalBytesProcessed'] = ApiClient.convertToType(data['TotalBytesProcessed'], 'Number');
            }
            if (data.hasOwnProperty('LoadBufferLength')) {
                obj['LoadBufferLength'] = ApiClient.convertToType(data['LoadBufferLength'], 'Number');
            }
            if (data.hasOwnProperty('LoadBufferCapacity')) {
                obj['LoadBufferCapacity'] = ApiClient.convertToType(data['LoadBufferCapacity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/VersionNumber} VersionNumber
    */
    'VersionNumber' = undefined;
    /**
    * @member {Number} TotalBytesWritten
    */
    'TotalBytesWritten' = undefined;
    /**
    * @member {Number} TotalBytesProcessed
    */
    'TotalBytesProcessed' = undefined;
    /**
    * @member {Number} LoadBufferLength
    */
    'LoadBufferLength' = undefined;
    /**
    * @member {Number} LoadBufferCapacity
    */
    'LoadBufferCapacity' = undefined;




}
