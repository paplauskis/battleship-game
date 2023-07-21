const { Gameboard } = require('../src/index')

test('should correctly place carrier on coordinates', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('carrier', 'b5')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[10].value).toMatchObject({
    length: 5,
  })

  expect(updatedCoordinates[11].value).toMatchObject({
    length: 5,
  })

  expect(updatedCoordinates[12].value).toMatchObject({
    length: 5,
  })

  expect(updatedCoordinates[13].value).toMatchObject({
    length: 5,
  })

  expect(updatedCoordinates[14].value).toMatchObject({
    length: 5,
  })
})

test('should correctly place battleship on coordinates', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('battleship', 'a4')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[0].value).toMatchObject({
    length: 4,
  })

  expect(updatedCoordinates[1].value).toMatchObject({
    length: 4,
  })

  expect(updatedCoordinates[2].value).toMatchObject({
    length: 4,
  })

  expect(updatedCoordinates[3].value).toMatchObject({
    length: 4,
  })
})

test('should correctly place submarine on coordinates', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('submarine', 'j10')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[97].value).toMatchObject({
    length: 3,
  })

  expect(updatedCoordinates[98].value).toMatchObject({
    length: 3,
  })

  expect(updatedCoordinates[99].value).toMatchObject({
    length: 3,
  })
})

test('should correctly place destroyer on coordinates', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('destroyer', 'f9')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[58].value).toMatchObject({
    length: 2,
  })

  expect(updatedCoordinates[57].value).toMatchObject({
    length: 2,
  })
})

test('should not place ships if they go out of the board (too high)', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('carrier', 'c3')
  gameboard.placeShip('battleship', 'e2')
  gameboard.placeShip('submarine', 'f1')
  gameboard.placeShip('destroyer', 'j1')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[22].value).toBeNull()

  expect(updatedCoordinates[41].value).toBeNull()

  expect(updatedCoordinates[50].value).toBeNull()

  expect(updatedCoordinates[90].value).toBeNull()
})
