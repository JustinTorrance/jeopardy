class Questions extends Game {
  constructor(round, gameState, categoryId, question, answer, pointValue) {
    super(round, gameState);
    this.categoryId = categoryId;
    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
  }

  changePointValue() {
    //in round 2, double point value
  }

}

if (typeof module !== 'undefined') {
module.exports = Questions;
}
