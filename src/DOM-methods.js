const {
  Ship,
  identifyShip,
  createGameboard: createGameboardCoords,
  Gameboard,
  Player,
  Computer,
} = require('./index')

const playerGameboardDiv = document.querySelector('.player-gameboard')
const computerGameboardDiv = document.querySelector('.computer-gameboard')

function appendPlayerCoordinateDivs(coord, number) {
  const div = createCoordinateDivs(coord, number)
  playerGameboardDiv.append(div)
}

function appendComputerCoordinateDivs(coord, number) {
  const div = createCoordinateDivs(coord, number)
  computerGameboardDiv.append(div)
}

function createCoordinateDivs(coord, number) {
  const div = document.createElement('div')
  div.style.width = `${playerGameboardDiv.clientWidth / 10}px`
  div.style.height = `${playerGameboardDiv.clientHeight / 10}px`
  div.textContent = `${coord}`
  div.value = coord
  div.classList.add('square-div')
  div.classList.add(number)

  return div
}

module.exports = { appendPlayerCoordinateDivs, appendComputerCoordinateDivs }