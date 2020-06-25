/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/svg sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/img/svg sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-fb.svg": "./src/assets/img/svg/icon-fb.svg",
	"./icon-in.svg": "./src/assets/img/svg/icon-in.svg",
	"./icon-tw.svg": "./src/assets/img/svg/icon-tw.svg",
	"./icon-vk.svg": "./src/assets/img/svg/icon-vk.svg",
	"./icon-yt.svg": "./src/assets/img/svg/icon-yt.svg",
	"./logo.svg": "./src/assets/img/svg/logo.svg",
	"./sld-next.svg": "./src/assets/img/svg/sld-next.svg",
	"./sld-prev.svg": "./src/assets/img/svg/sld-prev.svg",
	"./w-01.svg": "./src/assets/img/svg/w-01.svg",
	"./w-02.svg": "./src/assets/img/svg/w-02.svg",
	"./w-03.svg": "./src/assets/img/svg/w-03.svg",
	"./w-04.svg": "./src/assets/img/svg/w-04.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/img/svg/icon-fb.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-fb.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/icon-fb.svg");

/***/ }),

/***/ "./src/assets/img/svg/icon-in.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-in.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/icon-in.svg");

/***/ }),

/***/ "./src/assets/img/svg/icon-tw.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-tw.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/icon-tw.svg");

/***/ }),

/***/ "./src/assets/img/svg/icon-vk.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-vk.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/icon-vk.svg");

/***/ }),

/***/ "./src/assets/img/svg/icon-yt.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-yt.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/icon-yt.svg");

/***/ }),

/***/ "./src/assets/img/svg/logo.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/logo.svg");

/***/ }),

/***/ "./src/assets/img/svg/sld-next.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/svg/sld-next.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/sld-next.svg");

/***/ }),

/***/ "./src/assets/img/svg/sld-prev.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/svg/sld-prev.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/sld-prev.svg");

/***/ }),

/***/ "./src/assets/img/svg/w-01.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/w-01.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/w-01.svg");

/***/ }),

/***/ "./src/assets/img/svg/w-02.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/w-02.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/w-02.svg");

/***/ }),

/***/ "./src/assets/img/svg/w-03.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/w-03.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/w-03.svg");

/***/ }),

/***/ "./src/assets/img/svg/w-04.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/w-04.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/w-04.svg");

/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/scss/media.scss":
/*!************************************!*\
  !*** ./src/assets/scss/media.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.min */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scss/app.scss */ "./src/assets/scss/app.scss");
/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_scss_media_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/scss/media.scss */ "./src/assets/scss/media.scss");
/* harmony import */ var _assets_scss_media_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_media_scss__WEBPACK_IMPORTED_MODULE_5__);
// JS


 // SCSS



 // svg sprite

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/img/svg sync recursive \\.svg$"));
fetch("./assets/img/svg//sprite.svg").then(function (res) {
  return res.text();
}).then(function (data) {
  document.getElementById('svg-icons').innerHTML = data;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// $(() => {
//     $(window).on('load', function () {
//         $('.preloader__wrp').fadeOut();
//     });
// })
$(function () {
  $('.js-members-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="carousel__btn carousel__btn_prev"><svg width="13" height="20" viewBox="0 0 13 20"><use xlink:href="#sld-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="carousel__btn carousel__btn_next"><svg width="13" height="20" viewBox="0 0 13 20"><use xlink:href="#sld-next"></use></svg></button>',
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.691ee052d6ef9f5afaa5.js.map