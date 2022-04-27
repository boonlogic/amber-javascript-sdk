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

  describe('(package)', function() {
    describe('MStreamingParameters', function() {
      beforeEach(function() {
        instance = new AmberApiServer.MStreamingParameters();
      });

      it('should create an instance of MStreamingParameters', function() {
        // TODO: update the code to test MStreamingParameters
        expect(instance).to.be.a(AmberApiServer.MStreamingParameters);
      });

      it('should have the property versionNumber (base name: "VersionNumber")', function() {
        // TODO: update the code to test the property versionNumber
        expect(instance).to.have.property('versionNumber');
        // expect(instance.versionNumber).to.be(expectedValueLiteral);
      });

      it('should have the property mEnableAutotuning (base name: "m_EnableAutotuning")', function() {
        // TODO: update the code to test the property mEnableAutotuning
        expect(instance).to.have.property('mEnableAutotuning');
        // expect(instance.mEnableAutotuning).to.be(expectedValueLiteral);
      });

      it('should have the property mSamplesToBufferForAutotuning (base name: "m_SamplesToBufferForAutotuning")', function() {
        // TODO: update the code to test the property mSamplesToBufferForAutotuning
        expect(instance).to.have.property('mSamplesToBufferForAutotuning');
        // expect(instance.mSamplesToBufferForAutotuning).to.be(expectedValueLiteral);
      });

      it('should have the property mGraduationAtRateNumerator (base name: "m_GraduationAtRateNumerator")', function() {
        // TODO: update the code to test the property mGraduationAtRateNumerator
        expect(instance).to.have.property('mGraduationAtRateNumerator');
        // expect(instance.mGraduationAtRateNumerator).to.be(expectedValueLiteral);
      });

      it('should have the property mGraduationAtRateDenominator (base name: "m_GraduationAtRateDenominator")', function() {
        // TODO: update the code to test the property mGraduationAtRateDenominator
        expect(instance).to.have.property('mGraduationAtRateDenominator');
        // expect(instance.mGraduationAtRateDenominator).to.be(expectedValueLiteral);
      });

      it('should have the property mGraduateAtMaxClusters (base name: "m_GraduateAtMaxClusters")', function() {
        // TODO: update the code to test the property mGraduateAtMaxClusters
        expect(instance).to.have.property('mGraduateAtMaxClusters');
        // expect(instance.mGraduateAtMaxClusters).to.be(expectedValueLiteral);
      });

      it('should have the property mGraduateAtMaxSamples (base name: "m_GraduateAtMaxSamples")', function() {
        // TODO: update the code to test the property mGraduateAtMaxSamples
        expect(instance).to.have.property('mGraduateAtMaxSamples');
        // expect(instance.mGraduateAtMaxSamples).to.be(expectedValueLiteral);
      });

    });
  });

}));
