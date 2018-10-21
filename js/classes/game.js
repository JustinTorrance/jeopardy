class Game {
  constructor(round) {
   this.round = round;
   this.players = [];
   this.catOneClues;
   this.catTwoClues;
   this.catThreeClues;
   this.catFourClues;
   this.roundOneCategories;
   this.activeQuestion;
   this.playerIndex = 0;
   this.questionIndex = 0;
  }

  init() {
    domUpdates.updateHostPrompt('Player One, enter your name below!');
    this.roundOneCategories = this.setCategories();
    this.createClueArrays();
    this.dailyDoubleRandomizer();
    this.playAudioIntro();
    domUpdates.populateGameBoard();
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
    userInput.value = '';
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
    let categoriesArray = [];
    Object.keys(data.categories).forEach((currentKey) => {
      if (!categoriesArray.includes(currentKey) && categoriesArray.length < 4) {
        categoriesArray.push(currentKey);
      }
    });
    return categoriesArray;
  }

  createClueArray(catNum) {
    let pointVal = 100;
    let clueArr = data.clues.reduce((arr, currentClue) => {
      if (currentClue.categoryId === catNum && pointVal === currentClue.pointValue) {
        arr.push(currentClue);
        questionsArray[this.questionIndex] = new Question(undefined, currentClue.categoryId, currentClue.question, currentClue.answer, currentClue.pointValue);
        pointVal += 100;
        this.questionIndex++;
      }
      return arr;
    }, []);
    return clueArr;
  }

  createClueArrays() {
    this.catOneClues = this.createClueArray(1);
    this.catTwoClues = this.createClueArray(2);
    this.catThreeClues = this.createClueArray(3);
    this.catFourClues = this.createClueArray(4);
  }

  dailyDoubleRandomizer() {
    let multBy20 = Math.floor(Math.random() * 20);
    questionsArray[multBy20].dailyDouble = true;
  }

  gameBoardDelegator(e) {
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
    gameBoardArray.find((currentTD) => {
      if (e.target.classList.contains(currentTD)) {
        e.target.childNodes[0].remove();
        hostPrompt.innerHTML = e.target.innerHTML;
        hostPrompt.childNodes[0].classList.remove('hidden');
      }
    });
    if (selectedQuestion.dailyDouble) {
      newGame.submitConditional();
    }
  }

  findActiveQuestion() {
    newGame.activeQuestion = questionsArray.find((currentQuestion) => {
      if (currentQuestion.active === true) {
        return currentQuestion;
        //return currentQuestion.active
      }
    });
  }

  playerInstantiation() {
    if (hostPrompt.innerText.includes('Player One')) {
      playerOne = new Player(undefined, 1, userInput.value, true);
      this.players.push(playerOne);
      userInput.value = '';
      domUpdates.updateHostPrompt('Player Two, enter your name!');
    } else if (hostPrompt.innerText.includes('Player Two')) {
      playerTwo = new Player(undefined, 2, userInput.value);
      this.players.push(playerTwo);
      userInput.value = '';
      domUpdates.updateHostPrompt('Player Three, enter your name!');
    } else if (hostPrompt.innerText.includes('Player Three')) {
      playerThree = new Player(undefined, 3, userInput.value);
      userInput.value = '';
      this.players.push(playerThree);
      domUpdates.updateNamesAndScores();
      domUpdates.updateHostPrompt(`${playerOne.playerName}, pick a category dollar amount`);
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Game;
}