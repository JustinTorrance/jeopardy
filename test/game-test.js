const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/classes/game.js');
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../js/domUpdates.js');
// chai.spy.on(global.domUpdates)
// const Player = require('../js/classes/player.js');


describe('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default round of 1', function() {
    let newGame = new Game()
    expect(newGame.round).to.equal(1)
  });

  it('should have a default gamestate of standby', function() {
    let newGame = new Game();
    expect(newGame.gameState).to.equal('standby')
  })

  it('should be able to start a new game', function() {
    let newGame = new Game();
    newGame.startGame();
    expect(newGame.gameState).to.equal('running');
    expect(domUpdates.updateHostPrompt).to.have.been.called(1);
    expect(domUpdates.updateHostPrompt).to.have.been.called.with('Player One, enter your name!');


   

  })




})