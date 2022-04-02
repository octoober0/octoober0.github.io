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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar language_import = null;\nwindow.addEventListener('load', function () {\n  init();\n});\n\nfunction init() {\n  var current_language = localStorage.getItem('content_language');\n\n  if (!current_language) {\n    localStorage.setItem('content_language', 'en');\n    language_import = __webpack_require__(/*! ../assets/languages/en.json */ \"./src/assets/languages/en.json\");\n  } else {\n    language_import = __webpack_require__(\"./src/assets/languages sync recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(current_language, \".json\"));\n    document.querySelector('html').setAttribute('lang', current_language);\n  }\n\n  selectLanguage(current_language);\n  addOtherContent();\n  addExperience();\n}\n\nfunction selectLanguage(current_language) {\n  var language_element = document.querySelector('.language-selector-js');\n  var button = document.createElement('button'); // Custom button\n\n  button.setAttribute('data-next_language', current_language === 'en' || !current_language ? 'tr' : 'en');\n  button.className = 'language-selector-js__button';\n  button.innerText = current_language === 'en' || !current_language ? 'turkish' : 'english';\n  language_element.appendChild(button);\n  button.addEventListener('click', function () {\n    localStorage.setItem('content_language', this.dataset.next_language);\n    location.reload();\n  });\n}\n\nfunction addOtherContent() {\n  var elements = {\n    \"my_name\": document.querySelector('.header__name'),\n    \"job_title\": document.querySelector('.header__job-title'),\n    \"contact_title\": document.querySelector('.section-contact__title'),\n    \"skills_title\": document.querySelector('.section-skills .sidebar__title'),\n    \"experience_title\": document.querySelector('.section-experience__title')\n  };\n\n  for (var element in elements) {\n    elements[element].innerHTML = language_import['other'][element];\n  }\n}\n\nfunction addExperience() {\n  var parent_target = document.querySelector('.experience-js');\n\n  var _iterator = _createForOfIteratorHelper(language_import['experience']),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var experience = _step.value;\n      parent_target.innerHTML += htmlTemplate(experience['job_name'], experience['company'], experience['date'], experience['location'], experience['responsibility']);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction htmlTemplate(job_name, company, date, location, responsibility) {\n  var resp_html = '';\n\n  var _iterator2 = _createForOfIteratorHelper(responsibility),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var resp = _step2.value;\n      resp_html += \"<li class=\\\"experience-list__item\\\">\".concat(resp, \"</li>\");\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return \"\\n        <ul class=\\\"experience-list\\\">\\n                <li class=\\\"experience-list__job-title\\\">\".concat(job_name, \"</li>\\n                <li class=\\\"experience-list__company\\\">\").concat(company, \"</li>\\n                <li class=\\\"experience-list__info-wrapper\\\">\\n                    <div class=\\\"experience-list__date\\\">\\n                        <div class=\\\"experience-list__start-date\\\">\").concat(date.start, \"</div>\\n                        <span>-</span>\\n                        <div class=\\\"experience-list__end-date\\\">\").concat(date.end, \"</div>\\n                    </div>\\n                    <div class=\\\"experience-list__location\\\">\").concat(location, \"</div>\\n                </li>\\n                <ul class=\\\"experience-list__responsibility\\\">\").concat(resp_html, \"</ul>\\n            </ul>\\n    \");\n}\n\n//# sourceURL=webpack://nft_test/./src/js/language.js?");

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

eval("var map = {\n\t\"./en.json\": \"./src/assets/languages/en.json\",\n\t\"./tr.json\": \"./src/assets/languages/tr.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/languages sync recursive ^\\\\.\\\\/.*\\\\.json$\";\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/_sync_^\\.\\/.*\\.json$?");

/***/ }),

