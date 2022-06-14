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
import {MNanoBackend} from './MNanoBackend';
import {MNanoConfig} from './MNanoConfig';
import {MagicNumber} from './MagicNumber';
import {VersionNumber} from './VersionNumber';

/**
 * The MNano model module.
 * @module model/MNano
 * @version 1.0.3
 */
export class MNano {
  /**
   * Constructs a new <code>MNano</code>.
   * @alias module:model/MNano
   * @class
   * @param mNanoConfig {module:model/MNanoConfig} 
   */
  constructor(mNanoConfig) {
    this.mNanoConfig = mNanoConfig;
  }

  /**
   * Constructs a <code>MNano</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MNano} obj Optional instance to populate.
   * @return {module:model/MNano} The populated <code>MNano</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MNano();
      if (data.hasOwnProperty('m_NanoConfig'))
        obj.mNanoConfig = MNanoConfig.constructFromObject(data['m_NanoConfig']);
      if (data.hasOwnProperty('MagicNumber'))
        obj.magicNumber = MagicNumber.constructFromObject(data['MagicNumber']);
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
      if (data.hasOwnProperty('BackendVersion'))
        obj.backendVersion = ApiClient.convertToType(data['BackendVersion'], 'Number');
      if (data.hasOwnProperty('m_ErrorMsg'))
        obj.mErrorMsg = ApiClient.convertToType(data['m_ErrorMsg'], 'String');
      if (data.hasOwnProperty('m_NanoBackend'))
        obj.mNanoBackend = MNanoBackend.constructFromObject(data['m_NanoBackend']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MNanoConfig} mNanoConfig
 */
MNano.prototype.mNanoConfig = undefined;

/**
 * @member {module:model/MagicNumber} magicNumber
 */
MNano.prototype.magicNumber = undefined;

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MNano.prototype.versionNumber = undefined;

/**
 * @member {Number} backendVersion
 */
MNano.prototype.backendVersion = undefined;

/**
 * @member {String} mErrorMsg
 */
MNano.prototype.mErrorMsg = undefined;

/**
 * @member {module:model/MNanoBackend} mNanoBackend
 */
MNano.prototype.mNanoBackend = undefined;

