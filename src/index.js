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

function createGameboard() {
  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const numberCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  let coords = []

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const element = {}
      element.name = letterCoords[i].concat(numberCoords[j])
      element.value = null
      coords.push(element)
    }
  }
  return coords
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
  const coordinates = createGameboard()

  const placeShip = (shipType, coord) => {
    const ship = identifyShip(shipType)
    placeShipOnCoordinate(ship, coord)
  }

  const placeShipOnCoordinate = (ship, coord) => {
    coordinates.forEach((item) => {
      if (item.name === coord) {
        ship.value = coord
        item.value = ship
      }
    })
  }
  return { placeShip, coordinates }
}

module.exports = { Ship, identifyShip, createGameboard, Gameboard }
