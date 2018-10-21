class Game {
  constructor() {
   this.round = 1;
   this.players = [];
   this.catOneClues;
   this.catTwoClues;
   this.catThreeClues;
   this.catFourClues;
   this.roundOneCategories = [];
   this.roundTwoCategories = [];
   this.activeQuestion;
   this.playerIndex = 0;
   this.questionIndex = 0;
   this.questionCounter = 0;
  }

  init() {
    domUpdates.updateHostPrompt('Player One, enter your name below!');
    this.setCategories(1, 2, 3, 4);
    this.createClueArrays(1, 2, 3, 4);
    this.dailyDoubleRandomizer();
    this.playAudioIntro();
    domUpdates.populateGameBoard(1, 2, 3, 4);
    domUpdates.updateCategories();
  }

  incrementTurn() { 
    this.playerIndex === 2 ? this.playerIndex = 0 : this.playerIndex++; 
  }

  submitConditional(answer) {
    newGame.findActiveQuestion();
    if (this.activeQuestion.dailyDouble && newGame.activePlayer().score >= 5) {
      this.activeQuestion.checkWagerValidity();
    } else if (this.activeQuestion.dailyDouble) {
      this.activeQuestion.dailyDouble = false;
      this.activeQuestion.pointValue *= 2;
      domUpdates.updateHostPrompt(`You selected the Daily Double! Since your score is below 5, we've doubled the dollar amount! ${this.activeQuestion.question}`);
    } else if (playerOne.active) {
      playerOne.submitAnswer(answer);
    } else if (playerTwo.active) {
      playerTwo.submitAnswer(answer);
    } else if (playerThree.active) {
      playerThree.submitAnswer(answer);
    }
    domUpdates.clearUserInput();
  }

  activatePlayer() {
    this.players[this.playerIndex].active = true;
}

  activePlayer() {
    let activePlayer = this.players.find((currentPlayer) => {
      if (currentPlayer.active) {
        return currentPlayer;
      }
    });
  return activePlayer;
  }

  playAudioIntro() {
    document.querySelector('.audio-intro').play();
  }

  setCategories() {
    Object.keys(data.categories).forEach((currentKey) => {
      if (!this.roundOneCategories.includes(currentKey) && this.roundOneCategories.length < 4 && this.round === 1) {
        this.roundOneCategories.push(currentKey);
      } else if (!this.roundOneCategories.includes(currentKey) && this.roundTwoCategories.length < 4 && this.round === 2) {
        this.roundTwoCategories.push(currentKey);
      }
    });
  }

  createClueArray(catNum) {
    let pointVal = 100;
    let clueArr = data.clues.reduce((arr, currentClue) => {
      if (currentClue.categoryId === catNum && pointVal === currentClue.pointValue) {
        arr.push(currentClue);
        questionsArray.push(new Question(undefined, currentClue.categoryId, currentClue.question, currentClue.answer, currentClue.pointValue))
        pointVal += 100;
        this.questionIndex++;
      }
      return arr;
    }, []);
    return clueArr;
  }

  // createClueArray(catNum) {
  //   let pointVal = 100;

  //   data.clues.reduce((currentClue) => {
  //     if (currentClue.categoryId === catNum && pointVal === currentClue.pointValue) {
  //       questionsArray.push(currentClue);
  //     }
  //   }
  // }

  createClueArrays(catOneNum, catTwoNum, catThreeNum, catFourNum) {
    this.catOneClues = this.createClueArray(catOneNum);
    this.catTwoClues = this.createClueArray(catTwoNum);
    this.catThreeClues = this.createClueArray(catThreeNum);
    this.catFourClues = this.createClueArray(catFourNum);
  }

  dailyDoubleRandomizer() {
    let multBy20 = Math.floor(Math.random() * 20);
    questionsArray[multBy20].dailyDouble = true;
  }

  incrementRound() {
    this.round = 2;
    this.setCategories();
    domUpdates.updateCategories();
    domUpdates.addRoundTwoPointValue();
    this.catOneClues = [];
    this.catTwoClues = [];
    this.catThreeClues = [];
    this.catFourClues = [];
    this.createClueArrays(5, 6, 7, 8);
    domUpdates.populateGameBoard(5, 6, 7, 8);
    questionsArray.forEach((currentQuestion) => {
      currentQuestion.pointValue *= 2;
    });
  }

  gameBoardDelegator(e) {
    this.questionCounter++;
    if (this.questionCounter === 20) {
      this.incrementRound();
      return;
    }
    newGame.findActiveQuestion();
    let selectedQuestion;
    //let checkQuestionText = domUpdates.checkQuestionText(currentQuestion, e.target.childNodes[1])
    questionsArray.forEach((currentQuestion) => {
      if (currentQuestion.question === e.target.childNodes[1].innerText) {
        selectedQuestion = currentQuestion;
        selectedQuestion.active = true;
      } else if (currentQuestion.question === e.target.childNodes[1].innerHTML) {
        selectedQuestion = currentQuestion;
        selectedQuestion.active = true;
      } 
    });
    domUpdates.clickedQuestion(e);
    if (selectedQuestion.dailyDouble) {
      newGame.submitConditional();
    }
  }

  findActiveQuestion() {
    newGame.activeQuestion = questionsArray.find((currentQuestion) => {
      if (currentQuestion.active === true) {
        return currentQuestion;
      }
    });
  }

  playerInstantiation() {
    if (hostPrompt.innerText.includes('Player One')) {
      playerOne = new Player(undefined, 1, userInput.value, true);
      this.players.push(playerOne);
      domUpdates.clearUserInput();
      domUpdates.updateHostPrompt('Player Two, enter your name!');
    } else if (hostPrompt.innerText.includes('Player Two')) {
      playerTwo = new Player(undefined, 2, userInput.value);
      this.players.push(playerTwo);
      domUpdates.clearUserInput();
      domUpdates.updateHostPrompt('Player Three, enter your name!');
    } else if (hostPrompt.innerText.includes('Player Three')) {
      playerThree = new Player(undefined, 3, userInput.value);
      domUpdates.clearUserInput();
      this.players.push(playerThree);
      domUpdates.updateNamesAndScores();
      domUpdates.updateHostPrompt(`${playerOne.playerName}, pick a category dollar amount`);
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Game;
}