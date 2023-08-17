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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"📞 07046193975\";\n\n  const address = document.createElement(\"p\");\n  address.textContent = \"🏠 Okpala Umuolu Ezimba Emii, Owerri-north\";\n\n  const restaurantLocation = document.createElement(\"img\");\n  restaurantLocation.src = \"images/background.jpg\";\n  restaurantLocation.alt = \"Nkem's Kitchen location\";\n\n  contact.appendChild(phoneNumber);\n  contact.appendChild(address);\n  contact.appendChild(restaurantLocation);\n\n  return contact;\n}\n\nfunction loadContact() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://resturant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const chefImage = document.createElement(\"img\");\n  const pictureContainer = document.createElement(\"picture\");\n  const source = document.createElement(\"source\");\n  source.srcset = \"images/background.jpg\";\n  source.media = \"(min-width:600px)\";\n  chefImage.src = \"images/nkems.jpeg\";\n  chefImage.alt = \"Chef image\";\n  pictureContainer.appendChild(source);\n  pictureContainer.appendChild(chefImage);\n\n  home.appendChild(createParagraph(\"Best Pizza in Owerri Town\"));\n  home.appendChild(createParagraph(\"Made with passion since 2022\"));\n  home.appendChild(pictureContainer);\n  home.appendChild(createParagraph(\"Order online or visit us.\"));\n\n  return home;\n}\n\nfunction createParagraph(text) {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n}\n\nfunction loadHome() {\n  const main = document.getElementById(\"main\");\n\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://resturant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://resturant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.appendChild(\n    createMenuItem(\n      \"Salsiccia\",\n      \"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Gamberi\",\n      \"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Pepe\",\n      \"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Disgustoso\",\n      \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Colorato\",\n      \"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Pomodoro\",\n      \"Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Crema\",\n      \"White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Carne\",\n      \"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli\"\n    )\n  );\n\n  return menu;\n}\n\nfunction createMenuItem(name, description) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"menu-item\");\n  const foodName = document.createElement(\"h2\");\n  const foodDescription = document.createElement(\"p\");\n  const foodImage = document.createElement(\"img\");\n\n  foodName.textContent = name;\n  foodDescription.textContent = description;\n  foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;\n  foodImage.alt = `${name}`;\n\n  menuItem.appendChild(foodImage);\n  menuItem.appendChild(foodName);\n  menuItem.appendChild(foodDescription);\n\n  return menuItem;\n}\n\nfunction loadMenu() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://resturant_page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n\n  const resturantName = document.createElement(\"h1\");\n  resturantName.textContent = \"Nkem's Kitchen\";\n  resturantName.classList.add(\"resturant-name\");\n\n  header.appendChild(resturantName);\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n\n  const homeButton = document.createElement(\"button\");\n  homeButton.classList.add(\"button-nav\");\n  homeButton.textContent = \"Home\";\n  homeButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(homeButton);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  const menuButton = document.createElement(\"button\");\n  menuButton.classList.add(\"button-nav\");\n  menuButton.textContent = \"Menu\";\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  const contactButton = document.createElement(\"button\");\n  contactButton.classList.add(\"button-nav\");\n  contactButton.textContent = \"Contact\";\n  contactButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(contactButton);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  nav.appendChild(homeButton);\n  nav.appendChild(menuButton);\n  nav.appendChild(contactButton);\n\n  return nav;\n}\n\nfunction setActiveButton(params) {\n  const buttons = document.querySelectorAll(\".button-nav\");\n\n  buttons.forEach((button) => {\n    if (button !== this) {\n      button.classList.remove(\"active\");\n    }\n  });\n\n  params.classList.add(\"active\");\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const copyright = document.createElement(\"p\");\n  copyright.textContent = `Copyright © ${new Date().getFullYear()} kaylayshi`;\n\n  footer.appendChild(copyright);\n  return footer;\n}\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n\n  setActiveButton(document.querySelector(\".button-nav\"));\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n\n//# sourceURL=webpack://resturant_page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;