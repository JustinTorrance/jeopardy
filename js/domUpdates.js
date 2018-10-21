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
    hostPrompt.innerHTML = string;
  },

  updateCategories() {
    catOne.innerText = newGame.roundTwoCategories[0] || newGame.roundOneCategories[0];
    catTwo.innerText = newGame.roundTwoCategories[1] || newGame.roundOneCategories[1];
    catThree.innerText = newGame.roundTwoCategories[2] || newGame.roundOneCategories[2];
    catFour.innerText = newGame.roundTwoCategories[3] || newGame.roundOneCategories[3];
  },

  clickedQuestion(e) {
    gameBoardArray.find((currentTD) => {
      if (e.target.classList.contains(currentTD)) {
        e.target.childNodes[0].remove();
        hostPrompt.innerHTML = e.target.innerHTML;
        hostPrompt.childNodes[0].classList.remove('hidden');
      };
    });
  },

  clearUserInput() {
    userInput.value = '';
  },

  addRoundTwoPointValue() {
    let pointValue1 = 200;
    let pointValue2 = 200;
    let pointValue3 = 200;
    let pointValue4 = 200;

    catOneCluesNodes.forEach((currentNode) => {
      currentNode.innerHTML = `$${pointValue1}`;
      pointValue1 += 200;
    })
    catTwoCluesNodes.forEach((currentNode) => {
      currentNode.innerHTML = `$${pointValue2}`;
      pointValue2 += 200;
    })
    catThreeCluesNodes.forEach((currentNode) => {
      currentNode.innerHTML = `$${pointValue3}`;
      pointValue3 += 200;
    })
    catFourCluesNodes.forEach((currentNode) => {
      currentNode.innerHTML = `$${pointValue4}`;
      pointValue4 += 200;
    })
  },

  updateCategoryQuestions(categoryNum) {
    (categoryNum === 1) || (categoryNum === 5) ? catOneCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catOneClues[i].question}</span>`;
      console.log(newGame.catOneClues[i].question);
    }):
    (categoryNum === 2) || (categoryNum === 6) ? catTwoCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catTwoClues[i].question}</span>`;
    }):
    (categoryNum === 3) || (categoryNum === 7) ? catThreeCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catThreeClues[i].question}</span>`;
    }):
    (categoryNum === 4) || (categoryNum === 8) ? catFourCluesNodes.forEach((currentNode, i) => {
      currentNode.innerHTML += `<span class="hidden">${newGame.catFourClues[i].question}</span>`;
    }): console.log('error in updateCategoryQuestions domUpdates.js');
  },
  

  populateGameBoard(catOneNum, catTwoNum, catThreeNum, catFourNum) {
    this.updateCategoryQuestions(catOneNum);
    this.updateCategoryQuestions(catTwoNum);
    this.updateCategoryQuestions(catThreeNum);
    this.updateCategoryQuestions(catFourNum);
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}