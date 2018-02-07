// alert("Up and running!");
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function() {
  if ((cardsInPlay.length===2) && (cardsInPlay[0]===cardsInPlay[1])) {
      alert("Holy Schnike's! You found a match!")
    }
      else {
      alert("Sorry, try again girlfriend!")
    }
}
var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  // var cardOne = cards[0];
  // cardsInPlay.push(cardOne);
  // console.log("user flipped a queen!");

  // var cardTwo = cards[2];
  // cardsInPlay.push(cardTwo);
  // console.log("User flipped a king!");


}
flipCard(0);
flipCard(2);
