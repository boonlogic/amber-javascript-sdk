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
    describe('PostFeatureConfig', function() {
      beforeEach(function() {
        instance = new AmberApiServer.PostFeatureConfig();
      });

      it('should create an instance of PostFeatureConfig', function() {
        // TODO: update the code to test PostFeatureConfig
        expect(instance).to.be.a(AmberApiServer.PostFeatureConfig);
      });

      it('should have the property minVal (base name: "minVal")', function() {
        // TODO: update the code to test the property minVal
        expect(instance).to.have.property('minVal');
        // expect(instance.minVal).to.be(expectedValueLiteral);
      });

      it('should have the property maxVal (base name: "maxVal")', function() {
        // TODO: update the code to test the property maxVal
        expect(instance).to.have.property('maxVal');
        // expect(instance.maxVal).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

    });
  });

}));
