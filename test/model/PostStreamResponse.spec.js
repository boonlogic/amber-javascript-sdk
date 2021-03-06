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
    instance = new AmberApiServer.PostStreamResponse();
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

  describe('PostStreamResponse', function() {
    it('should create an instance of PostStreamResponse', function() {
      // uncomment below and update the code to test PostStreamResponse
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be.a(AmberApiServer.PostStreamResponse);
    });

    it('should have the property AD (base name: "AD")', function() {
      // uncomment below and update the code to test the property AD
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

    it('should have the property AH (base name: "AH")', function() {
      // uncomment below and update the code to test the property AH
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

    it('should have the property AM (base name: "AM")', function() {
      // uncomment below and update the code to test the property AM
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

    it('should have the property AW (base name: "AW")', function() {
      // uncomment below and update the code to test the property AW
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

    it('should have the property SI (base name: "SI")', function() {
      // uncomment below and update the code to test the property SI
      //var instane = new AmberApiServer.PostStreamResponse();
      //expect(instance).to.be();
    });

  });

}));
