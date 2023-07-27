function selectLetterCoord() {
  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const carrierLetter = letterCoords
    .splice(Math.floor(Math.random() * 10), 1)
    .toString()
  const battleshipLetter = letterCoords
    .splice(Math.floor(Math.random() * 9), 1)
    .toString()
  const submarineLetter = letterCoords
    .splice(Math.floor(Math.random() * 8), 1)
    .toString()
  const destroyerLetter = letterCoords
    .splice(Math.floor(Math.random() * 7), 1)
    .toString()
  return [carrierLetter, battleshipLetter, submarineLetter, destroyerLetter]
}

function selectRandomNumber() {
  const carrierCoord = (Math.floor(Math.random() * 5) + 5).toString()
  const battleshipCoord = (Math.floor(Math.random() * 5) + 4).toString()
  const submarineCoord = (Math.floor(Math.random() * 5) + 3).toString()
  const destroyerCoord = (Math.floor(Math.random() * 5) + 2).toString()
  return [carrierCoord, battleshipCoord, submarineCoord, destroyerCoord]
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

module.exports = {
  selectLetterCoord,
  selectRandomNumber,
  createGameboardCoords,
}
