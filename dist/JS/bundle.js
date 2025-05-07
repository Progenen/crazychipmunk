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

eval("document.addEventListener('DOMContentLoaded', () => {\n\n})\n\nconst burger = document.querySelector(\".header__burger\");\nconst menu = document.querySelector(\".header__nav\");\nconst header = document.querySelector(\".header\");\n\nmenu.style.top = header.clientHeight + \"px\";\nburger.addEventListener(\"click\", () => {\n   if (burger.classList.contains(\"is-active\")) {\n       burger.classList.remove(\"is-active\");\n       menu.classList.remove(\"is-active\");\n       document.body.style.overflow = \"\";\n   } else {\n       burger.classList.add(\"is-active\");\n       menu.classList.add(\"is-active\");\n       document.body.style.overflow = \"hidden\";\n   }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

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