class Questions extends Game {
  constructor(round, players, gameState, categoryId, question, answer, pointValue) {
    super(round, players, gameState);
    this.categoryId = categoryId;
    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
  }

  changePointValue() {
    //in round 2, double point value
  }

}