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

    if (checkIfShipFits(ship, coord)) {
    placeShipOnCoordinate(ship, coord)
    } else console.log("ship doesn't fit in desired coordinate")
  }

  const checkIfShipFits = (ship, coord) => {
    return ship.length <= coord.substring(1)
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
  return { placeShip, coordinates }
}

module.exports = { Ship, identifyShip, createGameboard, Gameboard }