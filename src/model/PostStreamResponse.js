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
import Float32Array from './Float32Array';
import StreamStatus from './StreamStatus';
import Uint16Array from './Uint16Array';
import Uint32Array from './Uint32Array';

/**
* The PostStreamResponse model module.
* @module model/PostStreamResponse
* @version 1.0.3
*/
export default class PostStreamResponse {
    /**
    * Constructs a new <code>PostStreamResponse</code>.
    * @alias module:model/PostStreamResponse
    * @class
    * @extends module:model/StreamStatus
    * @param state {} state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error, Autotuning retry
    * @param message {} message to accompany the current state
    * @param progress {} completion percentage (applies to Buffering and Autotuning states)
    * @param clusterCount {} current cluster count (applies to Learning and Monitoring states)
    * @param retryCount {} number of restarts that have happened during autotuning
    * @param streamingWindowSize {} the current streaming window size that is being used
    * @param totalInferences {} inferences since the most recent restart
    * @param SI {} 
    * @param AD {} 
    * @param AH {} 
    * @param AM {} 
    * @param AW {} 
    * @param ID {} 
    */

    constructor(state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences, SI, AD, AH, AM, AW, ID) {
        StreamStatus.call(this, state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences);
        
        this['SI'] = SI;
        this['AD'] = AD;
        this['AH'] = AH;
        this['AM'] = AM;
        this['AW'] = AW;
        this['ID'] = ID;
        
    }

    /**
    * Constructs a <code>PostStreamResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostStreamResponse} obj Optional instance to populate.
    * @return {module:model/PostStreamResponse} The populated <code>PostStreamResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStreamResponse();
            
            StreamStatus.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('SI')) {
                obj['SI'] = Uint16Array.constructFromObject(data['SI']);
            }
            if (data.hasOwnProperty('AD')) {
                obj['AD'] = Uint16Array.constructFromObject(data['AD']);
            }
            if (data.hasOwnProperty('AH')) {
                obj['AH'] = Uint16Array.constructFromObject(data['AH']);
            }
            if (data.hasOwnProperty('AM')) {
                obj['AM'] = Float32Array.constructFromObject(data['AM']);
            }
            if (data.hasOwnProperty('AW')) {
                obj['AW'] = Uint16Array.constructFromObject(data['AW']);
            }
            if (data.hasOwnProperty('ID')) {
                obj['ID'] = Uint32Array.constructFromObject(data['ID']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Uint16Array} SI
    */
    'SI' = undefined;
    /**
    * @member {module:model/Uint16Array} AD
    */
    'AD' = undefined;
    /**
    * @member {module:model/Uint16Array} AH
    */
    'AH' = undefined;
    /**
    * @member {module:model/Float32Array} AM
    */
    'AM' = undefined;
    /**
    * @member {module:model/Uint16Array} AW
    */
    'AW' = undefined;
    /**
    * @member {module:model/Uint32Array} ID
    */
    'ID' = undefined;




}
