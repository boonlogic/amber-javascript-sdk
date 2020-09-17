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
import FeatureConfig from './FeatureConfig';
import PostConfigRequest from './PostConfigRequest';

/**
* The GetConfigResponse model module.
* @module model/GetConfigResponse
* @version 1.0.3
*/
export default class GetConfigResponse {
    /**
    * Constructs a new <code>GetConfigResponse</code>.
    * @alias module:model/GetConfigResponse
    * @class
    * @extends module:model/PostConfigRequest
    * @param featureCount {} number of features per sample
    * @param streamingWindowSize {} streaming window size
    */

    constructor(featureCount, streamingWindowSize) {
        PostConfigRequest.call(this, featureCount, streamingWindowSize);
        
        
    }

    /**
    * Constructs a <code>GetConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetConfigResponse} obj Optional instance to populate.
    * @return {module:model/GetConfigResponse} The populated <code>GetConfigResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetConfigResponse();
            
            PostConfigRequest.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [FeatureConfig]);
            }
            if (data.hasOwnProperty('percentVariation')) {
                obj['percentVariation'] = ApiClient.convertToType(data['percentVariation'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/FeatureConfig>} features
    */
    'features' = undefined;
    /**
    * the percent variation (for instance, 0.025 gives 2.5% variation) used for clustering
    * @member {Number} percentVariation
    */
    'percentVariation' = undefined;




}