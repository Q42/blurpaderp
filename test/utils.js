var expect = require('chai').expect;
var Utils = require('../dist/utils.js').default;

describe('Utils.between function test', () => {
  it('should always return 1 or 2', () => {
    for (let i = 0; i < 1000; i++) {
      var result = Utils.between(1, 2);
      expect(result).to.be.oneOf([1,2])
    }
  });
  it('should be 50/50', () => {
    var results = {};
    for (let i = 0; i < 1000; i++) {
      var result = Utils.between(1, 2);
      results[result] = results[result] ? results[result] + 1 : 1
    }
    expect(results['1']).to.be.above(100);
    expect(results['2']).to.be.above(100);
    expect(results['1'] + results['2']).to.be.eq(1000);
  });
});

describe('Utils.draw function test', () => {
  it('should return null appropriately', () => {
    var result = Utils.draw([]);
    expect(result).to.equal(null);
  });
});