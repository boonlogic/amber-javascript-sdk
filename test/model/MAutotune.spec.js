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
    instance = new AmberApiServer.MAutotune();
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

  describe('MAutotune', function() {
    it('should create an instance of MAutotune', function() {
      // uncomment below and update the code to test MAutotune
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be.a(AmberApiServer.MAutotune);
    });

    it('should have the property versionNumber (base name: "VersionNumber")', function() {
      // uncomment below and update the code to test the property versionNumber
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mAutotuningInProgress (base name: "m_AutotuningInProgress")', function() {
      // uncomment below and update the code to test the property mAutotuningInProgress
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mPercentComplete (base name: "m_PercentComplete")', function() {
      // uncomment below and update the code to test the property mPercentComplete
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mAutotuningSucceeded (base name: "m_AutotuningSucceeded")', function() {
      // uncomment below and update the code to test the property mAutotuningSucceeded
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mNumPatternsToAutotune (base name: "m_NumPatternsToAutotune")', function() {
      // uncomment below and update the code to test the property mNumPatternsToAutotune
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mErrorStringBuffer (base name: "m_ErrorStringBuffer")', function() {
      // uncomment below and update the code to test the property mErrorStringBuffer
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mFeaturesToTuneArray (base name: "m_FeaturesToTuneArray")', function() {
      // uncomment below and update the code to test the property mFeaturesToTuneArray
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mNCP (base name: "m_NCP")', function() {
      // uncomment below and update the code to test the property mNCP
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

    it('should have the property mAP (base name: "m_AP")', function() {
      // uncomment below and update the code to test the property mAP
      //var instane = new AmberApiServer.MAutotune();
      //expect(instance).to.be();
    });

  });

}));
