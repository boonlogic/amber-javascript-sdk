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
    describe('PostConfigResponse', function() {
      beforeEach(function() {
        instance = new AmberApiServer.PostConfigResponse();
      });

      it('should create an instance of PostConfigResponse', function() {
        // TODO: update the code to test PostConfigResponse
        expect(instance).to.be.a(AmberApiServer.PostConfigResponse);
      });

      it('should have the property featureCount (base name: "featureCount")', function() {
        // TODO: update the code to test the property featureCount
        expect(instance).to.have.property('featureCount');
        // expect(instance.featureCount).to.be(expectedValueLiteral);
      });

      it('should have the property streamingWindowSize (base name: "streamingWindowSize")', function() {
        // TODO: update the code to test the property streamingWindowSize
        expect(instance).to.have.property('streamingWindowSize');
        // expect(instance.streamingWindowSize).to.be(expectedValueLiteral);
      });

      it('should have the property features (base name: "features")', function() {
        // TODO: update the code to test the property features
        expect(instance).to.have.property('features');
        // expect(instance.features).to.be(expectedValueLiteral);
      });

      it('should have the property samplesToBuffer (base name: "samplesToBuffer")', function() {
        // TODO: update the code to test the property samplesToBuffer
        expect(instance).to.have.property('samplesToBuffer');
        // expect(instance.samplesToBuffer).to.be(expectedValueLiteral);
      });

    });
  });

}));
