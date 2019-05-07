const chai = require('chai');

chai.should();

describe('API Service', () => {
  describe('/books', () => {
    context('has been implemented', () => {
      it('tests should be working correctly', () => {
        (2).should.equal(2)
      });
    });
  });
});
