var expect = require('chai').expect;
var { Blurpaderp } = require('../dist/blurpaderp.js');

describe('Blurpaderp test', () => {
  it('generate should return id with length >= 9', () => {
    for (let i = 0; i < 1000; i++) {
      var result = Blurpaderp.generate();
      expect(result).to.be.length.above(8, `${result} length: ${result.length} <= 8`);
    }
  });
  it('generate should return id with length <= 15', () => {
    for (let i = 0; i < 1000; i++) {
      var result = Blurpaderp.generate();
      expect(result).to.be.length.below(16, `${result} length: ${result.length} >= 16`);
    }
  });
});