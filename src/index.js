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

function createGameboardCoords() {
  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const numberCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const coords = []

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
  const coordinates = createGameboardCoords()

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

  function searchForCoordinate(chosenCoord) {
    for (let i = 0; i < coordinates.length; i++) {
      if (chosenCoord === coordinates[i].name)
        return coordinates[i]
    }
  }

  const receiveAttack = (chosenCoord) => {
    const attackedCoord = searchForCoordinate(chosenCoord)
    if (attackedCoord.value === null) {
      attackedCoord.value = 'missed'
    } else if (typeof attackedCoord.value === 'object'){
      attackedCoord.value.hit()
      if (attackedCoord.value.isSunk()) console.log('Ship has been sunk')
      attackedCoord.value = 'hit'
    } else alert('Cannot hit the same coordinate twice!')

  }

  return { placeShip, coordinates, receiveAttack }
}
console.log(Gameboard().coordinates)
module.exports = { Ship, identifyShip, createGameboard: createGameboardCoords, Gameboard }