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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("function Ship(length) {\n  let hitsTaken = 0\n\n  const hit = () => {\n    ++hitsTaken\n  }\n  const isSunk = () => {\n    return length === hitsTaken\n  }\n  return {\n    length,\n    hit,\n    get hitsTaken() {\n      return hitsTaken\n    },\n    isSunk,\n  }\n}\n\nfunction createGameboardCoords() {\n  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  const numberCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']\n  const coords = []\n\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const element = {}\n      element.name = letterCoords[i].concat(numberCoords[j])\n      element.value = null\n      coords.push(element)\n    }\n  }\n  return coords\n}\n\nfunction identifyShip(shipType) {\n  return shipType.toLowerCase() === 'carrier'\n    ? Ship(5)\n    : shipType.toLowerCase() === 'battleship'\n    ? Ship(4)\n    : shipType.toLowerCase() === 'submarine'\n    ? Ship(3)\n    : shipType.toLowerCase() === 'destroyer'\n    ? Ship(2)\n    : (alert(\"A ship with this name doesn't exist\"), null)\n}\n\nfunction Gameboard() {\n  const coordinates = createGameboardCoords()\n\n  const placeShip = (shipType, coord) => {\n    const ship = identifyShip(shipType)\n    \n    if (checkIfShipFits(ship, coord)) {\n      placeShipOnCoordinate(ship, coord)\n    } else console.log(\"ship doesn't fit in desired coordinate\")\n  }\n  \n  const checkIfShipFits = (ship, coord) => {\n    return ship.length <= coord.substring(1)\n  }\n  \n  const placeShipOnCoordinate = (ship, coord, placedCells = 0) => {\n    if (!Array.isArray(ship.value)) {\n      ship.value = []\n    }\n    \n    coordinates.forEach((item) => {\n      if (item.name === coord) {\n        ship.value.push(coord)\n        item.value = ship\n      }\n    })\n    \n    if (ship.length + placedCells <= ship.length) {\n      let newCord = coord.substring(1)\n      for (let i = 2; i <= ship.length; i++) {\n        const newCoord = `${coord.substring(0, 1)}${--newCord}`\n        placeShipOnCoordinate(ship, newCoord, ++placedCells)\n      }\n    } \n  }\n\n  function searchForCoordinate(chosenCoord) {\n    for (let i = 0; i < coordinates.length; i++) {\n      if (chosenCoord === coordinates[i].name)\n        return coordinates[i]\n    }\n  }\n\n  const receiveAttack = (chosenCoord) => {\n    const attackedCoord = searchForCoordinate(chosenCoord)\n    if (attackedCoord.value === null) {\n      attackedCoord.value = 'missed'\n    } else if (typeof attackedCoord.value === 'object'){\n      attackedCoord.value.hit()\n      if (attackedCoord.value.isSunk()) console.log('Ship has been sunk')\n      attackedCoord.value = 'hit'\n    } else alert('Cannot hit the same coordinate twice!')\n\n  }\n\n  const checkIfAllShipsAreSunk = () => {\n    let remainingShipCoords = 0;\n    coordinates.forEach(item => {\n      if(typeof item.value === 'object' && item.value !== null)\n        remainingShipCoords++\n    })\n    if (remainingShipCoords === 0)\n      return 'all ships have been sunk'\n  }\n\n  return { placeShip, coordinates, receiveAttack, checkIfAllShipsAreSunk }\n}\n\n// const myGameboard = Gameboard()\n// myGameboard.placeShip('submarine', 'a4')\n// myGameboard.placeShip('destroyer', 'c4')\n// myGameboard.placeShip('battleship', 'c10')\n// myGameboard.placeShip('carrier', 'i8')\n// myGameboard.receiveAttack('a5')\n// myGameboard.receiveAttack('a4')\n// console.log(myGameboard.checkIfAllShipsAreSunk())\n// console.log(myGameboard.coordinates)\nmodule.exports = { Ship, identifyShip, createGameboard: createGameboardCoords, Gameboard }\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;