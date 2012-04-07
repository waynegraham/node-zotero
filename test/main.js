var should = require('should'),
  zotero = require('../lib/main');

describe('zotero', function() {
  describe('with no arguments', function() {
    describe('returns an empy array', function() {
      var result = zotero();
      result.should.eql([]);
    });
  });
});
