class Player extends Game {
  constructor(round, players, gameState, playerNum, playerName) {
    super(round, players, gameState);
    this.playerNum = playerNum;
    this.score = 0;
    this.playerName = playerName;
  }

  submitAnswer() {

  }

  submitWager() {

  }

  updateScore() {

  }
}

if (typeof module !== 'undefined') {
module.exports = Player;
}
