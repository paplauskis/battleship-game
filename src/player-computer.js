function Player() {
  return {
    attack: (enemyGameboard, chosenCoord) => {
      enemyGameboard.receiveAttack(chosenCoord)
    },
  }
}

function Computer() {
  return {
    attack: (myGameboard, chosenCoord) => {
      myGameboard.receiveAttack(chosenCoord)
    },
  }
}

module.exports = { Player, Computer }
