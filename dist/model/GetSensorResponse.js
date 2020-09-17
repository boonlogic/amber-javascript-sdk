'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SensorUsageInfo = require('./SensorUsageInfo');

var _SensorUsageInfo2 = _interopRequireDefault(_SensorUsageInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The GetSensorResponse model module.
* @module model/GetSensorResponse
* @version 1.0.3
*/
var GetSensorResponse = function () {
    /**
    * Constructs a new <code>GetSensorResponse</code>.
    * @alias module:model/GetSensorResponse
    * @class
    */

    function GetSensorResponse() {
        _classCallCheck(this, GetSensorResponse);

        this['label'] = undefined;
        this['sensorId'] = undefined;
        this['tenantId'] = undefined;
        this['usageInfo'] = undefined;
    }

    /**
    * Constructs a <code>GetSensorResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetSensorResponse} obj Optional instance to populate.
    * @return {module:model/GetSensorResponse} The populated <code>GetSensorResponse</code> instance.
    */


    _createClass(GetSensorResponse, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GetSensorResponse();

                if (data.hasOwnProperty('label')) {
                    obj['label'] = _ApiClient2.default.convertToType(data['label'], 'String');
                }
                if (data.hasOwnProperty('sensorId')) {
                    obj['sensorId'] = _ApiClient2.default.convertToType(data['sensorId'], 'String');
                }
                if (data.hasOwnProperty('tenantId')) {
                    obj['tenantId'] = _ApiClient2.default.convertToType(data['tenantId'], 'String');
                }
                if (data.hasOwnProperty('usageInfo')) {
                    obj['usageInfo'] = _SensorUsageInfo2.default.constructFromObject(data['usageInfo']);
                }
            }
            return obj;
        }

        /**
        * Additional label to be assigned for sensor
        * @member {String} label
        */

        /**
        * Unique identifier for sensor
        * @member {String} sensorId
        */

        /**
        * Tenant identifier of caller
        * @member {String} tenantId
        */

        /**
        * @member {module:model/SensorUsageInfo} usageInfo
        */

    }]);

    return GetSensorResponse;
}();

exports.default = GetSensorResponse;