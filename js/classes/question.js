class Question extends Game {
  constructor(round, players, gameState, name, categoryId, question, answer, pointValue, wager) {
    super(round, players, gameState);
    this.name = name;
    this.categoryId = categoryId;
    this.question = question;
    this.answer = answer;
    this.pointValue = wager || pointValue;
    this.active = false;
    this.dailyDouble = false;
  }

  checkWagerValidity() {
    console.log('hooked up');
    if (userInput.value === '') {
      domUpdates.updateHostPrompt(`You've selected the Daily Double! Enter a wager between 5 and ${newGame.activePlayer().score}.`);
    } else if (parseInt(userInput.value) <= (newGame.activePlayer().score) && parseInt(userInput.value) >= 5) {
      this.dailyDouble = false;
      console.log('valid wager')
      let wager = parseInt(userInput.value);
      this.pointValue = wager;
      domUpdates.updateHostPrompt(`${this.question}`)
    } else {
      domUpdates.updateHostPrompt(`That's an invalid wager! Please enter a wager between 5 and ${newGame.activePlayer().score}.`)
    }
  }


  activateQuestion() {

  }





  changePointValue() {
    //in round 2, double point value
  }
}

if (typeof module !== 'undefined') {
module.exports = Question;
}
