const assert = require('chai').assert;
const Deck = require('../WarGame.js');
describe('Deck', function() {
  describe('#createCards()', function() {
    it('should return an array of 52 cards', function() {
      const deck = new Deck();
      const cards = deck.createCards();
      assert.isArray(cards);
      assert.lengthOf(cards, 52);
    });
  });
});

