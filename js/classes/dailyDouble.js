class DailyDouble extends Questions {
  constructor(round, players, gameState, categoryId, question, answer, pointValue, wagerInput) {
    super(round, players, gameState, categoryId, question, answer, pointValue);
    this.wagerInput = wagerInput;
    //should wager input be a method?
  }

  checkWagerValidity() {

  }

}