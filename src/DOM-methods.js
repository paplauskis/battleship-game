const {
  Ship,
  identifyShip,
  createGameboard: createGameboardCoords,
  Gameboard,
  Player,
  Computer,
} = require('./gameboard')

const playerGameboardDiv = document.querySelector('.player-gameboard')
const computerGameboardDiv = document.querySelector('.computer-gameboard')
const infoDiv = document.querySelector('.info-div')

function createCoordinateDivs(coordinates, isPlayer) {
  coordinates.forEach((coord, i = 0) => {
    const div = document.createElement('div')
    div.style.width = `${playerGameboardDiv.clientWidth / 10}px`
    div.style.height = `${playerGameboardDiv.clientHeight / 10}px`
    div.textContent = `${coord.name}`
    div.name = coord.name
    div.value = coord.value
    div.classList.add(
      i++,
      isPlayer ? 'player-div' : 'computer-div',
      'square-div'
    )
    if (!isPlayer) addClickEvents(div)
    isPlayer ? playerGameboardDiv.append(div) : computerGameboardDiv.append(div)
  })
}

function addClickEvents(div) {
  div.addEventListener('click', () => {
    console.log(div.name)
  })
}

module.exports = { createCoordinateDivs }
