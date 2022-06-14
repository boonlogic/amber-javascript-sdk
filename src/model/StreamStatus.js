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

/**
 * The StreamStatus model module.
 * @module model/StreamStatus
 * @version 1.0.3
 */
export class StreamStatus {
  /**
   * Constructs a new <code>StreamStatus</code>.
   * @alias module:model/StreamStatus
   * @class
   * @param state {String} state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error, Autotuning retry
   * @param message {String} message to accompany the current state
   * @param progress {Number} completion percentage (applies to Buffering and Autotuning states)
   * @param clusterCount {Number} current cluster count (applies to Learning and Monitoring states)
   * @param retryCount {Number} number of restarts that have happened during autotuning
   * @param streamingWindowSize {Number} the current streaming window size that is being used
   * @param totalInferences {Number} inferences since the most recent restart
   */
  constructor(state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences) {
    this.state = state;
    this.message = message;
    this.progress = progress;
    this.clusterCount = clusterCount;
    this.retryCount = retryCount;
    this.streamingWindowSize = streamingWindowSize;
    this.totalInferences = totalInferences;
  }

  /**
   * Constructs a <code>StreamStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamStatus} obj Optional instance to populate.
   * @return {module:model/StreamStatus} The populated <code>StreamStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StreamStatus();
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('progress'))
        obj.progress = ApiClient.convertToType(data['progress'], 'Number');
      if (data.hasOwnProperty('clusterCount'))
        obj.clusterCount = ApiClient.convertToType(data['clusterCount'], 'Number');
      if (data.hasOwnProperty('retryCount'))
        obj.retryCount = ApiClient.convertToType(data['retryCount'], 'Number');
      if (data.hasOwnProperty('streamingWindowSize'))
        obj.streamingWindowSize = ApiClient.convertToType(data['streamingWindowSize'], 'Number');
      if (data.hasOwnProperty('totalInferences'))
        obj.totalInferences = ApiClient.convertToType(data['totalInferences'], 'Number');
    }
    return obj;
  }
}

/**
 * state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error, Autotuning retry
 * @member {String} state
 */
StreamStatus.prototype.state = undefined;

/**
 * message to accompany the current state
 * @member {String} message
 */
StreamStatus.prototype.message = undefined;

/**
 * completion percentage (applies to Buffering and Autotuning states)
 * @member {Number} progress
 */
StreamStatus.prototype.progress = undefined;

/**
 * current cluster count (applies to Learning and Monitoring states)
 * @member {Number} clusterCount
 */
StreamStatus.prototype.clusterCount = undefined;

/**
 * number of restarts that have happened during autotuning
 * @member {Number} retryCount
 */
StreamStatus.prototype.retryCount = undefined;

/**
 * the current streaming window size that is being used
 * @member {Number} streamingWindowSize
 */
StreamStatus.prototype.streamingWindowSize = undefined;

/**
 * inferences since the most recent restart
 * @member {Number} totalInferences
 */
StreamStatus.prototype.totalInferences = undefined;

