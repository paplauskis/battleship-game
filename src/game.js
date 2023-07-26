const { Ship, Gameboard } = require('./gameboard')
const { createCoordinateDivs } = require('./DOM-methods')
const { Player, Computer } = require('./player-computer')

function togglePlayers(activePlayer, player, computer) {
  activePlayer === player ? computer : player
}

function Game() {
  const player = Player()
  const playerGameboard = Gameboard()
  const computer = Computer()
  const computerGameboard = Gameboard()
  let activePlayer = player
  playerGameboard.placeShip('carrier', 'b5')
  playerGameboard.placeShip('battleship', 'd9')
  playerGameboard.placeShip('submarine', 'i7')
  playerGameboard.placeShip('destroyer', 'g2')
  computer.attack(playerGameboard)
  createCoordinateDivs(playerGameboard.coordinates, true)
  createCoordinateDivs(computerGameboard.coordinates, false)
}

module.exports = { Game }
