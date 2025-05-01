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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n})\r\n\r\nconst burger = document.querySelector(\".header__burger\"),\r\n    close = document.querySelector(\".header__menu-close\"),\r\n    menu = document.querySelector(\".header__menu\");\r\n\r\nburger.addEventListener(\"click\", () => {\r\n    menu.classList.add(\"header__menu_active\");\r\n    document.body.style.overflow = \"hidden\";\r\n});\r\n\r\nclose.addEventListener(\"click\", () => {\r\n    menu.classList.remove(\"header__menu_active\");\r\n    document.body.style.overflow = \"\";\r\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;