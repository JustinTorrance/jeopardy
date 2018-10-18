const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/classes/Game.js');
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../js/domUpdates.js');
chai.spy.on(global.domUpdates)
// const Player = require('../js/classes/Player.js');


describe('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('When Game is instantiated, should have default properties', function() {
    let newGame = new Game()
    expect(newGame.round).to.equal(1)
    expect(newGame.gameState).to.equal('standby')
  });

  it('should be able to start a new game', function() {
    let newGame = new Game();
    newGame.startGame();
    expect(newGame.gameState).to.equal('running');
    expect(domUpdates.updateHostPrompt).to.have.been.called(1);
    expect(domUpdates.updateHostPrompt).to.have.been.called.with('Player One, enter your name!');
  })
})