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

eval("function Ship(length) {\n  let hitsTaken = 0\n\n  const hit = () => {\n    ++hitsTaken\n  }\n  const isSunk = () => {\n    return length === hitsTaken\n  }\n  return {\n    length,\n    hit,\n    get hitsTaken() {\n      return hitsTaken\n    },\n    isSunk,\n  }\n}\n\nfunction createGameboard() {\n  const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  const numberCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']\n  let coords = []\n\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const element = {}\n      element.name = letterCoords[i].concat(numberCoords[j])\n      element.value = null\n      coords.push(element)\n    }\n  }\n  return coords\n}\n\nfunction identifyShip(shipType) {\n  return shipType.toLowerCase() === 'carrier'\n    ? Ship(5)\n    : shipType.toLowerCase() === 'battleship'\n    ? Ship(4)\n    : shipType.toLowerCase() === 'submarine'\n    ? Ship(3)\n    : shipType.toLowerCase() === 'destroyer'\n    ? Ship(2)\n    : (alert(\"A ship with this name doesn't exist\"), null)\n}\n\nfunction Gameboard() {\n  const coordinates = createGameboard()\n\n  const placeShip = (shipType, coord) => {\n    const ship = identifyShip(shipType)\n    placeShipOnCoordinate(ship, coord)\n  }\n\n  const placeShipOnCoordinate = (ship, coord) => {\n    coordinates.forEach((item) => {\n      if (item.name === coord) {\n        ship.value = coord\n        item.value = ship\n      }\n    })\n  }\n  return { placeShip, coordinates }\n}\n\nmodule.exports = { Ship, identifyShip, createGameboard, Gameboard }\n\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

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