const { Gameboard } = require('./gameboard')
// const { createCoordinateDivs, getDivInfo } = require('./DOM-methods')
const { Player, Computer } = require('./player-computer')
const { selectLetterCoord, selectRandomNumber } = require('./helper-functions')
const playerGameboardDiv = document.querySelector('.player-gameboard')
const computerGameboardDiv = document.querySelector('.computer-gameboard')
const infoDiv = document.querySelector('.info-div')
const endDisplay = document.querySelector('.blur-div')
const winnerDiv = document.querySelector('.winner')
const newGameBtn = document.querySelector('.new-game')

endDisplay.style.display = 'none'

const player = Player()
const playerGameboard = Gameboard()
const computer = Computer()
const computerGameboard = Gameboard()
placeShipsOnCoords(computerGameboard)
placeShipsOnCoords(playerGameboard)
createCoordinateDivs(playerGameboard.coordinates, true)
createCoordinateDivs(computerGameboard.coordinates, false)

function placeShipsOnCoords(gameboard) {
  const letters = selectLetterCoord()
  const numbers = selectRandomNumber()
  gameboard.placeShip('carrier', letters[0] + numbers[0])
  gameboard.placeShip('battleship', letters[1] + numbers[1])
  gameboard.placeShip('submarine', letters[2] + numbers[2])
  gameboard.placeShip('destroyer', letters[3] + numbers[3])
}

function createCoordinateDivs(coordinates, isPlayer) {
  coordinates.forEach((coord, i = 0) => {
    const div = document.createElement('div')
    div.style.width = `${playerGameboardDiv.clientWidth / 10}px`
    div.style.height = `${playerGameboardDiv.clientHeight / 10}px`
    div.name = coord.name
    div.value = coord.value
    if (div.value !== null && isPlayer) div.style.backgroundColor = 'grey'
    isPlayer ? playerDivArray.push(div.name) : computerDivArray.push(div.name)
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
    handleClick(div)
  })
}

function handleClick(div) {
  div.value === null
    ? (div.style.backgroundColor = 'lightblue')
    : (div.style.backgroundColor = 'red')
  player.attack(computerGameboard, div.name)
  if (computerGameboard.checkIfAllShipsAreSunk()) {
    setTimeout(() => (endDisplay.style.display = 'block'), 300)
    showResults(true)
  }
  setTimeout(computerAttack, 100)
}

function computerAttack() {
  const randomCoord = Math.floor(Math.random() * 100)
  if (
    playerGameboard.coordinates[randomCoord].value === 'hit' ||
    playerGameboard.coordinates[randomCoord].value === 'missed'
  ) {
    computerAttack()
  } else {
    playerGameboard.coordinates[randomCoord].value === null
      ? (playerGameboardDiv.children[randomCoord].style.backgroundColor =
          'lightblue')
      : (playerGameboardDiv.children[randomCoord].style.backgroundColor = 'red')
    computer.attack(
      playerGameboard,
      playerGameboard.coordinates[randomCoord].name
    )
  }

  if (playerGameboard.checkIfAllShipsAreSunk()) {
    endDisplay.style.display = 'absolute'
    showResults(false)
  }
}

function showResults(isPlayer) {
  const winner = isPlayer ? 'Player wins!' : 'Computer wins!'
  winnerDiv.textContent = winner
}

function Game() {}

// newGameBtn.addEventListener('click', resetGame)

module.exports = { Game, selectRandomNumber }
