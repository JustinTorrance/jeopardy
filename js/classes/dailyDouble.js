class DailyDouble extends Question {
  constructor(round, gameState, categoryId, clue, answer, pointValue) {
    super(round, gameState);
    this.clue = clue;
    this.answer = answer;
    this.pointValue = pointValue;
    // this.wagerInput = wagerInput;

    //should wager input be a method?
  }

  checkWagerValidity() {

  }

}

if (typeof module !== 'undefined') {
module.exports = DailyDouble;
}
