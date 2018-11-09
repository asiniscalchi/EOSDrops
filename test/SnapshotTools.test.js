const SnapshotTools = require('../services/SnapshotTools');
const assert = require('assert');

describe('parsing csv', function() {
  describe('one line', () => {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

