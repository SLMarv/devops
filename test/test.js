var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First term', function() {
  it('should return 1 for first term', function() {
      assert.strictEqual(main.factorial(0), 1);
    });
});