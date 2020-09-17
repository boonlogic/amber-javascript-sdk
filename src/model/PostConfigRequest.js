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
* The PostConfigRequest model module.
* @module model/PostConfigRequest
* @version 1.0.3
*/
export default class PostConfigRequest {
    /**
    * Constructs a new <code>PostConfigRequest</code>.
    * @alias module:model/PostConfigRequest
    * @class
    * @param featureCount {Number} number of features per sample
    * @param streamingWindowSize {Number} streaming window size
    */

    constructor(featureCount, streamingWindowSize) {
        
        
        this['featureCount'] = featureCount;
        this['streamingWindowSize'] = streamingWindowSize;
        
    }

    /**
    * Constructs a <code>PostConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostConfigRequest} obj Optional instance to populate.
    * @return {module:model/PostConfigRequest} The populated <code>PostConfigRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostConfigRequest();
                        
            
            if (data.hasOwnProperty('featureCount')) {
                obj['featureCount'] = ApiClient.convertToType(data['featureCount'], 'Number');
            }
            if (data.hasOwnProperty('streamingWindowSize')) {
                obj['streamingWindowSize'] = ApiClient.convertToType(data['streamingWindowSize'], 'Number');
            }
            if (data.hasOwnProperty('samplesToBuffer')) {
                obj['samplesToBuffer'] = ApiClient.convertToType(data['samplesToBuffer'], 'Number');
            }
            if (data.hasOwnProperty('learningRateNumerator')) {
                obj['learningRateNumerator'] = ApiClient.convertToType(data['learningRateNumerator'], 'Number');
            }
            if (data.hasOwnProperty('learningRateDenominator')) {
                obj['learningRateDenominator'] = ApiClient.convertToType(data['learningRateDenominator'], 'Number');
            }
            if (data.hasOwnProperty('learningMaxClusters')) {
                obj['learningMaxClusters'] = ApiClient.convertToType(data['learningMaxClusters'], 'Number');
            }
            if (data.hasOwnProperty('learningMaxSamples')) {
                obj['learningMaxSamples'] = ApiClient.convertToType(data['learningMaxSamples'], 'Number');
            }
        }
        return obj;
    }

    /**
    * number of features per sample
    * @member {Number} featureCount
    */
    'featureCount' = undefined;
    /**
    * streaming window size
    * @member {Number} streamingWindowSize
    */
    'streamingWindowSize' = undefined;
    /**
    * the number of samples to be applied before autotuning begins
    * @member {Number} samplesToBuffer
    */
    'samplesToBuffer' = undefined;
    /**
    * enables graduation requirements for learning
    * @member {Number} learningRateNumerator
    */
    'learningRateNumerator' = undefined;
    /**
    * enables graduation requirements for learning
    * @member {Number} learningRateDenominator
    */
    'learningRateDenominator' = undefined;
    /**
    * learning graduation requirement for stopping learning upon reaching this cluster count
    * @member {Number} learningMaxClusters
    */
    'learningMaxClusters' = undefined;
    /**
    * learning graduation requirement for stopping learning after acquiring this many samples
    * @member {Number} learningMaxSamples
    */
    'learningMaxSamples' = undefined;




}