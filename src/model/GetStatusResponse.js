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
import NumClusters from './NumClusters';
import PCA from './PCA';
import TotalInferences from './TotalInferences';
import Uint16Array from './Uint16Array';
import Uint64Array from './Uint64Array';

/**
* The GetStatusResponse model module.
* @module model/GetStatusResponse
* @version 1.0.3
*/
export default class GetStatusResponse {
    /**
    * Constructs a new <code>GetStatusResponse</code>.
    * @alias module:model/GetStatusResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetStatusResponse} obj Optional instance to populate.
    * @return {module:model/GetStatusResponse} The populated <code>GetStatusResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStatusResponse();
                        
            
            if (data.hasOwnProperty('anomalyIndexes')) {
                obj['anomalyIndexes'] = Uint16Array.constructFromObject(data['anomalyIndexes']);
            }
            if (data.hasOwnProperty('clusterGrowth')) {
                obj['clusterGrowth'] = Uint64Array.constructFromObject(data['clusterGrowth']);
            }
            if (data.hasOwnProperty('clusterSizes')) {
                obj['clusterSizes'] = Uint64Array.constructFromObject(data['clusterSizes']);
            }
            if (data.hasOwnProperty('distanceIndexes')) {
                obj['distanceIndexes'] = Uint16Array.constructFromObject(data['distanceIndexes']);
            }
            if (data.hasOwnProperty('frequencyIndexes')) {
                obj['frequencyIndexes'] = Uint16Array.constructFromObject(data['frequencyIndexes']);
            }
            if (data.hasOwnProperty('numClusters')) {
                obj['numClusters'] = NumClusters.constructFromObject(data['numClusters']);
            }
            if (data.hasOwnProperty('pca')) {
                obj['pca'] = PCA.constructFromObject(data['pca']);
            }
            if (data.hasOwnProperty('totalInferences')) {
                obj['totalInferences'] = TotalInferences.constructFromObject(data['totalInferences']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Uint16Array} anomalyIndexes
    */
    'anomalyIndexes' = undefined;
    /**
    * @member {module:model/Uint64Array} clusterGrowth
    */
    'clusterGrowth' = undefined;
    /**
    * @member {module:model/Uint64Array} clusterSizes
    */
    'clusterSizes' = undefined;
    /**
    * @member {module:model/Uint16Array} distanceIndexes
    */
    'distanceIndexes' = undefined;
    /**
    * @member {module:model/Uint16Array} frequencyIndexes
    */
    'frequencyIndexes' = undefined;
    /**
    * @member {module:model/NumClusters} numClusters
    */
    'numClusters' = undefined;
    /**
    * @member {module:model/PCA} pca
    */
    'pca' = undefined;
    /**
    * @member {module:model/TotalInferences} totalInferences
    */
    'totalInferences' = undefined;




}
