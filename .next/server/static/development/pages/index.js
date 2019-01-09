module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Content.js":
/*!**************************!*\
  !*** ./comps/Content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/joel/Desktop/Menu-Parser/comps/Content.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var contentStyle = {
  backgroundColor: '#DFDCE3;',
  height: '100vh',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'center'
};
var contentContainer = {
  width: '85%',
  backgroundColor: '#4ABDAC',
  marginTop: 100,
  padding: 25,
  borderRadius: 30
};

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));
    _this.state = {
      title: _this.props.title,
      date: _this.props.date,
      content: _this.props.content
    };
    return _this;
  }

  _createClass(Content, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        title: this.props.title,
        date: this.props.date,
        content: this.props.content
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          fontFamily: 'Bree Serif',
          textAlign: 'center',
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.state.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.content))));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./comps/DateObject.js":
/*!*****************************!*\
  !*** ./comps/DateObject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/joel/Desktop/Menu-Parser/comps/DateObject.js";

var dateObjStyle = {
  color: 'black',
  fontSize: 17,
  textAlign: 'center',
  border: '3px solid #DFDCE3',
  padding: 5,
  paddingLeft: 100,
  paddingRight: 100,
  marginLeft: 20,
  marginRight: 20
};

var DateObj = function DateObj(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: dateObjStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      opacity: 0.6
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.date));
};

/* harmony default export */ __webpack_exports__["default"] = (DateObj);

/***/ }),

/***/ "./data/blogs.json":
/*!*************************!*\
  !*** ./data/blogs.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, default */
