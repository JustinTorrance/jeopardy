class Question extends Game {
  constructor(round, categoryId, question, answer, pointValue, wager) {
    super(round);
    this.categoryId = categoryId;
    this.question = question;
    this.answer = answer;
    this.pointValue = wager || pointValue;
    this.active = false;
    this.dailyDouble = false;
  }

  checkWagerValidity() {
    if (userInput.value === '') {
      domUpdates.updateHostPrompt(`You've selected the Daily Double! Enter a wager between 5 and ${newGame.activePlayer().score}.`);
    } else if (parseInt(userInput.value) <= (newGame.activePlayer().score) && parseInt(userInput.value) >= 5) {
      this.dailyDouble = false;
      let wager = parseInt(userInput.value);
      this.pointValue = wager;
      domUpdates.updateHostPrompt(`${this.question}`);
    } else {
      domUpdates.updateHostPrompt(`That's an invalid wager! Please enter a wager between 5 and ${newGame.activePlayer().score}.`);
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Question;
}
