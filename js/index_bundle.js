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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ \"./src/js/language.js\");\n/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://nft_test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/language.js":
/*!****************************!*\
  !*** ./src/js/language.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let language_import = null;\nwindow.addEventListener('load', function () {\n  init();\n});\n\nfunction init() {\n  const current_language = localStorage.getItem('language');\n\n  if (!current_language) {\n    localStorage.setItem('language', 'english');\n    language_import = __webpack_require__(/*! ../assets/languages/english.json */ \"./src/assets/languages/english.json\");\n  } else {\n    language_import = __webpack_require__(\"./src/assets/languages sync recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${current_language}.json`);\n  }\n\n  selectLanguage(current_language);\n  addOtherContent();\n  addExperience();\n}\n\nfunction selectLanguage(current_language) {\n  const language_element = document.querySelector('.language-selector-js');\n  let button = document.createElement('button');\n  button.className = 'language-selector-js__button';\n  button.innerText = current_language === 'english' || !current_language ? 'turkey' : 'english';\n  language_element.appendChild(button);\n  button.addEventListener('click', function () {\n    localStorage.setItem('language', this.textContent);\n    location.reload();\n  });\n}\n\nfunction addOtherContent() {\n  let elements = {\n    \"my_name\": document.querySelector('.header__name'),\n    \"job_title\": document.querySelector('.header__job-title'),\n    \"contact_title\": document.querySelector('.section-contact__title'),\n    \"skills_title\": document.querySelector('.section-skills .sidebar__title'),\n    \"experience_title\": document.querySelector('.section-experience__title')\n  };\n\n  for (const element in elements) {\n    elements[element].innerHTML = language_import['other'][element];\n  }\n}\n\nfunction addExperience() {\n  const parent_target = document.querySelector('.experience-js');\n\n  for (let experience of language_import['experience']) {\n    parent_target.innerHTML += htmlTemplate(experience['job_name'], experience['company'], experience['date'], experience['location'], experience['responsibility']);\n  }\n}\n\nfunction htmlTemplate(job_name, company, date, location, responsibility) {\n  let resp_html = '';\n\n  for (let resp of responsibility) {\n    resp_html += `<li class=\"experience-list__item\">${resp}</li>`;\n  }\n\n  return `\n        <ul class=\"experience-list\">\n                <li class=\"experience-list__job-title\">${job_name}</li>\n                <li class=\"experience-list__company\">${company}</li>\n                <li class=\"experience-list__info-wrapper\">\n                    <div class=\"experience-list__date\">\n                        <div class=\"experience-list__start-date\">${date.start}</div>\n                        <span>-</span>\n                        <div class=\"experience-list__end-date\">${date.end}</div>\n                    </div>\n                    <div class=\"experience-list__location\">${location}</div>\n                </li>\n                <ul class=\"experience-list__responsibility\">${resp_html}</ul>\n            </ul>\n    `;\n}\n\n//# sourceURL=webpack://nft_test/./src/js/language.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nft_test/./src/styles/main.scss?");

/***/ }),

/***/ "./src/assets/languages sync recursive ^\\.\\/.*\\.json$":
/*!***************************************************!*\
  !*** ./src/assets/languages/ sync ^\.\/.*\.json$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./english.json\": \"./src/assets/languages/english.json\",\n\t\"./turkey.json\": \"./src/assets/languages/turkey.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/languages sync recursive ^\\\\.\\\\/.*\\\\.json$\";\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/_sync_^\\.\\/.*\\.json$?");

/***/ }),

