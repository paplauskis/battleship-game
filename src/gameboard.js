const { createGameboardCoords } = require('./helper-functions')

function Ship(length) {
  let hitsTaken = 0

  const hit = () => {
    ++hitsTaken
  }
  const isSunk = () => {
    return length === hitsTaken
  }
  return {
    length,
    hit,
    get hitsTaken() {
      return hitsTaken
    },
    isSunk,
  }
}

function identifyShip(shipType) {
  return shipType.toLowerCase() === 'carrier'
    ? Ship(5)
    : shipType.toLowerCase() === 'battleship'
    ? Ship(4)
    : shipType.toLowerCase() === 'submarine'
    ? Ship(3)
    : shipType.toLowerCase() === 'destroyer'
    ? Ship(2)
    : (alert("A ship with this name doesn't exist"), null)
}

function Gameboard() {
  const coordinates = createGameboardCoords()

  const placeShip = (shipType, coord) => {
    const ship = identifyShip(shipType)
    placeShipOnCoordinate(ship, coord)
  }

  const placeShipOnCoordinate = (ship, coord, placedCells = 0) => {
    if (!Array.isArray(ship.value)) {
      ship.value = []
    }

    coordinates.forEach((item) => {
      if (item.name === coord) {
        ship.value.push(coord)
        item.value = ship
      }
    })

    if (ship.length + placedCells <= ship.length) {
      let newCord = coord.substring(1)
      for (let i = 2; i <= ship.length; i++) {
        const newCoord = `${coord.substring(0, 1)}${--newCord}`
        placeShipOnCoordinate(ship, newCoord, ++placedCells)
      }
    }
  }

  const searchForCoordinate = (chosenCoord) => {
    for (let i = 0; i < coordinates.length; i++) {
      if (chosenCoord == coordinates[i].name) return coordinates[i]
    }
  }

  const receiveAttack = (chosenCoord) => {
    const attackedCoord = searchForCoordinate(chosenCoord)
    if (attackedCoord.value === null) {
      attackedCoord.value = 'missed'
    } else {
      attackedCoord.value.hit()
      attackedCoord.value = 'hit'
    }
  }

  const checkIfAllShipsAreSunk = () => {
    return coordinates.every((item) =>
      item.value === 'hit' || item.value === 'missed' || item.value === null)
  }

  return {
    placeShip,
    coordinates,
    receiveAttack,
    checkIfAllShipsAreSunk,
  }
}

module.exports = {
  Ship,
  identifyShip,
  createGameboard: createGameboardCoords,
  Gameboard,
}
