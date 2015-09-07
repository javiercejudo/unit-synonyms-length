/*jshint node:true, mocha:true */

'use strict';

require('should');

var lenght = require('../src/');
var units = lenght.units;
var synonyms = lenght.synonyms;

describe('lenght units synonyms', function() {
  it('should be an objecct', function() {
    ({}.toString.call(synonyms)).should.equal('[object Object]')
  });

  it('should include synonyms for supported units only', function() {
    var unitsWithSynonyms = {};

    Object.keys(synonyms).forEach(function(unit) {
      unitsWithSynonyms[synonyms[unit]] = true;
    });

    unitsWithSynonyms.should.have.keys(units);
  });

  it('should have identity synonyms', function() {
    units.every(function(unit) {
      return synonyms[unit] === unit;
    }).should.be.exactly(true);
  });
});
