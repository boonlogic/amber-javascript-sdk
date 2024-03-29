/*
 * Amber API Server
 * Boon Logic Amber API Server
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {StreamStatus} from './StreamStatus';

/**
 * The PostOutageResponse model module.
 * @module model/PostOutageResponse
 * @version 1.0.3
 */
export class PostOutageResponse extends StreamStatus {
  /**
   * Constructs a new <code>PostOutageResponse</code>.
   * @alias module:model/PostOutageResponse
   * @class
   * @extends module:model/StreamStatus
   * @param state {} state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error
   * @param message {} message to accompany the current state
   * @param progress {} completion percentage (applies to Buffering and Autotuning states)
   * @param clusterCount {} current cluster count (applies to Learning and Monitoring states)
   * @param retryCount {} number of restarts that have happened during autotuning
   * @param streamingWindowSize {} the current streaming window size that is being used
   * @param totalInferences {} inferences since the most recent restart
   * @param lastModified {} Unix time stamp of the last posted stream data
   * @param lastModifiedDelta {} number of seconds since the last posted stream data
   */
  constructor(state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences, lastModified, lastModifiedDelta) {
    super(state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences, lastModified, lastModifiedDelta);
  }

  /**
   * Constructs a <code>PostOutageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostOutageResponse} obj Optional instance to populate.
   * @return {module:model/PostOutageResponse} The populated <code>PostOutageResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostOutageResponse();
      StreamStatus.constructFromObject(data, obj);
    }
    return obj;
  }
}
