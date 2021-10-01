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
    instance = new AmberApiServer.MStreamingParameters();
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

  describe('MStreamingParameters', function() {
    it('should create an instance of MStreamingParameters', function() {
      // uncomment below and update the code to test MStreamingParameters
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be.a(AmberApiServer.MStreamingParameters);
    });

    it('should have the property versionNumber (base name: "VersionNumber")', function() {
      // uncomment below and update the code to test the property versionNumber
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mEnableAutotuning (base name: "m_EnableAutotuning")', function() {
      // uncomment below and update the code to test the property mEnableAutotuning
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mSamplesToBufferForAutotuning (base name: "m_SamplesToBufferForAutotuning")', function() {
      // uncomment below and update the code to test the property mSamplesToBufferForAutotuning
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mGraduationAtRateNumerator (base name: "m_GraduationAtRateNumerator")', function() {
      // uncomment below and update the code to test the property mGraduationAtRateNumerator
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mGraduationAtRateDenominator (base name: "m_GraduationAtRateDenominator")', function() {
      // uncomment below and update the code to test the property mGraduationAtRateDenominator
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mGraduateAtMaxClusters (base name: "m_GraduateAtMaxClusters")', function() {
      // uncomment below and update the code to test the property mGraduateAtMaxClusters
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

    it('should have the property mGraduateAtMaxSamples (base name: "m_GraduateAtMaxSamples")', function() {
      // uncomment below and update the code to test the property mGraduateAtMaxSamples
      //var instane = new AmberApiServer.MStreamingParameters();
      //expect(instance).to.be();
    });

  });

}));
