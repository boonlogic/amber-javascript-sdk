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
    describe('StreamingEndpointUsageInfo', function() {
      beforeEach(function() {
        instance = new AmberApiServer.StreamingEndpointUsageInfo();
      });

      it('should create an instance of StreamingEndpointUsageInfo', function() {
        // TODO: update the code to test StreamingEndpointUsageInfo
        expect(instance).to.be.a(AmberApiServer.StreamingEndpointUsageInfo);
      });

      it('should have the property callsTotal (base name: "callsTotal")', function() {
        // TODO: update the code to test the property callsTotal
        expect(instance).to.have.property('callsTotal');
        // expect(instance.callsTotal).to.be(expectedValueLiteral);
      });

      it('should have the property callsThisPeriod (base name: "callsThisPeriod")', function() {
        // TODO: update the code to test the property callsThisPeriod
        expect(instance).to.have.property('callsThisPeriod');
        // expect(instance.callsThisPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property samplesTotal (base name: "samplesTotal")', function() {
        // TODO: update the code to test the property samplesTotal
        expect(instance).to.have.property('samplesTotal');
        // expect(instance.samplesTotal).to.be(expectedValueLiteral);
      });

      it('should have the property samplesThisPeriod (base name: "samplesThisPeriod")', function() {
        // TODO: update the code to test the property samplesThisPeriod
        expect(instance).to.have.property('samplesThisPeriod');
        // expect(instance.samplesThisPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property lastCalled (base name: "lastCalled")', function() {
        // TODO: update the code to test the property lastCalled
        expect(instance).to.have.property('lastCalled');
        // expect(instance.lastCalled).to.be(expectedValueLiteral);
      });

    });
  });

}));
