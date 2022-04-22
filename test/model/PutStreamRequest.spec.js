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
    describe('PutStreamRequest', function() {
      beforeEach(function() {
        instance = new AmberApiServer.PutStreamRequest();
      });

      it('should create an instance of PutStreamRequest', function() {
        // TODO: update the code to test PutStreamRequest
        expect(instance).to.be.a(AmberApiServer.PutStreamRequest);
      });

      it('should have the property vector (base name: "vector")', function() {
        // TODO: update the code to test the property vector
        expect(instance).to.have.property('vector');
        // expect(instance.vector).to.be(expectedValueLiteral);
      });

      it('should have the property submitRule (base name: "submitRule")', function() {
        // TODO: update the code to test the property submitRule
        expect(instance).to.have.property('submitRule');
        // expect(instance.submitRule).to.be(expectedValueLiteral);
      });

    });
  });

}));