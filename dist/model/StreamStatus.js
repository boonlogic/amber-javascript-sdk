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
* The StreamStatus model module.
* @module model/StreamStatus
* @version 1.0.3
*/
var StreamStatus = function () {
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

    function StreamStatus(state, message, progress, clusterCount, retryCount, streamingWindowSize, totalInferences) {
        _classCallCheck(this, StreamStatus);

        this['state'] = undefined;
        this['message'] = undefined;
        this['progress'] = undefined;
        this['clusterCount'] = undefined;
        this['retryCount'] = undefined;
        this['streamingWindowSize'] = undefined;
        this['totalInferences'] = undefined;


        this['state'] = state;
        this['message'] = message;
        this['progress'] = progress;
        this['clusterCount'] = clusterCount;
        this['retryCount'] = retryCount;
        this['streamingWindowSize'] = streamingWindowSize;
        this['totalInferences'] = totalInferences;
    }

    /**
    * Constructs a <code>StreamStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StreamStatus} obj Optional instance to populate.
    * @return {module:model/StreamStatus} The populated <code>StreamStatus</code> instance.
    */


    _createClass(StreamStatus, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new StreamStatus();

                if (data.hasOwnProperty('state')) {
                    obj['state'] = _ApiClient2.default.convertToType(data['state'], 'String');
                }
                if (data.hasOwnProperty('message')) {
                    obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
                }
                if (data.hasOwnProperty('progress')) {
                    obj['progress'] = _ApiClient2.default.convertToType(data['progress'], 'Number');
                }
                if (data.hasOwnProperty('clusterCount')) {
                    obj['clusterCount'] = _ApiClient2.default.convertToType(data['clusterCount'], 'Number');
                }
                if (data.hasOwnProperty('retryCount')) {
                    obj['retryCount'] = _ApiClient2.default.convertToType(data['retryCount'], 'Number');
                }
                if (data.hasOwnProperty('streamingWindowSize')) {
                    obj['streamingWindowSize'] = _ApiClient2.default.convertToType(data['streamingWindowSize'], 'Number');
                }
                if (data.hasOwnProperty('totalInferences')) {
                    obj['totalInferences'] = _ApiClient2.default.convertToType(data['totalInferences'], 'Number');
                }
            }
            return obj;
        }

        /**
        * state of the sensor, states will be prefixed with a state variable  followed by a colon followed by a message indicating progress.  Possible state variables  are: Not streaming, Buffering, Autotuning, Learning, Learning Complete, Monitoring,  Streaming error,  Autotuning error, Autotuning retry
        * @member {String} state
        */

        /**
        * message to accompany the current state
        * @member {String} message
        */

        /**
        * completion percentage (applies to Buffering and Autotuning states)
        * @member {Number} progress
        */

        /**
        * current cluster count (applies to Learning and Monitoring states)
        * @member {Number} clusterCount
        */

        /**
        * number of restarts that have happened during autotuning
        * @member {Number} retryCount
        */

        /**
        * the current streaming window size that is being used
        * @member {Number} streamingWindowSize
        */

        /**
        * inferences since the most recent restart
        * @member {Number} totalInferences
        */

    }]);

    return StreamStatus;
}();

exports.default = StreamStatus;