
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
  },

  updateCategoryQuestions(categoryNum) {
    categoryNum === 1 ? catOneCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${catOneClues[i]}</span>`;
    }):
    categoryNum === 2 ? catTwoCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${catTwoClues[i]}</span>`;
    }):
    categoryNum === 3 ? catThreeCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${catThreeClues[i]}</span>`;
    }):
    categoryNum === 4 ? catFourCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${catFourClues[i]}</span>`;
    }): console.log('error in category update');
  },

  populateGameBoard() {
    this.updateCategoryQuestions(1);
    this.updateCategoryQuestions(2);
    this.updateCategoryQuestions(3);
    this.updateCategoryQuestions(4);
  }
}


domUpdates.updateHostPrompt("Welcome to Jeopardy! Gather your friends and press 'START' to begin a new game!")










if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}