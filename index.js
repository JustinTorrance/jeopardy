const gameBoard = document.querySelector('.game-board-section');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const submitBtn = document.querySelector('#user-submit-btn');
const hostPrompt = document.querySelector('.host-prompt');
const userInput = document.querySelector('#user-input');
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
const hostBtn = document.querySelector('.host-btn');

let playerOne;
let playerTwo;
let playerThree;
let newGame;
let question;
let dailyDouble;

startBtn.addEventListener('click', playAudioIntro);

function submitConditional(answer) {
  if (playerOne.active) {
    playerOne.submitAnswer(answer)
  } else if (playerTwo.active) {
    playerTwo.submitAnswer(answer)
  } else if (playerThree.active) {
    playerThree.submitAnswer(answer)
  }
}

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (hostPrompt.innerText.includes('Player One')) {
    playerOne = new Player(undefined, undefined, undefined, 1, userInput.value, true);
    newGame.players.push(playerOne);
    userInput.value = '';
    domUpdates.updateHostPrompt('Player Two, enter your name!');
  } else if (hostPrompt.innerText.includes('Player Two')) {
    playerTwo = new Player(undefined, undefined, undefined, 2, userInput.value);
    newGame.players.push(playerTwo);
    userInput.value = '';
    domUpdates.updateHostPrompt('Player Three, enter your name!');
  } else if (hostPrompt.innerText.includes('Player Three')) {
    playerThree = new Player(undefined, undefined, undefined, 3, userInput.value);
    userInput.value = '';
    newGame.players.push(playerThree);
    domUpdates.updateNamesAndScores()
    domUpdates.updateHostPrompt(`${playerOne.playerName}, pick a category dollar amount`);
  } else {
    submitConditional(userInput.value);
  }
})

function playAudioIntro(e) {
  e.preventDefault();
  document.querySelector('.audio-intro').play();
};

const gameBoardArray = ['category-1-1', 'category-1-2', 'category-1-3', 'category-1-4', 'category-1-5', 'category-2-1', 'category-2-2', 'category-2-3', 
'category-2-4', 'category-2-5', 'category-3-1', 'category-3-2', 'category-3-3', 'category-3-4', 'category-3-5', 'category-4-1', 'category-4-2', 
'category-4-3', 'category-4-4', 'category-4-5'];

questionsArray = ['question1', 'question2', 'question3', 'question4', 'question5',
'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12',
'question13', 'question14', 'question15', 'question16', 'question17', 'question18',
'question19', 'question20'];

gameBoardDelegator = (e) => {
  let selectedQuestion;
  questionsArray.forEach((currentQuestion) => {
    if (currentQuestion.question === e.target.childNodes[1].innerText) {
      selectedQuestion = currentQuestion;
      selectedQuestion.active = true;
    } else if (currentQuestion.question === e.target.childNodes[1].innerHTML) {
      selectedQuestion = currentQuestion;
      selectedQuestion.active = true;
    };
  });
  gameBoardArray.find((currentTD) => {
    if (e.target.classList.contains(currentTD)) {
      e.target.childNodes[0].remove();
      hostPrompt.innerHTML = e.target.innerHTML;
      hostPrompt.childNodes[0].classList.remove('hidden');
    };
  });
};

gameBoard.addEventListener('click', gameBoardDelegator);

function createClueArrays() {
  catOneClues = createClueArray(1);
  catTwoClues = createClueArray(2);
  catThreeClues = createClueArray(3);
  catFourClues = createClueArray(4);
}

const setCategories = () => {
  let categoriesArray = []
  Object.keys(data.categories).forEach((currentKey) => {
    if (!categoriesArray.includes(currentKey) && categoriesArray.length < 4) {
      categoriesArray.push(currentKey);
    }
  })
  return categoriesArray
}

let roundOneCategories = setCategories();

questionIndex = 0;
playerIndex = 0;

function createClueArray(catNum) {
  let pointVal = 100;
  let clueArr = data.clues.reduce((arr, currentClue) => {
    if (currentClue.categoryId === catNum && pointVal === currentClue.pointValue) {
      arr.push(currentClue);
      questionsArray[questionIndex] = new Question(undefined, undefined, 'running', questionsArray[questionIndex], currentClue.categoryId, currentClue.question, currentClue.answer, currentClue.pointValue);
      pointVal += 100;
      questionIndex++;
    };
    return arr;
  }, []);
return clueArr;
};

startBtn.addEventListener('click', function() {
  newGame = new Game(1, [], 'running');
  newGame.init();
  createClueArrays();
  dailyDoubleRandomizer();
  domUpdates.populateGameBoard();
  domUpdates.updateCategories();
});

resetBtn.addEventListener('click', function() {
  newGame = new Game(0, [], 'standby');
  document.querySelector('.audio-intro').pause();
});

gameBoard.addEventListener('click', gameBoardDelegator);

hostBtn.addEventListener('click', function(e) {
  e.preventDefault();

function dailyDoubleRandomizer() {
  console.log('daily double invoked')
  let multBy20 = Math.floor(Math.random() * 20);
  questionsArray[multBy20].dailyDouble = true;
}

