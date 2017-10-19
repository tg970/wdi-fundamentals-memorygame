var cards = [
{
	rank: "queen",
	suit:"hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit:"diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit:"hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit:"diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];
var userScore = 0;

var stopPlay = function() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementById(i).removeEventListener('click',flipCard);
	}	
};

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			document.getElementById("output").innerHTML = 'You found a match!';
			userScore +=1;
			document.getElementById("score").innerHTML = 'Score: ' + userScore;
		} else {
			document.getElementById("output").innerHTML = 'Sorry, try again.';
		}
		stopPlay();
	};
};

var flipCard = function() {
	var cardId = this.getAttribute('id') 
	cardsInPlay.push(cards[cardId].rank);
	document.getElementById(cardId).setAttribute('src',cards[cardId].cardImage);
	checkForMatch(cardId);
};


var cardsIndex = [0, 1, 2, 3];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    };
};

var createBoard = function() {
	shuffle(cardsIndex);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('id',cardsIndex[i]);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

var reset = function() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementById(i).setAttribute('src','images/back.png')
		document.getElementById(i).addEventListener('click',flipCard);
	}
	document.getElementById("output").innerHTML = ".";
	return cardsInPlay = [];
};
