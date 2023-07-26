function Player() {
  return {
    attack: (enemyGameboard, chosenCoord) => {
      enemyGameboard.receiveAttack(chosenCoord)
    },
  }
}

function Computer() {
  function getComputerAttack(myGameboard) {
    const guess = Math.floor(Math.random() * 100)
    if (
      myGameboard.coordinates[guess].value === 'missed' ||
      myGameboard.coordinates[guess].value === 'hit'
    ) {
      getComputerAttack()
    } else return myGameboard.coordinates[guess].name
  }
  return {
    attack: (myGameboard) => {
      const guess = getComputerAttack(myGameboard)
      myGameboard.receiveAttack(guess)
    },
  }
}

module.exports = { Player, Computer }
