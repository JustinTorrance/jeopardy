class Game {
  constructor(round, players, gameState) {
    this.round = 1;
    this.gameState = 'standby';
    this.players = players;
  }


  // appendNamesAndScores(playerOne, playerTwo, playerThree) {
  //     document.querySelector('.player-one-name').innerHTML = playerOne.playerName;
  //     document.querySelector('.player-two-name').innerHTML = playerTwo.playerName;
  //     document.querySelector('.player-three-name').innerHTML = playerThree.playerName;
  //     document.querySelector('.player-one-score').innerHTML = playerOne.score;
  //     document.querySelector('.player-two-score').innerHTML = playerTwo.score;
  //     document.querySelector('.player-three-score').innerHTML = playerThree.score;
  // };



  init() {
    playerOne = new Player(undefined, undefined, undefined, undefined, 1, 0);
    playerTwo = new Player(undefined, undefined, undefined, undefined, 2, 0);
    playerThree = new Player(undefined, undefined, undefined, undefined, 3, 0);
    // this.appendNamesAndScores(playerOne, playerTwo, playerThree);
    // populateGameBoard()
    this.gameState = 'running';
    domUpdates.populateGameBoard();
    // updateHostPrompt('Player One, enter your name!')
  }

  quitGame() {

  }

  incrementRoud() {

  }

  declareWinner() {

  }

  rollDice() {

  }

  newTextPrompt(prompt) {
    return prompt;
  }

}

if (typeof module !== 'undefined') {
module.exports = Game;
}
