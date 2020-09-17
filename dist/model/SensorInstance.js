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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SensorInstance model module.
* @module model/SensorInstance
* @version 1.0.3
*/
var SensorInstance = function () {
    /**
    * Constructs a new <code>SensorInstance</code>.
    * @alias module:model/SensorInstance
    * @class
    */

    function SensorInstance() {
        _classCallCheck(this, SensorInstance);

        this['label'] = undefined;
        this['sensorId'] = undefined;
        this['tenantId'] = undefined;
    }

    /**
    * Constructs a <code>SensorInstance</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SensorInstance} obj Optional instance to populate.
    * @return {module:model/SensorInstance} The populated <code>SensorInstance</code> instance.
    */


    _createClass(SensorInstance, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SensorInstance();

                if (data.hasOwnProperty('label')) {
                    obj['label'] = _ApiClient2.default.convertToType(data['label'], 'String');
                }
                if (data.hasOwnProperty('sensorId')) {
                    obj['sensorId'] = _ApiClient2.default.convertToType(data['sensorId'], 'String');
                }
                if (data.hasOwnProperty('tenantId')) {
                    obj['tenantId'] = _ApiClient2.default.convertToType(data['tenantId'], 'String');
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

    }]);

    return SensorInstance;
}();

exports.default = SensorInstance;