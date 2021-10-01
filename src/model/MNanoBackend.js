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
import {MPatternMemory} from './MPatternMemory';
import {VersionNumber} from './VersionNumber';

/**
 * The MNanoBackend model module.
 * @module model/MNanoBackend
 * @version 1.0.3
 */
export class MNanoBackend {
  /**
   * Constructs a new <code>MNanoBackend</code>.
   * @alias module:model/MNanoBackend
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MNanoBackend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MNanoBackend} obj Optional instance to populate.
   * @return {module:model/MNanoBackend} The populated <code>MNanoBackend</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MNanoBackend();
      if (data.hasOwnProperty('VersionNumber'))
        obj.versionNumber = VersionNumber.constructFromObject(data['VersionNumber']);
      if (data.hasOwnProperty('m_PatternMemory'))
        obj.mPatternMemory = MPatternMemory.constructFromObject(data['m_PatternMemory']);
      if (data.hasOwnProperty('m_InitComplete'))
        obj.mInitComplete = ApiClient.convertToType(data['m_InitComplete'], 'Boolean');
      if (data.hasOwnProperty('m_PatternLength'))
        obj.mPatternLength = ApiClient.convertToType(data['m_PatternLength'], 'Number');
      if (data.hasOwnProperty('m_LearningIsOn'))
        obj.mLearningIsOn = ApiClient.convertToType(data['m_LearningIsOn'], 'Boolean');
      if (data.hasOwnProperty('m_NumOfPatternsClustered'))
        obj.mNumOfPatternsClustered = ApiClient.convertToType(data['m_NumOfPatternsClustered'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/VersionNumber} versionNumber
 */
MNanoBackend.prototype.versionNumber = undefined;

/**
 * @member {module:model/MPatternMemory} mPatternMemory
 */
MNanoBackend.prototype.mPatternMemory = undefined;

/**
 * @member {Boolean} mInitComplete
 */
MNanoBackend.prototype.mInitComplete = undefined;

/**
 * @member {Number} mPatternLength
 */
MNanoBackend.prototype.mPatternLength = undefined;

/**
 * @member {Boolean} mLearningIsOn
 */
MNanoBackend.prototype.mLearningIsOn = undefined;

/**
 * @member {Number} mNumOfPatternsClustered
 */
MNanoBackend.prototype.mNumOfPatternsClustered = undefined;

