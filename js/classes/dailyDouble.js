class DailyDouble extends Question {
  constructor(round, gameState, categoryId, clue, answer, pointValue) {
    super(round, gameState);
    this.clue = clue;
    this.answer = answer;
    this.pointValue = pointValue;
  }



  checkWagerValidity() {
    if (parseInt(userInput.value) <= player.score && parseInt(userInput.value >= 0)) {
      // host
    }

  }




}

if (typeof module !== 'undefined') {
module.exports = DailyDouble;
}


//give all questions property of dailyDouble = false;
//upon instantiation of new game, one td are randomly given state of dailyDouble = true;
//upon clicking each td, conditional checks for dailyDouble = true;
//if dailyDouble = true -> 
  //hostPrompt: you've selected dailyDouble, enter any wager less than your score
  //checkWagerValidity()
    //verify parseInt(userInput.value) <= player.score
    //if true, hostPrompt displays question
//if user's answer matches actual answer, player.score += wager;
//deactivate player
//increment playerIndex
