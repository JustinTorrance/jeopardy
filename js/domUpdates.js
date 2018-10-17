const domUpdates = {  
  updateNamesAndScores() {
      document.querySelector('.player-one-name').innerHTML = playerOne.playerName;
      document.querySelector('.player-two-name').innerHTML = playerTwo.playerName;
      document.querySelector('.player-three-name').innerHTML = playerThree.playerName;
      document.querySelector('.player-one-score').innerHTML = `$${playerOne.score}`;
      document.querySelector('.player-two-score').innerHTML = `$${playerTwo.score}`;
      document.querySelector('.player-three-score').innerHTML = `$${playerThree.score}`;
  },

  updateHostPrompt(string) {
    document.querySelector('.host-prompt').innerHTML = string;
  },

  updateCategories() {
    catOne.innerText = newGame.roundOneCategories[0];
    catTwo.innerText = newGame.roundOneCategories[1];
    catThree.innerText = newGame.roundOneCategories[2];
    catFour.innerText = newGame.roundOneCategories[3];
  },

  updateCategoryQuestions(categoryNum) {
    categoryNum === 1 ? catOneCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catOneClues[i].question}</span>`;
    }):
    categoryNum === 2 ? catTwoCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catTwoClues[i].question}</span>`;
    }):
    categoryNum === 3 ? catThreeCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catThreeClues[i].question}</span>`;
    }):
    categoryNum === 4 ? catFourCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catFourClues[i].question}</span>`;
    }): console.log('error in category update');
  },

  populateGameBoard() {
    this.updateCategoryQuestions(1);
    this.updateCategoryQuestions(2);
    this.updateCategoryQuestions(3);
    this.updateCategoryQuestions(4);
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}