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
 * The EndpointUsageInfo model module.
 * @module model/EndpointUsageInfo
 * @version 1.0.3
 */
export class EndpointUsageInfo {
  /**
   * Constructs a new <code>EndpointUsageInfo</code>.
   * @alias module:model/EndpointUsageInfo
   * @class
   * @param callsTotal {Number} total number of calls to this endpoint
   * @param callsThisPeriod {Number} number of calls to this endpoint during the current billing period
   * @param lastCalled {String} ISO formatted time of last call to this endpoint
   */
  constructor(callsTotal, callsThisPeriod, lastCalled) {
    this.callsTotal = callsTotal;
    this.callsThisPeriod = callsThisPeriod;
    this.lastCalled = lastCalled;
  }

  /**
   * Constructs a <code>EndpointUsageInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EndpointUsageInfo} obj Optional instance to populate.
   * @return {module:model/EndpointUsageInfo} The populated <code>EndpointUsageInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EndpointUsageInfo();
      if (data.hasOwnProperty('callsTotal'))
        obj.callsTotal = ApiClient.convertToType(data['callsTotal'], 'Number');
      if (data.hasOwnProperty('callsThisPeriod'))
        obj.callsThisPeriod = ApiClient.convertToType(data['callsThisPeriod'], 'Number');
      if (data.hasOwnProperty('lastCalled'))
        obj.lastCalled = ApiClient.convertToType(data['lastCalled'], 'String');
    }
    return obj;
  }
}

/**
 * total number of calls to this endpoint
 * @member {Number} callsTotal
 */
EndpointUsageInfo.prototype.callsTotal = undefined;

/**
 * number of calls to this endpoint during the current billing period
 * @member {Number} callsThisPeriod
 */
EndpointUsageInfo.prototype.callsThisPeriod = undefined;

/**
 * ISO formatted time of last call to this endpoint
 * @member {String} lastCalled
 */
EndpointUsageInfo.prototype.lastCalled = undefined;

