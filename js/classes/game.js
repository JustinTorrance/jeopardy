class Game {
  constructor(round, players, gameState) {
   this.round = 1;
   this.gameState = 'standby';
   this.players = players;
  }

  init() {
    domUpdates.updateHostPrompt('Player One, enter your name below!')
    // playerOne = new Player(undefined, undefined, undefined, 1);
    // playerTwo = new Player(undefined, undefined, undefined, 2);
    // playerThree = new Player(undefined, undefined, undefined, 3);
    // domUpdates.populateGameBoard();
  }

  incrementTurn() {
    if (playerIndex === 2) {
      playerIndex = 0;
    } else {
      playerIndex++;
    }
  }

  activatePlayer() {
    if (playerIndex === 0) {
      this.players[0].active = true;
    } else if (playerIndex === 1) {
      this.players[1].active = true;
    } else if (playerIndex === 2) {
      this.players[2].active = true;
    } else {
      console.log('error in activatePlayer');
    }
  }

  quitGame() {

  }

  incrementRoud() {

  }

  declareWinner() {

  }


 newTextPrompt(prompt) {
   return prompt;
 }

}

if (typeof module !== 'undefined') {
module.exports = Game;
}