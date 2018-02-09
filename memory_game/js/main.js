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
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function() {
  // this.setAttribute('src', cards.cardImage);

  if (cardsInPlay[0] === cardsInPlay[1]){
      alert("Holy Schnike's! You found a match!")
    } else {
      alert("Sorry, try again girlfriend!")
    }
};

var flipCard = function(){
  var cardID = this.getAttribute("data-id");
  var card = cards[cardID];
  this.setAttribute('src', cards[cardID].cardImage);
  cardsInPlay.push(card.rank);
  if (cardsInPlay.length == 2) {
    checkForMatch();
  }
};

var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  var addToBoard = document.getElementById('game-board');
  addToBoard.appendChild(cardElement);
  }
};

createBoard();
