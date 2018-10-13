const gameBoard = document.querySelector('.game-board-section');
const startResetBtn = document.querySelector('.start-reset-btn');
const catOne = document.querySelector('.category-1');
const catTwo = document.querySelector('.category-2');
const catThree = document.querySelector('.category-3');
const catFour = document.querySelector('.category-4');
const catOneCluesNodes = document.querySelectorAll('.one');
const catTwoCluesNodes = document.querySelectorAll('.two');
const catThreeCluesNodes = document.querySelectorAll('.three');
const catFourCluesNodes = document.querySelectorAll('.four');



gameBoardDelegator = (e) => {
  return e.target.classList.contains('category-1-1') ? console.log('cat1 q1') :
  e.target.classList.contains('category-2-1') ? console.log('cat2 q1') :
  e.target.classList.contains('category-3-1') ? console.log('cat3 q1') :
  e.target.classList.contains('category-4-1') ? console.log('cat4 q1') :
  e.target.classList.contains('category-1-2') ? console.log('cat1 q2') :
  e.target.classList.contains('category-2-2') ? console.log('cat2 q2') :
  e.target.classList.contains('category-3-2') ? console.log('cat3 q2') :
  e.target.classList.contains('category-4-2') ? console.log('cat4 q2') :
  e.target.classList.contains('category-1-3') ? console.log('cat1 q3') :
  e.target.classList.contains('category-2-3') ? console.log('cat2 q3') :
  e.target.classList.contains('category-3-3') ? console.log('cat3 q3') :
  e.target.classList.contains('category-4-3') ? console.log('cat4 q3') :
  e.target.classList.contains('category-1-4') ? console.log('cat1 q4') :
  e.target.classList.contains('category-2-4') ? console.log('cat2 q4') :
  e.target.classList.contains('category-3-4') ? console.log('cat3 q4') :
  e.target.classList.contains('category-4-4') ? console.log('cat4 q4') :
  e.target.classList.contains('category-1-5') ? console.log('cat1 q5') :
  e.target.classList.contains('category-2-5') ? console.log('cat2 q5') :
  e.target.classList.contains('category-3-5') ? console.log('cat3 q5') :
  e.target.classList.contains('category-4-5') ? console.log('cat4 q5') :
  console.log('error');
};

let newGame;
let playerOne;
let playerTwo;
let playerThree;
let question;
let dailyDouble;

startResetBtn.addEventListener('click', function() {
  newGame = new Game(1, ['playerOne', 'playerTwo', 'playerThree'], 'running');
  newGame.startGame();
})

quitBtn.addEventListener('click', function() {
  if (confirm('Are you sure you want to exit the game?')) {
    window.close();
  } else {
    return;
  };
});




// let playerOneName = prompt('enter player one');
// let playerTwoName = prompt('enter player two');
// let playerThreeName = prompt('enter player three');

