let domUpdates = {  
  appendNamesAndScores(playerOne, playerTwo, playerThree) {
      document.querySelector('.player-one-name').innerHTML = playerOne.playerName;
      document.querySelector('.player-two-name').innerHTML = playerTwo.playerName;
      document.querySelector('.player-three-name').innerHTML = playerThree.playerName;
      document.querySelector('.player-one-score').innerHTML = playerOne.score;
      document.querySelector('.player-two-score').innerHTML = playerTwo.score;
      document.querySelector('.player-three-score').innerHTML = playerThree.score;
  },

  startGame() {
    playerOne = new Player(this.round, this.gameState, undefined, 0, 1);
    playerTwo = new Player(this.round, this.gameState, undefined, 0, 2);
    playerThree = new Player(this.round, this.gameState, undefined, 0, 3);
    this.appendNamesAndScores(playerOne, playerTwo, playerThree);
    populateGameBoard()
  },

  updateHostPrompt(string) {
    document.querySelector('.host-prompt').innerHTML = string;
  }
}

domUpdates.updateHostPrompt("Welcome to Jeopardy! Gather your friends and press 'START' to begin a new game!")

const categoryCluesArr = (categoryNum) => {
  let pointVal = 100;
  let cluesArr = data.clues.reduce((arr, currentClue) => {
    if (currentClue.categoryId === categoryNum && currentClue.pointValue === pointVal) {
      arr.push(currentClue);
      pointVal += 100;
    };
      return arr;
    }, []).map((currentClue) => {
      return currentClue.question + currentClue.pointValue;
    });
  return cluesArr;
};

let catOneClues = categoryCluesArr(1);
let catTwoClues = categoryCluesArr(2);
let catThreeClues = categoryCluesArr(3);
let catFourClues = categoryCluesArr(4);





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}