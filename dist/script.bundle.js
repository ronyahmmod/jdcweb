/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/stickynav.js":
/*!************************************!*\
  !*** ./js/components/stickynav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStickyNavObserver\": () => (/* binding */ createStickyNavObserver)\n/* harmony export */ });\nconst createStickyNavObserver = (\r\n  root,\r\n  rootMargin,\r\n  treshHold,\r\n  navbar,\r\n  cssClass\r\n) => {\r\n  const observerAPI = new IntersectionObserver(\r\n    function (entries, observer) {\r\n      const [entry] = entries;\r\n      if (!entry.isIntersecting) {\r\n        navbar.classList.add(cssClass);\r\n      } else {\r\n        navbar.classList.remove(cssClass);\r\n      }\r\n    },\r\n    {\r\n      root: root,\r\n      rootMargin: rootMargin,\r\n      threshold: treshHold,\r\n    }\r\n  );\r\n\r\n  return observerAPI;\r\n};\r\n\n\n//# sourceURL=webpack://college-website/./js/components/stickynav.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_stickynav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stickynav */ \"./js/components/stickynav.js\");\n\r\n\r\nconst navbar = document.querySelector('.navbar');\r\nconst story = document.querySelector('.story');\r\nconst banner = document.querySelector('.banner');\r\n\r\nconst stickyNavObserver = (0,_components_stickynav__WEBPACK_IMPORTED_MODULE_0__.createStickyNavObserver)(\r\n  null,\r\n  '0px',\r\n  0,\r\n  navbar,\r\n  'navbar--sticky'\r\n);\r\n\r\nstickyNavObserver.observe(banner);\r\n\n\n//# sourceURL=webpack://college-website/./js/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;