/***/ "./src/assets/languages/english.json":
/*!*******************************************!*\
  !*** ./src/assets/languages/english.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"other\":{\"head_title\":\"\",\"my_name\":\"Kirill Ananev\",\"job_title\":\"Front-End / Back-End Developer\",\"contact_title\":\"Contact\",\"skills_title\":\"Skills\",\"experience_title\":\"Work Experience\"},\"experience\":[{\"job_name\":\"Front-End/Back-End Developer\",\"company\":\"Remote (creotivity.com.ua)\",\"date\":{\"start\":\"2019\",\"end\":\"2021\"},\"location\":\"Russia & Ukraine\",\"responsibility\":[\"Development bots for Telegram App\",\"Development: parsers, landing pages, web-apps\",\"Project refinement\",\"Setting VPS servers\"]},{\"job_name\":\"Front-End/Back-End Developer\",\"company\":\"Office (info-proekt.ru)\",\"date\":{\"start\":\"2018\",\"end\":\"2019\"},\"location\":\"Russia\",\"responsibility\":[\"Development adaptive web-application\",\"Converting sites to 1C-Bitrix\",\"Front-End development: landing, promo and e-shop site\",\"Project refinement\"]},{\"job_name\":\"Front-End Developer\",\"company\":\"Remote\",\"date\":{\"start\":\"2017\",\"end\":\"2018\"},\"location\":\"Russia\",\"responsibility\":[\"Development simple CMS (PHP)\",\"Converting HTML sites to CMS WordPress\",\"Development plugins for CMS WordPress\",\"Project refinement\"]},{\"job_name\":\"Assistant Web-Developer\",\"company\":\"Remote\",\"date\":{\"start\":\"2015\",\"end\":\"2016\"},\"location\":\"Russia\",\"responsibility\":[\"Front-end development\",\"Converting HTML sites to CMS WordPress\",\"Project refinement\"]}]}');\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/english.json?");

/***/ }),

/***/ "./src/assets/languages/turkey.json":
/*!******************************************!*\
  !*** ./src/assets/languages/turkey.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"other\":{\"head_title\":\"\",\"my_name\":\"Kirill Ananev\",\"job_title\":\"Front-End / Back-End Geliştirici\",\"contact_title\":\"İletişim\",\"skills_title\":\"Yetenekler\",\"experience_title\":\"İş deneyimi\"},\"experience\":[{\"job_name\":\"Front-End/Back-End geliştirici\",\"company\":\"Tele çalışma (creotivity.com.ua)\",\"date\":{\"start\":\"2019\",\"end\":\"2021\"},\"location\":\"Rusya & Ukrayna\",\"responsibility\":[\"Telegram Uygulaması için geliştirme botları\",\"Geliştirme: ayrıştırıcılar, açılış sayfaları, web uygulamaları\",\"Proje iyileştirme\",\"VPS sunucularını ayarlama\"]},{\"job_name\":\"Front-End/Back-End geliştirici\",\"company\":\"Ofis (info-proekt.ru)\",\"date\":{\"start\":\"2018\",\"end\":\"2019\"},\"location\":\"Rusya\",\"responsibility\":[\"Geliştirmeye uyarlanabilir web uygulaması\",\"Siteleri 1C-Bitrix\\'e dönüştürme\",\"Ön Uç geliştirme: iniş, promosyon ve e-mağaza sitesi\",\"Proje iyileştirme\"]},{\"job_name\":\"Front-End geliştirici\",\"company\":\"Tele çalışma\",\"date\":{\"start\":\"2017\",\"end\":\"2018\"},\"location\":\"Rusya\",\"responsibility\":[\"Geliştirme basit CMS (PHP)\",\"HTML sitelerini CMS WordPress\\'e dönüştürme\",\"CMS WordPress için geliştirme eklentileri\",\"Proje iyileştirme\"]},{\"job_name\":\"Asistan Web-Geliştirici\",\"company\":\"Tele çalışma\",\"date\":{\"start\":\"2015\",\"end\":\"2016\"},\"location\":\"Rusya\",\"responsibility\":[\"Front-end gelişim\",\"HTML sitelerini CMS WordPress\\'e dönüştürme\",\"Proje iyileştirme\"]}]}');\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/turkey.json?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;