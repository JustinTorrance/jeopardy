class DailyDouble extends Questions {
  constructor(round, gameState, categoryId, question, answer, pointValue, wagerInput) {
    super(round, gameState, categoryId, question, answer, pointValue);
    this.wagerInput = wagerInput;
    //should wager input be a method?
  }

  checkWagerValidity() {

  }

}

if (typeof module !== 'undefined') {
module.exports = DailyDouble;
}
