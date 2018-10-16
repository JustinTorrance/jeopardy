class Player extends Game {
  constructor(round, players, gameState, playerNum, playerName, active) {
    super(round, players, gameState);
    this.playerNum = playerNum;
    this.score = 0;
    this.playerName = playerName;
    this.active = active || false;
  }

  submitAnswer(answer) {
    let activeQuestion = questionsArray.find((currentQuestion) => {
      if (currentQuestion.active === true) {
        return currentQuestion
      }
    })

    if (answer.toLowerCase().includes(activeQuestion.answer.toLowerCase())) {
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
    newGame.incrementTurn();
    newGame.activatePlayer();
  }

  submitWager() {

  }

  updateScore() {

  }
}

if (typeof module !== 'undefined') {
module.exports = Player;
}
