const { Player, Computer, Gameboard } = require('../src/index')

test("player can attack computer's gameboard", () => {
  const computerGameboard = Gameboard()
  const player = Player()

  computerGameboard.placeShip('battleship', 'c9')
  computerGameboard.placeShip('destroyer', 'j3')

  const updatedCoordinates = computerGameboard.coordinates

  player.attack(computerGameboard, 'c9')
  player.attack(computerGameboard, 'c6')
  player.attack(computerGameboard, 'c5')
  player.attack(computerGameboard, 'c10')
  player.attack(computerGameboard, 'j3')
  player.attack(computerGameboard, 'j2')
  player.attack(computerGameboard, 'j1')
  player.attack(computerGameboard, 'j4')

  expect(updatedCoordinates[28].value).toMatch('hit')
  expect(updatedCoordinates[25].value).toMatch('hit')
  expect(updatedCoordinates[24].value).toMatch('missed')
  expect(updatedCoordinates[29].value).toMatch('missed')
  expect(updatedCoordinates[92].value).toMatch('hit')
  expect(updatedCoordinates[91].value).toMatch('hit')
  expect(updatedCoordinates[90].value).toMatch('missed')
  expect(updatedCoordinates[93].value).toMatch('missed')
})

test("computer can attack player's gameboard", () => {
  const playerGameboard = Gameboard()
  const computer = Computer()

  playerGameboard.placeShip('carrier', 'f5')
  playerGameboard.placeShip('submarine', 'g10')

  const updatedCoordinates = playerGameboard.coordinates

  let mockMath = Object.create(global.Math)
  mockMath.random = () => 0.5
  global.Math = mockMath

  computer.attack(playerGameboard)
  expect(updatedCoordinates[50].value).toMatch('hit')

  mockMath.random = () => 0.52
  computer.attack(playerGameboard)
  expect(updatedCoordinates[52].value).toMatch('hit')

  mockMath.random = () => 0.55
  computer.attack(playerGameboard)
  expect(updatedCoordinates[55].value).toMatch('missed')

  mockMath.random = () => 0.69
  computer.attack(playerGameboard)
  expect(updatedCoordinates[69].value).toMatch('hit')

  mockMath.random = () => 0.67
  computer.attack(playerGameboard)
  expect(updatedCoordinates[67].value).toMatch('hit')

  mockMath.random = () => 0.64
  computer.attack(playerGameboard)
  expect(updatedCoordinates[64].value).toMatch('missed')

  mockMath.random = () => 0.7
  computer.attack(playerGameboard)
  expect(updatedCoordinates[70].value).toMatch('missed')
})
