const { Gameboard } = require('../src/gameboard')

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

  expect(updatedCoordinates[22].value).not.toBeNull()

  expect(updatedCoordinates[41].value).not.toBeNull()

  expect(updatedCoordinates[50].value).not.toBeNull()

  expect(updatedCoordinates[90].value).not.toBeNull()
})

test('should know if attacked coordinate is not a ship', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('battleship', 'c5')
  gameboard.placeShip('submarine', 'f8')

  gameboard.receiveAttack('c6')
  gameboard.receiveAttack('c1')
  gameboard.receiveAttack('f5')
  gameboard.receiveAttack('f9')
  gameboard.receiveAttack('i8')
  gameboard.receiveAttack('g7')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[25].value).toBe('missed')

  expect(updatedCoordinates[20].value).toBe('missed')

  expect(updatedCoordinates[54].value).toBe('missed')

  expect(updatedCoordinates[58].value).toBe('missed')

  expect(updatedCoordinates[87].value).toBe('missed')

  expect(updatedCoordinates[66].value).toBe('missed')
})

test('should know if attacked coordinate is a ship', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('battleship', 'a5')
  gameboard.placeShip('submarine', 'i10')

  gameboard.receiveAttack('a2')
  gameboard.receiveAttack('a3')
  gameboard.receiveAttack('a4')
  gameboard.receiveAttack('a5')
  gameboard.receiveAttack('i8')
  gameboard.receiveAttack('i9')
  gameboard.receiveAttack('i10')

  const updatedCoordinates = gameboard.coordinates

  expect(updatedCoordinates[1].value).toBe('hit')

  expect(updatedCoordinates[2].value).toBe('hit')

  expect(updatedCoordinates[3].value).toBe('hit')

  expect(updatedCoordinates[4].value).toBe('hit')

  expect(updatedCoordinates[87].value).toBe('hit')

  expect(updatedCoordinates[88].value).toBe('hit')

  expect(updatedCoordinates[89].value).toBe('hit')
})

test('should correctly check if all ships have been sunk', () => {
  const gameboard = Gameboard()

  gameboard.placeShip('battleship', 'a5')
  gameboard.placeShip('submarine', 'i10')

  expect(gameboard.checkIfAllShipsAreSunk()).toBe(false)

  gameboard.receiveAttack('a5')
  gameboard.receiveAttack('a4')
  gameboard.receiveAttack('a3')

  expect(gameboard.checkIfAllShipsAreSunk()).toBe(false)

  gameboard.receiveAttack('a2')

  expect(gameboard.checkIfAllShipsAreSunk()).toBe(false)

  gameboard.receiveAttack('i10')
  gameboard.receiveAttack('i9')
  gameboard.receiveAttack('i8')

  expect(gameboard.checkIfAllShipsAreSunk()).toBe(true)
})
