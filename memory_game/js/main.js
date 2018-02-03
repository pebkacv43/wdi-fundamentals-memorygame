// alert("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped a queen!");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped a king!");

if ((cardsInPlay.length===2) && (cardsInPlay[0]===cardsInPlay[1])) {
    alert("Holy Schnike's! You found a match!")
  }
    else {
    alert("Sorry, try again girlfriend!")
  }
