/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-methods.js":
/*!****************************!*\
  !*** ./src/DOM-methods.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Ship,\n  identifyShip,\n  createGameboard: createGameboardCoords,\n  Gameboard,\n  Player,\n  Computer,\n} = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\")\n\nconst playerGameboardDiv = document.querySelector('.player-gameboard')\nconst computerGameboardDiv = document.querySelector('.computer-gameboard')\nconst infoDiv = document.querySelector('.info-div')\n\nfunction createCoordinateDivs(coordinates, isPlayer) {\n  coordinates.forEach((coord, i = 0) => {\n    const div = document.createElement('div')\n    div.style.width = `${playerGameboardDiv.clientWidth / 10}px`\n    div.style.height = `${playerGameboardDiv.clientHeight / 10}px`\n    div.textContent = `${coord.name}`\n    div.name = coord.name\n    div.value = coord.value\n    div.classList.add(\n      i++,\n      isPlayer ? 'player-div' : 'computer-div',\n      'square-div'\n    )\n    if (!isPlayer) addClickEvents(div)\n    isPlayer ? playerGameboardDiv.append(div) : computerGameboardDiv.append(div)\n  })\n}\n\nfunction addClickEvents(div) {\n  div.addEventListener('click', () => {\n    console.log(div.name)\n  })\n}\n\nmodule.exports = { createCoordinateDivs }\n\n\n//# sourceURL=webpack://battleship-game/./src/DOM-methods.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Ship, Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\")\nconst { createCoordinateDivs } = __webpack_require__(/*! ./DOM-methods */ \"./src/DOM-methods.js\")\nconst { Player, Computer } = __webpack_require__(/*! ./player-computer */ \"./src/player-computer.js\")\nconst { selectLetterCoord, selectRandomNumber } = __webpack_require__(/*! ./helper-functions */ \"./src/helper-functions.js\")\n\nfunction togglePlayers(activePlayer, player, computer) {\n  activePlayer === player ? computer : player\n}\n\nfunction placeShipsOnCoords(gameboard) {\n  const letters = selectLetterCoord()\n  const numbers = selectRandomNumber()\n  gameboard.placeShip('carrier', letters[0] + numbers[0])\n  gameboard.placeShip('battleship', letters[1] + numbers[1])\n  gameboard.placeShip('submarine', letters[2] + numbers[2])\n  gameboard.placeShip('destroyer', letters[3] + numbers[3])\n}\n\nfunction Game() {\n  const player = Player()\n  const playerGameboard = Gameboard()\n  const computer = Computer()\n  const computerGameboard = Gameboard()\n  createCoordinateDivs(playerGameboard.coordinates, true)\n  createCoordinateDivs(computerGameboard.coordinates, false)\n  let activePlayer = player\n  placeShipsOnCoords(computerGameboard)\n  placeShipsOnCoords(playerGameboard)\n}\n\nmodule.exports = { Game, selectRandomNumber }\n\n\n//# sourceURL=webpack://battleship-game/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createGameboardCoords } = __webpack_require__(/*! ./helper-functions */ \"./src/helper-functions.js\")\n\nfunction Ship(length) {\n  let hitsTaken = 0\n\n  const hit = () => {\n    ++hitsTaken\n  }\n  const isSunk = () => {\n    return length === hitsTaken\n  }\n  return {\n    length,\n    hit,\n    get hitsTaken() {\n      return hitsTaken\n    },\n    isSunk,\n  }\n}\n\nfunction identifyShip(shipType) {\n  return shipType.toLowerCase() === 'carrier'\n    ? Ship(5)\n    : shipType.toLowerCase() === 'battleship'\n    ? Ship(4)\n    : shipType.toLowerCase() === 'submarine'\n    ? Ship(3)\n    : shipType.toLowerCase() === 'destroyer'\n    ? Ship(2)\n    : (alert(\"A ship with this name doesn't exist\"), null)\n}\n\nfunction Gameboard() {\n  const coordinates = createGameboardCoords()\n\n  const placeShip = (shipType, coord) => {\n    const ship = identifyShip(shipType)\n    placeShipOnCoordinate(ship, coord)\n  }\n\n  const placeShipOnCoordinate = (ship, coord, placedCells = 0) => {\n    if (!Array.isArray(ship.value)) {\n      ship.value = []\n    }\n\n    coordinates.forEach((item) => {\n      if (item.name === coord) {\n        ship.value.push(coord)\n        item.value = ship\n      }\n    })\n\n    if (ship.length + placedCells <= ship.length) {\n      let newCord = coord.substring(1)\n      for (let i = 2; i <= ship.length; i++) {\n        const newCoord = `${coord.substring(0, 1)}${--newCord}`\n        placeShipOnCoordinate(ship, newCoord, ++placedCells)\n      }\n    }\n  }\n\n  const searchForCoordinate = (chosenCoord) => {\n    for (let i = 0; i < coordinates.length; i++) {\n      if (chosenCoord == coordinates[i].name) return coordinates[i]\n    }\n  }\n\n  const receiveAttack = (chosenCoord) => {\n    const attackedCoord = searchForCoordinate(chosenCoord)\n    if (attackedCoord.value === null) {\n      attackedCoord.value = 'missed'\n    } else if (typeof attackedCoord.value === 'object') {\n      attackedCoord.value.hit()\n      if (attackedCoord.value.isSunk()) console.log('Ship has been sunk')\n      attackedCoord.value = 'hit'\n    } else console.log('Cannot hit the same coordinate twice!')\n  }\n\n  const checkIfAllShipsAreSunk = () => {\n    let remainingShipCoords = 0\n    coordinates.forEach((item) => {\n      if (typeof item.value === 'object' && item.value !== null)\n        remainingShipCoords++\n    })\n    return remainingShipCoords === 0\n  }\n\n  return {\n    placeShip,\n    coordinates,\n    receiveAttack,\n    checkIfAllShipsAreSunk,\n  }\n}\n\nmodule.exports = {\n  Ship,\n  identifyShip,\n  createGameboard: createGameboardCoords,\n  Gameboard,\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/gameboard.js?");

