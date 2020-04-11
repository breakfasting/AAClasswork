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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n\n  html(str) {\n    if (str !== undefined) {\n      this.arr.forEach((el) => {\n        el.innerHTML = str;\n      });\n    } else {\n      return this.arr[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.arr.forEach((el) => {\n      $l(el).html(\"\");\n    });\n  }\n\n  append(arg) {\n    //<p>1231</p>\n    let outer = [];\n    arg.arr.forEach((el) => {\n      outer.push(el.outerHTML);\n    });\n    this.arr.forEach((el) => {\n      //<div><p>1231</p></div>\n      el.innerHTML += outer.join(\"\");\n    });\n  }\n\n  attr(attrName, value) {\n    if (value === undefined) {\n      return this.arr[0].getAttribute(attrName);\n    } else {\n      this.arr[0].setAttribute(attrName, value);\n    }\n  }\n\n  addClass(classStr) {\n    this.arr.forEach((el) => {\n      el.className += classStr;\n    });\n  }\n\n  removeClass(classStr) {\n    if (classStr === undefined) {\n      this.arr.forEach((el) => {\n        el.className = \"\";\n      });\n    } else {\n      let classArr = classStr.split(\" \");\n\n      this.arr.forEach((el) => {\n        for (let classStr of classArr) {\n          el.classList.remove(classStr);\n        }\n      });\n    }\n  }\n\n  children() {\n    let allChildren = [];\n    this.arr.forEach((el) => {\n      allChildren.push(...Array.from(el.children));\n    });\n    return new DOMNodeCollection(allChildren);\n  }\n\n  parent() {\n    let parent = [];\n    this.arr.forEach((el) => {\n      parent.push(el.parentNode);\n    });\n    return new DOMNodeCollection(parent);\n  }\n\n  find(arg) {\n    let output = [];\n    this.arr.forEach((el) => {\n      let match = Array.from(el.querySelectorAll(arg));\n      output.push(...match);\n    });\n    return new DOMNodeCollection(output);\n  }\n\n  remove() {\n    this.arr.forEach((el) => {\n      el.remove();\n    });\n  }\n\n  on(method, handler) {\n    this.arr.forEach((el) => {\n      el.addEventListener(method, handler);\n    });\n  }\n\n  off(method, handler) {\n    this.arr.forEach((el) => {\n      el.removeEventListener(method, handler);\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(arg) {\n  if (typeof arg === 'string') {\n    const ele = document.querySelectorAll(arg);\n    const arr = Array.from(ele);\n    return new DOMNodeCollection(arr);\n  } else if (arg instanceof HTMLElement ){\n    return new DOMNodeCollection([arg]);\n  }\n}\n\nwindow.$l = $l;\n\nlet pictures = $l(\".pictures\");\nlet button = $l(\".picture-form button\")\n\nbutton.on(\"click\", e =>{\n    e.preventDefault();\n    let title = $l(\"#picture-title\").attr(\"value\");\n    let url = $l(\"#picture-url\").attr(\"value\");\n    let li = $l(document.createElement(\"li\"));\n    let img = $l(document.createElement(\"img\"));\n    let h2 = $l(document.createElement(\"h2\"));\n    img.attr(\"src\", url);\n    h2.html(title);\n    li.append(img);\n    li.append(h2);\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });