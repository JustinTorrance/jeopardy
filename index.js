const gameBoard = document.querySelector('.game-board-section');
const startResetBtn = document.querySelector('.start-reset-btn');
const quitBtn = document.querySelector('.quit-btn');
startResetBtn.addEventListener('click', playAudioIntro);

function playAudioIntro(e) {
  e.preventDefault();
  document.querySelector('.audio-intro').play();
}

const catOne = document.querySelector('.category-1');
const catTwo = document.querySelector('.category-2');
const catThree = document.querySelector('.category-3');
const catFour = document.querySelector('.category-4');
const catOneCluesNodes = document.querySelectorAll('.one');
const catTwoCluesNodes = document.querySelectorAll('.two');
const catThreeCluesNodes = document.querySelectorAll('.three');
const catFourCluesNodes = document.querySelectorAll('.four');
const playerOneName = document.querySelector('.player-one-name');
const playerTwoName = document.querySelector('.player-two-name');
const playerThreeName = document.querySelector('.player-three-name');
const playerOneScore = document.querySelector('.player-one-score');
const playerTwoScore = document.querySelector('.player-two-score');
const playerThreeScore = document.querySelector('.player-three-score');


gameBoardDelegator = (e) => {
  return e.target.classList.contains('category-1-1') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-2-1') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-3-1') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-4-1') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-1-2') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-2-2') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-3-2') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-4-2') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-1-3') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-2-3') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-3-3') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-4-3') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-1-4') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-2-4') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-3-4') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-4-4') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-1-5') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-2-5') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-3-5') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  e.target.classList.contains('category-4-5') ? e.target.childNodes[0].remove() + e.target.childNodes[0].classList.remove('hidden') :
  console.log('error in gameBoardDelegator index.js');
};

gameBoard.addEventListener('click', gameBoardDelegator);

let init;
let playerOne;
let playerTwo;
let playerThree;
let question;
let dailyDouble;

gameBoard.addEventListener('click', gameBoardDelegator);


quitBtn.addEventListener('click', function() {
  if (confirm('Are you sure you want to exit the game?')) {
    window.close();
  } else {
    return;
  };

  newGame = new Game(1, [], 'running');
  newGame.init();
});

const categoryCluesArr = (categoryNum) => {
  let pointVal = 100;
  let cluesArr = data.clues.reduce((arr, currentClue) => {
    if (currentClue.categoryId === categoryNum && currentClue.pointValue === pointVal) {
      arr.push(currentClue);
      pointVal += 100;
    };
      return arr;
    }, []).map((currentClue) => {
      return currentClue.question;
    });
  return cluesArr;
};

let catOneClues = categoryCluesArr(1);
let catTwoClues = categoryCluesArr(2);
let catThreeClues = categoryCluesArr(3);
let catFourClues = categoryCluesArr(4);








// let playerOneName = prompt('enter player one');
// let playerTwoName = prompt('enter player two');
// let playerThreeName = prompt('enter player three');