/***/ "./src/assets/languages/en.json":
/*!**************************************!*\
  !*** ./src/assets/languages/en.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"other\":{\"head_title\":\"\",\"my_name\":\"Kirill Ananev\",\"job_title\":\"Front-End / Back-End Developer\",\"contact_title\":\"Contact\",\"skills_title\":\"Skills\",\"experience_title\":\"Work Experience\"},\"experience\":[{\"job_name\":\"Front-End/Back-End Developer\",\"company\":\"remote\",\"date\":{\"start\":\"2019\",\"end\":\"2021\"},\"location\":\"\",\"responsibility\":[\"Development bots for Telegram App\",\"Development: parsers, landing pages, web-apps\",\"Project refinement\",\"Setting VPS servers\"]},{\"job_name\":\"Front-End/Back-End Developer\",\"company\":\"office\",\"date\":{\"start\":\"2018\",\"end\":\"2019\"},\"location\":\"\",\"responsibility\":[\"Development adaptive web-application\",\"Converting sites to 1C-Bitrix\",\"Front-End development: landing, promo and e-shop site\",\"Project refinement\"]},{\"job_name\":\"Front-End Developer\",\"company\":\"remote\",\"date\":{\"start\":\"2017\",\"end\":\"2018\"},\"location\":\"\",\"responsibility\":[\"Development simple CMS (PHP)\",\"Converting HTML sites to CMS WordPress\",\"Development plugins for CMS WordPress\",\"Project refinement\"]},{\"job_name\":\"Assistant Web-Developer\",\"company\":\"remote\",\"date\":{\"start\":\"2015\",\"end\":\"2016\"},\"location\":\"\",\"responsibility\":[\"Front-end development\",\"Converting HTML sites to CMS WordPress\",\"Project refinement\"]}]}');\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/en.json?");

/***/ }),

/***/ "./src/assets/languages/tr.json":
/*!**************************************!*\
  !*** ./src/assets/languages/tr.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"other\":{\"head_title\":\"\",\"my_name\":\"Kirill Ananev\",\"job_title\":\"Front-End / Back-End Geliştirici\",\"contact_title\":\"İletişim\",\"skills_title\":\"Yetenekler\",\"experience_title\":\"İş deneyimi\"},\"experience\":[{\"job_name\":\"Front-End/Back-End geliştirici\",\"company\":\"tele çalışma\",\"date\":{\"start\":\"2019\",\"end\":\"2021\"},\"location\":\"\",\"responsibility\":[\"Telegram Uygulaması için geliştirme botları\",\"Geliştirme: ayrıştırıcılar, açılış sayfaları, web uygulamaları\",\"Proje iyileştirme\",\"VPS sunucularını ayarlama\"]},{\"job_name\":\"Front-End/Back-End geliştirici\",\"company\":\"ofis\",\"date\":{\"start\":\"2018\",\"end\":\"2019\"},\"location\":\"\",\"responsibility\":[\"Geliştirmeye uyarlanabilir web uygulaması\",\"Siteleri 1C-Bitrix\\'e dönüştürme\",\"Ön Uç geliştirme: iniş, promosyon ve e-mağaza sitesi\",\"Proje iyileştirme\"]},{\"job_name\":\"Front-End geliştirici\",\"company\":\"tele çalışma\",\"date\":{\"start\":\"2017\",\"end\":\"2018\"},\"location\":\"\",\"responsibility\":[\"Geliştirme basit CMS (PHP)\",\"HTML sitelerini CMS WordPress\\'e dönüştürme\",\"CMS WordPress için geliştirme eklentileri\",\"Proje iyileştirme\"]},{\"job_name\":\"Asistan Web-Geliştirici\",\"company\":\"tele çalışma\",\"date\":{\"start\":\"2015\",\"end\":\"2016\"},\"location\":\"\",\"responsibility\":[\"Front-end gelişim\",\"HTML sitelerini CMS WordPress\\'e dönüştürme\",\"Proje iyileştirme\"]}]}');\n\n//# sourceURL=webpack://nft_test/./src/assets/languages/tr.json?");

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