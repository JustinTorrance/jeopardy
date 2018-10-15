class Game {
  constructor(round, players, gameState) {
   this.round = 1;
   this.gameState = 'standby';
   this.players = players;
  }

  init() {
    domUpdates.updateHostPrompt('Player One, enter your name!')
    playerOne = new Player(undefined, undefined, undefined, 1);
    playerTwo = new Player(undefined, undefined, undefined, 2);
    playerThree = new Player(undefined, undefined, undefined, 3);
    // domUpdates.populateGameBoard();
  }

  // createClueArray(catNum) {
  //   let pointVal = 100;
  //   let clueArr = data.clues.reduce((arr, currentClue) => {
  //     if (currentClue.categoryId === catNum && pointVal === currentClue.pointValue) {
  //       arr.push(currentClue);
  //       question1 = new Question(undefined, undefined, currentClue.categoryId, currentClue.question, currentClue.answer, currentClue.pointValue);
  //       pointVal += 100;
  //     }
  //     return arr;
  //   }, []);
  // return clueArr;
  // }

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