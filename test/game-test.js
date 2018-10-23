const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/classes/Game.js');
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../js/domUpdates.js');
chai.spy.on(global.domUpdates);
global.data = require('../js/data.js');
chai.spy.on(global.data);
global.hostPrompt = require('../index.js');
chai.spy.on(global.hostPrompt);

describe('Game', function() {
  it.skip('should return true', function() {
    expect(true).to.equal(true);
  });
  it.skip('should be able to increment turns for each player', function() {
    let newGame = new Game();
    newGame.incrementTurn();
    expect(newGame.playerIndex).to.equal(1);
  });
  it.skip('should activate player after each turn', function() {
    let newGame = new Game();
    newGame.activePlayer();
    newGame.activatePlayer();
    expect(this.players[this.playerIndex].active).to.equal(true);
  });
  it.skip('When Game is instantiated, should have default properties', function() {
    let newGame = new Game();
    expect(newGame.round).to.equal(1);
    expect(newGame.players.length).to.equal(0);
    expect(newGame.catOneClues).to.equal(undefined);
    expect(newGame.catTwoClues).to.equal(undefined);
    expect(newGame.catThreeClues).to.equal(undefined);
    expect(newGame.catFourClues).to.equal(undefined);
    expect(newGame.roundOneCategories.length).to.equal(0);
    expect(newGame.roundTwoCategories.length).to.equal(0);
    expect(newGame.activeQuestion).to.equal(undefined);
    expect(newGame.playerIndex).to.equal(0);
    expect(newGame.questionIndex).to.equal(0);
    expect(newGame.questionCounter).to.equal(0);
  });
  it.skip('should be able to start a new game', function() {
    let newGame = new Game();
    newGame.init();
    expect(newGame.setCategories).to.have.been.called(1);
    expect(newGame.createClueArrays).to.have.been.called(1);
  });
  it.skip('should be able to create a clue array', function() {
    let newGame = new Game();
    let clueArray = newGame.createClueArray(1);
    expect(clueArray.length).to.equal(5);
    expect(clueArray[0].pointValue).to.equal(100);
    expect(clueArray[1].pointValue).to.equal(200);
    expect(clueArray[2].pointValue).to.equal(300);
    expect(clueArray[3].pointValue).to.equal(400);
    expect(clueArray[4].pointValue).to.equal(500);
  });
  it.skip('should be able to create multiple clue arrays at once', function() {
    let newGame = new Game();
    newGame.createClueArrays(1, 2, 3, 4);
    expect(newGame.catOneClues.length).to.equal(5);
    expect(newGame.catTwoClues.length).to.equal(5);
    expect(newGame.catThreeClues.length).to.equal(5);
    expect(newGame.catFourClues.length).to.equal(5);
  });
  it.skip('should be able to randomize a daily double', function() {
    let newGame = new Game();
    newGame.createClueArrays(1, 2, 3, 4);
    newGame.dailyDoubleRandomizer();
    let trueIfDailyDouble = questionsArray.find((currentQuestion) => {
      if (currentQuestion.dailyDouble) {
        return currentQuestion.dailyDouble
      };
    });
    expect(trueIfDailyDouble).to.equal(true);
  });
  it.skip('should be able to increment the round', function() {
    let newGame = new Game();
    newGame.incrementRound();
    expect(newGame.round).to.equal(2);
    expect(newGame.setCategories).to.have.been.called(1);
    expect(domUpdates.updateCategories).to.have.been.called(1);
    expect(domUpdates.addRoundTwoPointValue).to.have.been.called(1);
    expect(newGame.createClueArrays).to.have.been.called(1);
    expect(domUpdates.populateGameBoard).to.have.been.called(1);
    expect(questionsArray[0].pointValue).to.equal(200);
    expect(newGame.catOneClues.length).to.equal(5);
  });
  it.skip('should be able delegate the game board', function() {
    let newGame = new Game();
    newGame.gameBoardDelegator();
    expect(newGame.questionCounter).to.equal(1);
    expect(newGame.findActiveQuestion).to.have.been.called(1);
    expect(domUpdates.clickedQuestion).to.have.been.called(1);
  });
  it.skip('should be able to find the active question', function() {
    let newGame = new Game();
    newGame.init();
    questionsArray[0].active = true;
    newGame.findActiveQuestion();
    expect(newGame.activeQuestion).to.equal(questionsArray[0]);
  });
  it.skip('should be able to instantiate new players', function() {
    let newGame = new Game();
    domUpdates.updateHostPrompt('Player One');
    newGame.playerInstantiation();
    expect(playerOne.active).to.equal(true);
    expect(newGame.players.length).to.equal(1);
    expect(domUpdates.clearUserInput).to.have.been.called(1);
    expect(domUpdates.updateHostPrompt).to.have.been.called(1);
    newGame.playerInstantiation();
    expect(playerTwo.active).to.equal(false);
    expect(newGame.players.length).to.equal(2);
    expect(domUpdates.clearUserInput).to.have.been.called(1);
    expect(domUpdates.updateHostPrompt).to.have.been.called(1);
    newGame.playerInstantiation();
    expect(playerThree.active).to.equal(false);
    expect(newGame.players.length).to.equal(3);
    expect(domUpdates.updateNamesAndScores).to.have.been.called(1);
    expect(domUpdates.clearUserInput).to.have.been.called(1);
    expect(domUpdates.updateHostPrompt).to.have.been.called(1);
  });
});