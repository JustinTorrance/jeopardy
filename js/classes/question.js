class Question extends Game {
  constructor(round, players, gameState, name, categoryId, question, answer, pointValue) {
    super(round, players, gameState);
    this.name = name;
    this.categoryId = categoryId;
    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
    this.active = false;
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
