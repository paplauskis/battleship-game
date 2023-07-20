const { identifyShip} = require('../src/index')

test('should correctly identify carrier ship', () => {
  const ship = identifyShip('carrier')
  expect(ship.length).toBe(5)
}) 

test('should correctly identify battleship', () => {
  const ship = identifyShip('battleship')
  expect(ship.length).toBe(4)
})

test('should correctly identify submarine ship', () => {
  const ship = identifyShip('submarine')
  expect(ship.length).toBe(3)
})

test('should correctly identify destroyer ship', () => {
  const ship = identifyShip('destroyer')
  expect(ship.length).toBe(2)
})