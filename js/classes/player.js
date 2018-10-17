class Player extends Game {
  constructor(round, players, gameState, playerNum, playerName, active) {
    super(round, players, gameState);
    this.playerNum = playerNum;
    this.score = 0;
    this.playerName = playerName;
    this.active = active || false;
  }

//when player clicks on question, question will state whether it is daily double
//if daily double = true, host asks to input a wager prior to revealing questions
//wager is checked for validity
//if valid, question is revealed
//player inputs answer
//if answer is correct, wager amount is added to score
//if incorrect, wager amount is subtracted from score
// current player becomes inactive
//activate next player


  submitAnswer(answer) {
    let activeQuestion = questionsArray.find((currentQuestion) => {
      if (currentQuestion.active === true) {
        return currentQuestion
      }
    })
    if (activeQuestion.answer.toLowerCase().includes(answer.toLowerCase())) {
      newGame.players.find((currentPlayer) => {
        if (currentPlayer.active) {
          currentPlayer.score += activeQuestion.pointValue;
          domUpdates.updateNamesAndScores();
          currentPlayer.active = false;
        }
      })
    } else {
      newGame.players.find((currentPlayer) => {
        if (currentPlayer.active) {
          currentPlayer.score -= activeQuestion.pointValue;
          domUpdates.updateNamesAndScores();
          currentPlayer.active = false;
        }
      })
    }
    activeQuestion.active = false;
    newGame.incrementTurn();
    newGame.activatePlayer();
    let activePlayer = newGame.players.find((currentPlayer) => {
      if (currentPlayer.active) {
        return currentPlayer;
      }
    })
    domUpdates.updateHostPrompt(`${activePlayer.playerName}, Please select the next question from the game board!`)
  }

  submitWager() {

  }

  updateScore() {

  }
}

if (typeof module !== 'undefined') {
module.exports = Player;
}
