class Player extends Game {
  constructor(round, players, gameState, playerNum, playerName, active) {
    super(round, players, gameState);
    this.playerNum = playerNum;
    this.score = 0;
    this.playerName = playerName || `player ${this.playerNum}`;
    this.active = active || false;
  }

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
}

if (typeof module !== 'undefined') {
module.exports = Player;
}
