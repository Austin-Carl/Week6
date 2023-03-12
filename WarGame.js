//create a deck class that contains the 52 cards
class Deck {
  ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
  rankNames = ["","","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  suits = ['♥', '♦', '♣', '♠'];
 createCards(){
  const cards =[];
  for (let rank of this.ranks){
    for(let suit of this.suits){
      cards.push(`${this.rankNames[rank]}${suit}`);
    }
  }
  return cards;
 }
  //Create a shuffle function to randomize the cards array
  shuffle() {
    const cards = this.createCards();
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.cards = cards;
  }
  //Split the cards in half
  createHands(){
    this.shuffle();
    let handOne = this.cards.splice(0, this.cards.length / 2)
    let handTwo = this.cards.splice(0)
    return [handOne, handTwo]
  }
  
}
module.exports = Deck;
 //Create the actual game
class Game {
  constructor (nameOne, nameTwo){
    this.first = nameOne;
    this.second = nameTwo;
  }
 //Deal cards out and play the game
  dealCards() {
    const deck = new Deck();
    const [playerOne, playerTwo] = deck.createHands();
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let result = '';
  //Base of the card comparison and score keeping
    for (let i = 0; i < playerOne.length; i++) {
      if (playerOne[i] > playerTwo[i]) {
        playerOneScore += 1;
        result = `${this.first} wins this round: ${playerOne[i]} beats ${playerTwo[i]}`;
      } else if (playerOne[i] < playerTwo[i]) {
        playerTwoScore += 1;
        result = `${this.second} wins this round: ${playerTwo[i]} beats ${playerOne[i]}`;
      } else {
        result = 'Tie';
      }
      console.log(result);
    }
    //End game messages
    if (playerOneScore > playerTwoScore) {
      console.log(`${this.first} wins the game!`);
    } else if (playerTwoScore > playerOneScore) {
      console.log(`${this.second} wins the game!`);
    } else {
      console.log(`It's a tie!`);
    }
    console.log(`${this.first}: ${playerOneScore} ${this.second}: ${playerTwoScore}`);
  }
}

  const game = new Game('Austin', 'Allyson');
  game.dealCards();

