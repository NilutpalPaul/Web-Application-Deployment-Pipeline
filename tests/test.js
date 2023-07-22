const assert = require('assert');
const { add } = require('../src/app');

describe('Math operations', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('should return 0 when adding 0 to any number', () => {
    assert.strictEqual(add(0, 10), 10);
    assert.strictEqual(add(0, -5), -5);
    assert.strictEqual(add(0, 0), 0);
  });
});
