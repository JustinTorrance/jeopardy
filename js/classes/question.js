class Question extends Game {
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

  // categoryCluesArr(categoryNum) {
  // let pointVal = 100;
  // let cluesArr = data.clues.reduce((arr, currentClue) => {
  //   if (currentClue.categoryId === categoryNum && currentClue.pointValue === pointVal) {
  //     arr.push(currentClue);
  //     pointVal += 100;
  //   };
  //     return arr;
  //   }, []).map((currentClue) => {
  //     return currentClue.question;
  //   });
  // return cluesArr;
  // }

}

if (typeof module !== 'undefined') {
module.exports = Question;
}
