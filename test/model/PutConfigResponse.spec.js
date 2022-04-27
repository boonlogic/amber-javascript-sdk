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
    describe('PutConfigResponse', function() {
      beforeEach(function() {
        instance = new AmberApiServer.PutConfigResponse();
      });

      it('should create an instance of PutConfigResponse', function() {
        // TODO: update the code to test PutConfigResponse
        expect(instance).to.be.a(AmberApiServer.PutConfigResponse);
      });

      it('should have the property features (base name: "features")', function() {
        // TODO: update the code to test the property features
        expect(instance).to.have.property('features');
        // expect(instance.features).to.be(expectedValueLiteral);
      });

      it('should have the property streaming (base name: "streaming")', function() {
        // TODO: update the code to test the property streaming
        expect(instance).to.have.property('streaming');
        // expect(instance.streaming).to.be(expectedValueLiteral);
      });

    });
  });

}));
