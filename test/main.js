var should = require('should'),
zotero = require('../lib/main');

describe('zotero', function() {
  describe('with an empy array argument', function() {
    it('calls the callback with an empty array', function(done) {
      var result = zotero([], function(result) {
        result.should.eql([]);
        done();
      });
    });
  });
});
