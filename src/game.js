const { Ship, Gameboard } = require('./gameboard')
const { createCoordinateDivs } = require('./DOM-methods')
const { Player, Computer } = require('./player-computer')
const { selectLetterCoord, selectRandomNumber } = require('./helper-functions')

function togglePlayers(activePlayer, player, computer) {
  activePlayer === player ? computer : player
}

function placeShipsOnCoords(gameboard) {
  const letters = selectLetterCoord()
  const numbers = selectRandomNumber()
  gameboard.placeShip('carrier', letters[0] + numbers[0])
  gameboard.placeShip('battleship', letters[1] + numbers[1])
  gameboard.placeShip('submarine', letters[2] + numbers[2])
  gameboard.placeShip('destroyer', letters[3] + numbers[3])
}

function Game() {
  const player = Player()
  const playerGameboard = Gameboard()
  const computer = Computer()
  const computerGameboard = Gameboard()
  createCoordinateDivs(playerGameboard.coordinates, true)
  createCoordinateDivs(computerGameboard.coordinates, false)
  let activePlayer = player
  placeShipsOnCoords(computerGameboard)
  placeShipsOnCoords(playerGameboard)
}

module.exports = { Game, selectRandomNumber }
