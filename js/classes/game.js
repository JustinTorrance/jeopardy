class Game {
  constructor() {
    this.round = 1;
    this.gameState = 'standby';
  }


  // appendNamesAndScores(playerOne, playerTwo, playerThree) {
  //     document.querySelector('.player-one-name').innerHTML = playerOne.playerName;
  //     document.querySelector('.player-two-name').innerHTML = playerTwo.playerName;
  //     document.querySelector('.player-three-name').innerHTML = playerThree.playerName;
  //     document.querySelector('.player-one-score').innerHTML = playerOne.score;
  //     document.querySelector('.player-two-score').innerHTML = playerTwo.score;
  //     document.querySelector('.player-three-score').innerHTML = playerThree.score;
  // };

  populateGameBoard() {
    
  }

  startGame() {
    // playerOne = new Player(undefined, 0, 1);
    // playerTwo = new Player(undefined, 0, 2);
    // playerThree = new Player(undefined, 0, 3);
    // this.appendNamesAndScores(playerOne, playerTwo, playerThree);
    // populateGameBoard()
    this.gameState = 'running';
    updateHostPrompt('Player One, enter your name!')
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
