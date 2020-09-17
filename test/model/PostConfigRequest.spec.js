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
    instance = new AmberApiServer.PostConfigRequest();
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

  describe('PostConfigRequest', function() {
    it('should create an instance of PostConfigRequest', function() {
      // uncomment below and update the code to test PostConfigRequest
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be.a(AmberApiServer.PostConfigRequest);
    });

    it('should have the property featureCount (base name: "featureCount")', function() {
      // uncomment below and update the code to test the property featureCount
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property learningMaxClusters (base name: "learningMaxClusters")', function() {
      // uncomment below and update the code to test the property learningMaxClusters
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property learningMaxSamples (base name: "learningMaxSamples")', function() {
      // uncomment below and update the code to test the property learningMaxSamples
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property learningRateDenominator (base name: "learningRateDenominator")', function() {
      // uncomment below and update the code to test the property learningRateDenominator
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property learningRateNumerator (base name: "learningRateNumerator")', function() {
      // uncomment below and update the code to test the property learningRateNumerator
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property samplesToBuffer (base name: "samplesToBuffer")', function() {
      // uncomment below and update the code to test the property samplesToBuffer
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamingWindowSize (base name: "streamingWindowSize")', function() {
      // uncomment below and update the code to test the property streamingWindowSize
      //var instane = new AmberApiServer.PostConfigRequest();
      //expect(instance).to.be();
    });

  });

}));
