document.addEventListener('DOMContentLoaded', () => {

    //Load Card Array
    const cardArray = [
        {name: 'Ace of Hearts', img: 'images/ace-hearts.jpg'},
        {name: 'Ace of Hearts', img: 'images/ace-hearts.jpg'},
        {name: 'Ace of Spades', img: 'images/ace-spades.jpg'},
        {name: 'Ace of Spades', img: 'images/ace-spades.jpg'},
        {name: 'King of Hearts', img: 'images/king-hearts.jpg'},
        {name: 'King of Hearts', img: 'images/king-hearts.jpg'},
        {name: 'King of Spades', img: 'images/king-spades.jpg'},
        {name: 'King of Spades', img: 'images/king-spades.jpg'},
        {name: 'Queen of Hearts', img: 'images/queen-hearts.jpg'},
        {name: 'Queen of Hearts', img: 'images/queen-hearts.jpg'},
        {name: 'Queen of Spades', img: 'images/queen-spades.jpg'},
        {name: 'Queen of Spades', img: 'images/queen-spades.jpg'},
        {name: 'Jack of Hearts', img: 'images/jack-hearts.jpg'},
        {name: 'Jack of Hearts', img: 'images/jack-hearts.jpg'},
        {name: 'Jack of Spades', img: 'images/jack-spades.jpg'},
        {name: 'Jack of Spades', img: 'images/jack-spades.jpg'},
    ];

    // Resets Timer on Startup
    zeros = [];
    resetTimer(zeros);
    second = 0;
    $('.timer').text(`${second}`)
    initTime();

    
    cardArray.sort(() => 0.5 - Math.random());

    const deck = document.querySelector('.deck');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Board Creation
    function createBoard(){
        for (let i =0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/cover.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', turncard);
            deck.appendChild(card);
        }
    }


  //matches?
  function checkForMatch(){
      var card = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      if (cardsChosen[0] === cardsChosen[1]){
          card[optionOneId].setAttribute('hidden',true);
          card[optionTwoId].setAttribute('hidden',true);
          cardsWon.push(cardsChosen);
      }else{
          card[optionOneId].setAttribute('src', 'images/cover.jpg');
          card[optionTwoId].setAttribute('src', 'images/cover.jpg');
        };
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length/2) {
        };
  };

  //flip card
  function turncard(){
      var cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2){
          setTimeout(checkForMatch, 500);
      };
  };

// Initiates the timer as soon as the game is loaded
function initTime() {
    zeros = setInterval(function () {
        $('.timer').text(`${second}`)
        second = second + 1
    }, 1000);
}

// Resets the timer when the game ends or is restarted
function resetTimer(timer) {
    if (timer) {
        clearInterval(timer);
    }
}
  createBoard();
});