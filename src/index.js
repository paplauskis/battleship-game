function Ship(length) {
  let hitsTaken = 0

  const hit = () => {
    ++hitsTaken
  }
  const isSunk = () => {
    return length === hitsTaken
  }
  return {
    hit,
    get hitsTaken() {
      return hitsTaken
    },
    isSunk,
  }
}

module.exports = Ship
