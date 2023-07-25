const { Ship } = require('../src/index')

test('should correctly tack hits taken', () => {
  const myShip = Ship(3)

  expect(myShip.hitsTaken).toBe(0)

  myShip.hit()
  expect(myShip.hitsTaken).toBe(1)

  myShip.hit()
  expect(myShip.hitsTaken).toBe(2)

  myShip.hit()
  expect(myShip.hitsTaken).toBe(3)
})

test('should correctly track if ship is sunk', () => {
  const myShip = Ship(4)

  expect(myShip.isSunk()).toBe(false)

  myShip.hit()
  expect(myShip.isSunk()).toBe(false)

  myShip.hit()
  expect(myShip.isSunk()).toBe(false)

  myShip.hit()
  expect(myShip.isSunk()).toBe(false)

  myShip.hit()
  expect(myShip.isSunk()).toBe(true)
})
