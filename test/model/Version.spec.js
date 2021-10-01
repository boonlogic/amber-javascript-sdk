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
    instance = new AmberApiServer.Version();
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

  describe('Version', function() {
    it('should create an instance of Version', function() {
      // uncomment below and update the code to test Version
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be.a(AmberApiServer.Version);
    });

    it('should have the property release (base name: "release")', function() {
      // uncomment below and update the code to test the property release
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "api-version")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property builder (base name: "builder")', function() {
      // uncomment below and update the code to test the property builder
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property expertApi (base name: "expert-api")', function() {
      // uncomment below and update the code to test the property expertApi
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property expertCommon (base name: "expert-common")', function() {
      // uncomment below and update the code to test the property expertCommon
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property nanoSecure (base name: "nano-secure")', function() {
      // uncomment below and update the code to test the property nanoSecure
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

    it('should have the property swaggerUi (base name: "swagger-ui")', function() {
      // uncomment below and update the code to test the property swaggerUi
      //var instane = new AmberApiServer.Version();
      //expect(instance).to.be();
    });

  });

}));