/***/ }),

/***/ "./src/helper-functions.js":
/*!*********************************!*\
  !*** ./src/helper-functions.js ***!
  \*********************************/
/***/ ((module) => {

eval("function selectLetterCoord() {\n  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  const carrierLetter = letterCoords\n    .splice(Math.floor(Math.random() * 10), 1)\n    .toString()\n  const battleshipLetter = letterCoords\n    .splice(Math.floor(Math.random() * 9), 1)\n    .toString()\n  const submarineLetter = letterCoords\n    .splice(Math.floor(Math.random() * 8), 1)\n    .toString()\n  const destroyerLetter = letterCoords\n    .splice(Math.floor(Math.random() * 7), 1)\n    .toString()\n  return [carrierLetter, battleshipLetter, submarineLetter, destroyerLetter]\n}\n\nfunction selectRandomNumber() {\n  const carrierCoord = (Math.floor(Math.random() * 5) + 5).toString()\n  const battleshipCoord = (Math.floor(Math.random() * 5) + 4).toString()\n  const submarineCoord = (Math.floor(Math.random() * 5) + 3).toString()\n  const destroyerCoord = (Math.floor(Math.random() * 5) + 2).toString()\n  return [carrierCoord, battleshipCoord, submarineCoord, destroyerCoord]\n}\n\nfunction createGameboardCoords() {\n  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  const numberCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']\n  const coords = []\n\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const element = {}\n      element.name = letterCoords[i].concat(numberCoords[j])\n      element.value = null\n      coords.push(element)\n    }\n  }\n  return coords\n}\n\nmodule.exports = {\n  selectLetterCoord,\n  selectRandomNumber,\n  createGameboardCoords,\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/helper-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const { Game } = require('./game')\nconst { createCoordinateDivs } = __webpack_require__(/*! ./DOM-methods */ \"./src/DOM-methods.js\")\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nGame()\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/player-computer.js":
/*!********************************!*\
  !*** ./src/player-computer.js ***!
  \********************************/
/***/ ((module) => {

eval("function Player() {\n  return {\n    attack: (enemyGameboard, chosenCoord) => {\n      enemyGameboard.receiveAttack(chosenCoord)\n    },\n  }\n}\n\nfunction Computer() {\n  function getComputerAttack(myGameboard) {\n    const guess = Math.floor(Math.random() * 100)\n    if (\n      myGameboard.coordinates[guess].value === 'missed' ||\n      myGameboard.coordinates[guess].value === 'hit'\n    ) {\n      getComputerAttack()\n    } else return myGameboard.coordinates[guess].name\n  }\n  return {\n    attack: (myGameboard) => {\n      const guess = getComputerAttack(myGameboard)\n      myGameboard.receiveAttack(guess)\n    },\n  }\n}\n\nmodule.exports = { Player, Computer }\n\n\n//# sourceURL=webpack://battleship-game/./src/player-computer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;