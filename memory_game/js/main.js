// alert("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
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
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
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
