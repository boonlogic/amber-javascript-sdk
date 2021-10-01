/*
 * Amber API Server
 * Boon Logic Amber API Server
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {EndpointUsageInfo} from './EndpointUsageInfo';
import {StreamingEndpointUsageInfo} from './StreamingEndpointUsageInfo';

/**
 * The SensorUsageInfo model module.
 * @module model/SensorUsageInfo
 * @version 1.0.3
 */
export class SensorUsageInfo {
  /**
   * Constructs a new <code>SensorUsageInfo</code>.
   * @alias module:model/SensorUsageInfo
   * @class
   * @param postConfig {module:model/EndpointUsageInfo} 
   * @param postStream {module:model/StreamingEndpointUsageInfo} 
   * @param putSensor {module:model/EndpointUsageInfo} 
   * @param getSensor {module:model/EndpointUsageInfo} 
   * @param getConfig {module:model/EndpointUsageInfo} 
   * @param getStatus {module:model/EndpointUsageInfo} 
   * @param getRootCause {module:model/EndpointUsageInfo} 
   * @param getAmberSummary {module:model/EndpointUsageInfo} 
   * @param postPretrain {module:model/EndpointUsageInfo} 
   * @param getPretrain {module:model/EndpointUsageInfo} 
   */
  constructor(postConfig, postStream, putSensor, getSensor, getConfig, getStatus, getRootCause, getAmberSummary, postPretrain, getPretrain) {
    this.postConfig = postConfig;
    this.postStream = postStream;
    this.putSensor = putSensor;
    this.getSensor = getSensor;
    this.getConfig = getConfig;
    this.getStatus = getStatus;
    this.getRootCause = getRootCause;
    this.getAmberSummary = getAmberSummary;
    this.postPretrain = postPretrain;
    this.getPretrain = getPretrain;
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
      if (data.hasOwnProperty('postConfig'))
        obj.postConfig = EndpointUsageInfo.constructFromObject(data['postConfig']);
      if (data.hasOwnProperty('postStream'))
        obj.postStream = StreamingEndpointUsageInfo.constructFromObject(data['postStream']);
      if (data.hasOwnProperty('putSensor'))
        obj.putSensor = EndpointUsageInfo.constructFromObject(data['putSensor']);
      if (data.hasOwnProperty('getSensor'))
        obj.getSensor = EndpointUsageInfo.constructFromObject(data['getSensor']);
      if (data.hasOwnProperty('getConfig'))
        obj.getConfig = EndpointUsageInfo.constructFromObject(data['getConfig']);
      if (data.hasOwnProperty('getStatus'))
        obj.getStatus = EndpointUsageInfo.constructFromObject(data['getStatus']);
      if (data.hasOwnProperty('getRootCause'))
        obj.getRootCause = EndpointUsageInfo.constructFromObject(data['getRootCause']);
      if (data.hasOwnProperty('getAmberSummary'))
        obj.getAmberSummary = EndpointUsageInfo.constructFromObject(data['getAmberSummary']);
      if (data.hasOwnProperty('postPretrain'))
        obj.postPretrain = EndpointUsageInfo.constructFromObject(data['postPretrain']);
      if (data.hasOwnProperty('getPretrain'))
        obj.getPretrain = EndpointUsageInfo.constructFromObject(data['getPretrain']);
    }
    return obj;
  }
}

/**
 * @member {module:model/EndpointUsageInfo} postConfig
 */
SensorUsageInfo.prototype.postConfig = undefined;

/**
 * @member {module:model/StreamingEndpointUsageInfo} postStream
 */
SensorUsageInfo.prototype.postStream = undefined;

/**
 * @member {module:model/EndpointUsageInfo} putSensor
 */
SensorUsageInfo.prototype.putSensor = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getSensor
 */
SensorUsageInfo.prototype.getSensor = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getConfig
 */
SensorUsageInfo.prototype.getConfig = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getStatus
 */
SensorUsageInfo.prototype.getStatus = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getRootCause
 */
SensorUsageInfo.prototype.getRootCause = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getAmberSummary
 */
SensorUsageInfo.prototype.getAmberSummary = undefined;

/**
 * @member {module:model/EndpointUsageInfo} postPretrain
 */
SensorUsageInfo.prototype.postPretrain = undefined;

/**
 * @member {module:model/EndpointUsageInfo} getPretrain
 */
SensorUsageInfo.prototype.getPretrain = undefined;

