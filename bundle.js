/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:16)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mReactDOM\u001b[39m from \u001b[32m'react-dom'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[36mconst\u001b[39m element \u001b[33m=\u001b[39m \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mHello\u001b[39m\u001b[33m,\u001b[39m world\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\n \u001b[90m 6 | \u001b[39m\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\n \u001b[90m 7 | \u001b[39m  element\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 1);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  throw new Error('Module build failed: SyntaxError: Unexpected token (4:16)\n\n\x1B[0m \x1B[90m 2 | \x1B[39m\x1B[36mimport\x1B[39m \x1B[33mReactDOM\x1B[39m from \x1B[32m\'react-dom\'\x1B[39m\x1B[33m;\x1B[39m\n \x1B[90m 3 | \x1B[39m\n\x1B[31m\x1B[1m>\x1B[22m\x1B[39m\x1B[90m 4 | \x1B[39m\x1B[36mconst\x1B[39m element \x1B[33m=\x1B[39m \x1B[33m<\x1B[39m\x1B[33mh1\x1B[39m\x1B[33m>\x1B[39m\x1B[33mHello\x1B[39m\x1B[33m,\x1B[39m world\x1B[33m<\x1B[39m\x1B[33m/\x1B[39m\x1B[33mh1\x1B[39m\x1B[33m>\x1B[39m\x1B[33m;\x1B[39m\n \x1B[90m   | \x1B[39m                \x1B[31m\x1B[1m^\x1B[22m\x1B[39m\n \x1B[90m 5 | \x1B[39m\n \x1B[90m 6 | \x1B[39m\x1B[33mReactDOM\x1B[39m\x1B[33m.\x1B[39mrender(\n \x1B[90m 7 | \x1B[39m  element\x1B[33m,\x1B[39m\x1B[0m\n');

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  __webpack_require__(0);
  __webpack_require__(0);
  module.exports = __webpack_require__(2);

  /***/
},
/* 2 */
/***/function (module, exports) {

  /******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) {
        /******/return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/var module = installedModules[moduleId] = {
        /******/i: moduleId,
        /******/l: false,
        /******/exports: {}
        /******/ };
      /******/
      /******/ // Execute the module function
      /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
      /******/if (!__webpack_require__.o(exports, name)) {
        /******/Object.defineProperty(exports, name, {
          /******/configurable: false,
          /******/enumerable: true,
          /******/get: getter
          /******/ });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ?
      /******/function getDefault() {
        return module['default'];
      } :
      /******/function getModuleExports() {
        return module;
      };
      /******/__webpack_require__.d(getter, 'a', getter);
      /******/return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
  })(
  /************************************************************************/
  /******/[
  /* 0 */
  /***/function (module, exports) {

    throw new Error("Module parse failed: /Users/omaransari/Actualize/React_sample_1/app.js Unexpected token (4:16)\nYou may need an appropriate loader to handle this file type.\n| import ReactDOM from 'react-dom';\n| \n| const element = <h1>Hello, world</h1>;\n| \n| ReactDOM.render(");

    /***/
  }]
  /******/);

  /***/
}]
/******/);

/***/ })
/******/ ]);