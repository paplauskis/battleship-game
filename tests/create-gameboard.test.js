const { createGameboard } = require('../src/index')

const gameboard = createGameboard()

test('should be 100 items long', () => {
  expect(gameboard.length).toBe(100)
}) 

test('first item should be a1', () => {
  expect(gameboard[0].name).toBe('a1')
}) 

test('last item should be j10', () => {
  expect(gameboard[99].name).toBe('j10')
}) 

test('36th item should be d7', () => {
  expect(gameboard[36].name).toBe('d7')
}) 

test('78th item should be h9', () => {
  expect(gameboard[78].name).toBe('h9')
}) 

test('all items should have a value of null', () => {
  expect(gameboard[2].value).toBe(null)

  expect(gameboard[12].value).toBe(null)

  expect(gameboard[33].value).toBe(null)

  expect(gameboard[65].value).toBe(null)

  expect(gameboard[87].value).toBe(null)
}) 
