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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmberApiServer);
  }
}(this, function(expect, AmberApiServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmberApiServer.GetSensorResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetSensorResponse', function() {
    it('should create an instance of GetSensorResponse', function() {
      // uncomment below and update the code to test GetSensorResponse
      //var instane = new AmberApiServer.GetSensorResponse();
      //expect(instance).to.be.a(AmberApiServer.GetSensorResponse);
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new AmberApiServer.GetSensorResponse();
      //expect(instance).to.be();
    });

    it('should have the property sensorId (base name: "sensorId")', function() {
      // uncomment below and update the code to test the property sensorId
      //var instane = new AmberApiServer.GetSensorResponse();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new AmberApiServer.GetSensorResponse();
      //expect(instance).to.be();
    });

    it('should have the property usageInfo (base name: "usageInfo")', function() {
      // uncomment below and update the code to test the property usageInfo
      //var instane = new AmberApiServer.GetSensorResponse();
      //expect(instance).to.be();
    });

  });

}));