/***/ (function(module) {

module.exports = [{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl interdum diam imperdiet auctor. Phasellus porta mollis egestas. Duis auctor at tellus at molestie. Ut suscipit imperdiet laoreet. Curabitur condimentum porttitor mi quis interdum. Ut eu magna tortor. Sed semper nisl ante, quis vehicula sapien aliquet eget. Praesent semper tempor placerat. Morbi in dolor sed massa efficitur elementum in id lorem. Nullam nisl magna, consectetur a enim in, efficitur vehicula dui. Suspendisse tristique nunc vitae aliquet egestas. Quisque mattis mattis nunc et efficitur. Donec gravida tincidunt consectetur. Aenean malesuada aliquet orci, et porta eros fringilla vel. Ut dictum sed orci in volutpat. Etiam id ornare lacus, eget dapibus urna.In faucibus sem tortor, ac mattis nunc rutrum sed. Nam bibendum risus vitae porttitor pulvinar. Vivamus accumsan ante arcu, non sodales leo ultrices vel. Etiam auctor consequat tellus ac accumsan. Curabitur euismod, libero sed dictum dictum, augue dui maximus eros, nec semper lorem massa et nisl. Aliquam tempus scelerisque nulla eget tincidunt. Suspendisse vulputate lobortis velit. Donec eget tortor mauris. Donec eget leo aliquam, pellentesque nisl a, vestibulum arcu. Curabitur blandit pretium aliquam.Etiam iaculis ex ante, eget lobortis magna commodo viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam suscipit nibh at pharetra pellentesque. Donec fermentum, felis quis commodo mollis, augue felis malesuada velit, id suscipit sem lectus eget felis. Nam faucibus sollicitudin dolor, sit amet facilisis tortor varius aliquam. In hendrerit tincidunt pretium. Donec tellus turpis, scelerisque et sapien vitae, semper faucibus urna. Integer ut mi diam. Mauris nisl sem, feugiat nec porttitor eu, tempus ullamcorper metus. Phasellus ultrices sapien sed lorem malesuada maximus. Integer libero velit, gravida eu odio ut, placerat mollis lacus.Nunc placerat tempor lectus, porttitor feugiat mauris venenatis ac. Donec et dolor sodales, dapibus est et, rhoncus lorem. Nam lobortis laoreet felis at pulvinar. Nam congue lobortis nibh, nec vestibulum erat bibendum sit amet. Aliquam erat volutpat. Sed aliquam tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam bibendum justo nisi, vel gravida lectus aliquet sed. Ut quam dui, sagittis sit amet eros sed, sodales commodo neque. Mauris elit risus, maximus sed eleifend at, interdum in erat. Vestibulum a sem eu arcu euismod tempor. Etiam non lobortis tortor, ac efficitur lorem. Donec enim lacus, rutrum at nibh nec, iaculis aliquet felis.Nullam magna urna, lacinia quis hendrerit ut, cursus vitae libero. Nam sapien arcu, condimentum sed nisl sed, feugiat consectetur neque. Vestibulum lobortis eget sapien sit amet lobortis. Praesent non dapibus nulla. Proin nec volutpat ante, a faucibus arcu. Cras eget ultrices est, id rutrum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris eget lectus tincidunt, auctor lacus non, scelerisque nulla. Pellentesque elementum ullamcorper augue vel placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum urna magna. Etiam interdum purus in dapibus molestie. Cras mauris orci, lacinia ut luctus non, maximus placerat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl interdum diam imperdiet auctor. Phasellus porta mollis egestas. Duis auctor at tellus at molestie. Ut suscipit imperdiet laoreet. Curabitur condimentum porttitor mi quis interdum. Ut eu magna tortor. Sed semper nisl ante, quis vehicula sapien aliquet eget. Praesent semper tempor placerat. Morbi in dolor sed massa efficitur elementum in id lorem. Nullam nisl magna, consectetur a enim in, efficitur vehicula dui. Suspendisse tristique nunc vitae aliquet egestas. Quisque mattis mattis nunc et efficitur. Donec gravida tincidunt consectetur. Aenean malesuada aliquet orci, et porta eros fringilla vel. Ut dictum sed orci in volutpat. Etiam id ornare lacus, eget dapibus urna.In faucibus sem tortor, ac mattis nunc rutrum sed. Nam bibendum risus vitae porttitor pulvinar. Vivamus accumsan ante arcu, non sodales leo ultrices vel. Etiam auctor consequat tellus ac accumsan. Curabitur euismod, libero sed dictum dictum, augue dui maximus eros, nec semper lorem massa et nisl. Aliquam tempus scelerisque nulla eget tincidunt. Suspendisse vulputate lobortis velit. Donec eget tortor mauris. Donec eget leo aliquam, pellentesque nisl a, vestibulum arcu. Curabitur blandit pretium aliquam.Etiam iaculis ex ante, eget lobortis magna commodo viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam suscipit nibh at pharetra pellentesque. Donec fermentum, felis quis commodo mollis, augue felis malesuada velit, id suscipit sem lectus eget felis. Nam faucibus sollicitudin dolor, sit amet facilisis tortor varius aliquam. In hendrerit tincidunt pretium. Donec tellus turpis, scelerisque et sapien vitae, semper faucibus urna. Integer ut mi diam. Mauris nisl sem, feugiat nec porttitor eu, tempus ullamcorper metus. Phasellus ultrices sapien sed lorem malesuada maximus. Integer libero velit, gravida eu odio ut, placerat mollis lacus.Nunc placerat tempor lectus, porttitor feugiat mauris venenatis ac. Donec et dolor sodales, dapibus est et, rhoncus lorem. Nam lobortis laoreet felis at pulvinar. Nam congue lobortis nibh, nec vestibulum erat bibendum sit amet. Aliquam erat volutpat. Sed aliquam tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam bibendum justo nisi, vel gravida lectus aliquet sed. Ut quam dui, sagittis sit amet eros sed, sodales commodo neque. Mauris elit risus, maximus sed eleifend at, interdum in erat. Vestibulum a sem eu arcu euismod tempor. Etiam non lobortis tortor, ac efficitur lorem. Donec enim lacus, rutrum at nibh nec, iaculis aliquet felis.Nullam magna urna, lacinia quis hendrerit ut, cursus vitae libero. Nam sapien arcu, condimentum sed nisl sed, feugiat consectetur neque. Vestibulum lobortis eget sapien sit amet lobortis. Praesent non dapibus nulla. Proin nec volutpat ante, a faucibus arcu. Cras eget ultrices est, id rutrum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris eget lectus tincidunt, auctor lacus non, scelerisque nulla. Pellentesque elementum ullamcorper augue vel placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum urna magna. Etiam interdum purus in dapibus molestie. Cras mauris orci, lacinia ut luctus non, maximus placerat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl interdum diam imperdiet auctor. Phasellus porta mollis egestas. Duis auctor at tellus at molestie. Ut suscipit imperdiet laoreet. Curabitur condimentum porttitor mi quis interdum. Ut eu magna tortor. Sed semper nisl ante, quis vehicula sapien aliquet eget. Praesent semper tempor placerat. Morbi in dolor sed massa efficitur elementum in id lorem. Nullam nisl magna, consectetur a enim in, efficitur vehicula dui. Suspendisse tristique nunc vitae aliquet egestas. Quisque mattis mattis nunc et efficitur. Donec gravida tincidunt consectetur. Aenean malesuada aliquet orci, et porta eros fringilla vel. Ut dictum sed orci in volutpat. Etiam id ornare lacus, eget dapibus urna.In faucibus sem tortor, ac mattis nunc rutrum sed. Nam bibendum risus vitae porttitor pulvinar. Vivamus accumsan ante arcu, non sodales leo ultrices vel. Etiam auctor consequat tellus ac accumsan. Curabitur euismod, libero sed dictum dictum, augue dui maximus eros, nec semper lorem massa et nisl. Aliquam tempus scelerisque nulla eget tincidunt. Suspendisse vulputate lobortis velit. Donec eget tortor mauris. Donec eget leo aliquam, pellentesque nisl a, vestibulum arcu. Curabitur blandit pretium aliquam.Etiam iaculis ex ante, eget lobortis magna commodo viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam suscipit nibh at pharetra pellentesque. Donec fermentum, felis quis commodo mollis, augue felis malesuada velit, id suscipit sem lectus eget felis. Nam faucibus sollicitudin dolor, sit amet facilisis tortor varius aliquam. In hendrerit tincidunt pretium. Donec tellus turpis, scelerisque et sapien vitae, semper faucibus urna. Integer ut mi diam. Mauris nisl sem, feugiat nec porttitor eu, tempus ullamcorper metus. Phasellus ultrices sapien sed lorem malesuada maximus. Integer libero velit, gravida eu odio ut, placerat mollis lacus.Nunc placerat tempor lectus, porttitor feugiat mauris venenatis ac. Donec et dolor sodales, dapibus est et, rhoncus lorem. Nam lobortis laoreet felis at pulvinar. Nam congue lobortis nibh, nec vestibulum erat bibendum sit amet. Aliquam erat volutpat. Sed aliquam tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam bibendum justo nisi, vel gravida lectus aliquet sed. Ut quam dui, sagittis sit amet eros sed, sodales commodo neque. Mauris elit risus, maximus sed eleifend at, interdum in erat. Vestibulum a sem eu arcu euismod tempor. Etiam non lobortis tortor, ac efficitur lorem. Donec enim lacus, rutrum at nibh nec, iaculis aliquet felis.Nullam magna urna, lacinia quis hendrerit ut, cursus vitae libero. Nam sapien arcu, condimentum sed nisl sed, feugiat consectetur neque. Vestibulum lobortis eget sapien sit amet lobortis. Praesent non dapibus nulla. Proin nec volutpat ante, a faucibus arcu. Cras eget ultrices est, id rutrum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris eget lectus tincidunt, auctor lacus non, scelerisque nulla. Pellentesque elementum ullamcorper augue vel placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum urna magna. Etiam interdum purus in dapibus molestie. Cras mauris orci, lacinia ut luctus non, maximus placerat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl interdum diam imperdiet auctor. Phasellus porta mollis egestas. Duis auctor at tellus at molestie. Ut suscipit imperdiet laoreet. Curabitur condimentum porttitor mi quis interdum. Ut eu magna tortor. Sed semper nisl ante, quis vehicula sapien aliquet eget. Praesent semper tempor placerat. Morbi in dolor sed massa efficitur elementum in id lorem. Nullam nisl magna, consectetur a enim in, efficitur vehicula dui. Suspendisse tristique nunc vitae aliquet egestas. Quisque mattis mattis nunc et efficitur. Donec gravida tincidunt consectetur. Aenean malesuada aliquet orci, et porta eros fringilla vel. Ut dictum sed orci in volutpat. Etiam id ornare lacus, eget dapibus urna.In faucibus sem tortor, ac mattis nunc rutrum sed. Nam bibendum risus vitae porttitor pulvinar. Vivamus accumsan ante arcu, non sodales leo ultrices vel. Etiam auctor consequat tellus ac accumsan. Curabitur euismod, libero sed dictum dictum, augue dui maximus eros, nec semper lorem massa et nisl. Aliquam tempus scelerisque nulla eget tincidunt. Suspendisse vulputate lobortis velit. Donec eget tortor mauris. Donec eget leo aliquam, pellentesque nisl a, vestibulum arcu. Curabitur blandit pretium aliquam.Etiam iaculis ex ante, eget lobortis magna commodo viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam suscipit nibh at pharetra pellentesque. Donec fermentum, felis quis commodo mollis, augue felis malesuada velit, id suscipit sem lectus eget felis. Nam faucibus sollicitudin dolor, sit amet facilisis tortor varius aliquam. In hendrerit tincidunt pretium. Donec tellus turpis, scelerisque et sapien vitae, semper faucibus urna. Integer ut mi diam. Mauris nisl sem, feugiat nec porttitor eu, tempus ullamcorper metus. Phasellus ultrices sapien sed lorem malesuada maximus. Integer libero velit, gravida eu odio ut, placerat mollis lacus.Nunc placerat tempor lectus, porttitor feugiat mauris venenatis ac. Donec et dolor sodales, dapibus est et, rhoncus lorem. Nam lobortis laoreet felis at pulvinar. Nam congue lobortis nibh, nec vestibulum erat bibendum sit amet. Aliquam erat volutpat. Sed aliquam tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam bibendum justo nisi, vel gravida lectus aliquet sed. Ut quam dui, sagittis sit amet eros sed, sodales commodo neque. Mauris elit risus, maximus sed eleifend at, interdum in erat. Vestibulum a sem eu arcu euismod tempor. Etiam non lobortis tortor, ac efficitur lorem. Donec enim lacus, rutrum at nibh nec, iaculis aliquet felis.Nullam magna urna, lacinia quis hendrerit ut, cursus vitae libero. Nam sapien arcu, condimentum sed nisl sed, feugiat consectetur neque. Vestibulum lobortis eget sapien sit amet lobortis. Praesent non dapibus nulla. Proin nec volutpat ante, a faucibus arcu. Cras eget ultrices est, id rutrum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris eget lectus tincidunt, auctor lacus non, scelerisque nulla. Pellentesque elementum ullamcorper augue vel placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum urna magna. Etiam interdum purus in dapibus molestie. Cras mauris orci, lacinia ut luctus non, maximus placerat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl interdum diam imperdiet auctor. Phasellus porta mollis egestas. Duis auctor at tellus at molestie. Ut suscipit imperdiet laoreet. Curabitur condimentum porttitor mi quis interdum. Ut eu magna tortor. Sed semper nisl ante, quis vehicula sapien aliquet eget. Praesent semper tempor placerat. Morbi in dolor sed massa efficitur elementum in id lorem. Nullam nisl magna, consectetur a enim in, efficitur vehicula dui. Suspendisse tristique nunc vitae aliquet egestas. Quisque mattis mattis nunc et efficitur. Donec gravida tincidunt consectetur. Aenean malesuada aliquet orci, et porta eros fringilla vel. Ut dictum sed orci in volutpat. Etiam id ornare lacus, eget dapibus urna.In faucibus sem tortor, ac mattis nunc rutrum sed. Nam bibendum risus vitae porttitor pulvinar. Vivamus accumsan ante arcu, non sodales leo ultrices vel. Etiam auctor consequat tellus ac accumsan. Curabitur euismod, libero sed dictum dictum, augue dui maximus eros, nec semper lorem massa et nisl. Aliquam tempus scelerisque nulla eget tincidunt. Suspendisse vulputate lobortis velit. Donec eget tortor mauris. Donec eget leo aliquam, pellentesque nisl a, vestibulum arcu. Curabitur blandit pretium aliquam.Etiam iaculis ex ante, eget lobortis magna commodo viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam suscipit nibh at pharetra pellentesque. Donec fermentum, felis quis commodo mollis, augue felis malesuada velit, id suscipit sem lectus eget felis. Nam faucibus sollicitudin dolor, sit amet facilisis tortor varius aliquam. In hendrerit tincidunt pretium. Donec tellus turpis, scelerisque et sapien vitae, semper faucibus urna. Integer ut mi diam. Mauris nisl sem, feugiat nec porttitor eu, tempus ullamcorper metus. Phasellus ultrices sapien sed lorem malesuada maximus. Integer libero velit, gravida eu odio ut, placerat mollis lacus.Nunc placerat tempor lectus, porttitor feugiat mauris venenatis ac. Donec et dolor sodales, dapibus est et, rhoncus lorem. Nam lobortis laoreet felis at pulvinar. Nam congue lobortis nibh, nec vestibulum erat bibendum sit amet. Aliquam erat volutpat. Sed aliquam tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam bibendum justo nisi, vel gravida lectus aliquet sed. Ut quam dui, sagittis sit amet eros sed, sodales commodo neque. Mauris elit risus, maximus sed eleifend at, interdum in erat. Vestibulum a sem eu arcu euismod tempor. Etiam non lobortis tortor, ac efficitur lorem. Donec enim lacus, rutrum at nibh nec, iaculis aliquet felis.Nullam magna urna, lacinia quis hendrerit ut, cursus vitae libero. Nam sapien arcu, condimentum sed nisl sed, feugiat consectetur neque. Vestibulum lobortis eget sapien sit amet lobortis. Praesent non dapibus nulla. Proin nec volutpat ante, a faucibus arcu. Cras eget ultrices est, id rutrum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris eget lectus tincidunt, auctor lacus non, scelerisque nulla. Pellentesque elementum ullamcorper augue vel placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec fermentum urna magna. Etiam interdum purus in dapibus molestie. Cras mauris orci, lacinia ut luctus non, maximus placerat nisl. "},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"},{"title":"Capstone Blog Created","date":"Jan 8 2019","content":"This was created today."},{"title":"Test 2","date":"Jan 9 2019","content":"This test"},{"title":"Test 3","date":"Jan 10 2019"}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_DateObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/DateObject */ "./comps/DateObject.js");
/* harmony import */ var _comps_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/Content */ "./comps/Content.js");
/* harmony import */ var _data_blogs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/blogs.json */ "./data/blogs.json");
var _data_blogs_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/blogs.json */ "./data/blogs.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/joel/Desktop/Menu-Parser/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var indexStyles = {
  fontFamily: 'Lato',
  flex: 1
};
var navContainerStyles = {
  flexDirection: 'row',
  float: 'left',
  height: '100vh',
  overflowY: 'scroll'
};
var contentStyles = {
  flexDirection: 'row'
};
var navStyles = {
  backgroundColor: '   '
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      selectedBlogTitle: '',
      selectedBlogDate: '',
      selectedBlogContent: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var blogList = _data_blogs_json__WEBPACK_IMPORTED_MODULE_6__.map(function (blog, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: navStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_8__["StickyContainer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.setState({
              selectedBlogTitle: blog.title,
              selectedBlogDate: blog.date,
              selectedBlogContent: blog.content
            });
          },
          style: {
            textDecorationLine: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_DateObject__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: blog.title,
          date: moment__WEBPACK_IMPORTED_MODULE_7___default()(blog.date).format('MMMM Do YYYY'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: indexStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato",
        rel: "stylesheet",
        className: "jsx-1302619584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Bree+Serif",
        rel: "stylesheet",
        className: "jsx-1302619584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1302619584",
        css: "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvRGVza3RvcC9NZW51LVBhcnNlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW1DLEFBR2lDLFNBQ0MsVUFFVCIsImZpbGUiOiIvaG9tZS9qb2VsL0Rlc2t0b3AvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlT2JqIGZyb20gJy4uL2NvbXBzL0RhdGVPYmplY3QnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcHMvQ29udGVudCc7XG5pbXBvcnQgYmxvZ3MgZnJvbSAnLi4vZGF0YS9ibG9ncy5qc29uJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7U3RpY2t5Q29udGFpbmVyLCBTdGlja3l9IGZyb20gJ3JlYWN0LXN0aWNreSc7XG5cblxuY29uc3QgaW5kZXhTdHlsZXMgPSB7XG4gICAgZm9udEZhbWlseTogJ0xhdG8nLFxuICAgIGZsZXg6IDEsXG5cbn1cbmNvbnN0IG5hdkNvbnRhaW5lclN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuXG59XG5jb25zdCBjb250ZW50U3R5bGVzID0ge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxufVxuXG5cbmNvbnN0IG5hdlN0eWxlcyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgICAnXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dUaXRsZTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0NvbnRlbnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYmxvZ0xpc3QgPSBibG9ncy5tYXAoKGJsb2csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bmF2U3R5bGVzfT5cbiAgICAgICAgICAgICAgICA8U3RpY2t5Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2cudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiBibG9nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dDb250ZW50OiBibG9nLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVPYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXttb21lbnQoYmxvZy5kYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvU3RpY2t5Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSBcbiAgICAgICAgICAgfSk7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e2luZGV4U3R5bGVzfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CcmVlK1NlcmlmXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgKiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtibG9nTGlzdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dUaXRsZX1cbiAgICAgICAgICAgICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dEYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nQ29udGVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSAgXG4gICAgfVxuICAgIFxufSJdfQ== */\n/*@ sourceURL=/home/joel/Desktop/Menu-Parser/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: navContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, blogList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: this.state.selectedBlogTitle,
        date: moment__WEBPACK_IMPORTED_MODULE_7___default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        content: this.state.selectedBlogContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-sticky":
/*!*******************************!*\
  !*** external "react-sticky" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map