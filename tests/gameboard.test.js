const { Gameboard, createGameboard, identifyShip } = require('../src/index')

test('should place the ship correctly on the gameboard', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('carrier', 'b2')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[11].value).toMatchObject({
    length: 5,
    hitsTaken: 0,
    isSunk: expect.any(Function),
  })
})

test('should place different ships correctly on the gameboard', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('battleship', 'a1')
  gameboard.placeShip('submarine', 'j10')
  gameboard.placeShip('destroyer', 'f9')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[0].value).toMatchObject({
    length: 4,
    hitsTaken: 0,
    isSunk: expect.any(Function),
  })

  expect(updatedCoordinates[99].value).toMatchObject({
    length: 3,
    hitsTaken: 0,
    isSunk: expect.any(Function),
  })

  expect(updatedCoordinates[58].value).toMatchObject({
    length: 2,
    hitsTaken: 0,
    isSunk: expect.any(Function),
  })
})
