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
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollbars-custom */ "react-scrollbars-custom");
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joel/Menu-Parser/comps/Content.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var imgUrl = '../data/images/bckrnd.png';
var titleStyles = {
  marginTop: 20,
  backgroundColor: 'rgba(51,54,59,0.9)',
  fontFamily: 'Fjalla One'
};
var contentStyle = {
  height: '95vh',
  overflowY: 'hidden',
  color: 'white',
  backgroundImage: "url(".concat('https://i.imgur.com/96u67GB.png', ")"),
  backgroundSize: 'cover'
};
var contentContainer = {
  backgroundColor: 'rgba(51,54,59,0.9)',
  marginTop: '10vh',
  padding: 25
};
var paraStyles = {
  marginTop: 40,
  opacity: '.9999'
};

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "paragraphs", []);

    _this.state = {
      title: props.title,
      date: props.date,
      paragraphs: props.paragraphs
    };
    return _this;
  }

  _createClass(Content, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        title: props.title,
        date: props.date,
        paragraphs: props.paragraphs
      });
    }
  }, {
    key: "paraGen",
    value: function paraGen() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: paraStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, para);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: contentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: titleStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: {
          textAlign: 'center',
          paddingTop: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          textAlign: 'center',
          fontFamily: 'Fjalla One',
          lineHeight: 3,
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '75%',
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.state.paragraphs))));
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
var _jsxFileName = "/home/joel/Menu-Parser/comps/DateObject.js";

var dateObjStyle = {
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  fontFamily: 'Fjalla One',
  marginLeft: 30,
  marginRight: 30,
  alignItems: 'column',
  marginTop: 20
};
var datePStyle = {
  opacity: 0.6,
  float: 'left',
  fontSize: 15,
  color: 'rgb(126,188,89)'
};

var DateObj = function DateObj(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: dateObjStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: datePStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Week ", props.week), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: datePStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.date)));
};

/* harmony default export */ __webpack_exports__["default"] = (DateObj);

/***/ }),

/***/ "./comps/Header.js":
/*!*************************!*\
  !*** ./comps/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joel/Menu-Parser/comps/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var headerContainerStyles = {
  backgroundColor: 'rgba(51,54,59,0.9)',
  height: '5vh',
  outline: '1px solid black'
};
var titleStyles = {
  textAlign: 'right',
  fontSize: '2em',
  marginRight: 20,
  fontFamily: 'Fjalla One',
  paddingTop: 5,
  color: '#fff'
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        strings: ["Joel Austin Capstone Blog"],
        typeSpeed: 50,
        showCursor: false
      };
      var typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a(".typed", options);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: headerContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "typed",
        style: titleStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./data/blogs.json":
/*!*************************!*\
  !*** ./data/blogs.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = [{"title":"Capstone Blog Creation","date":"Jan 9 2019","week":"1","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]},{"title":"Project Idea Formed","date":"Jan 10 2019","week":"2","paragraphs":["Today I created this single page blog using Next.js and React."]}];

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
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/blogs.json */ "./data/blogs.json");
var _data_blogs_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/blogs.json */ "./data/blogs.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scrollbars-custom */ "react-scrollbars-custom");
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/joel/Menu-Parser/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var indexStyles = {
  fontFamily: 'Lato',
  flex: 1
};
var navContainerStyles = {
  flexDirection: 'row',
  height: '95vh',
  overflowY: 'hidden',
  backgroundColor: 'rgba(51,54,59,1)',
  outline: 'none',
  width: '300px',
  float: 'left',
  textDecorationLine: 'none'
};
var contentStyles = {
  flexDirection: 'row'
};
var navStyles = {};
var hoverStyles = {
  opacity: '.7'
};
var linkStyles = {
  textDecorationLine: 'none',
  paddingTop: 10,
  outline: 'none'
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
      selectedBlogContent: [],
      hover: false
    };
    _this.hoverToggle = _this.hoverToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "hoverToggle",
    value: function hoverToggle() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var blogList = _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.map(function (blog, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: navStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_9__["StickyContainer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.setState({
              selectedBlogTitle: blog.title,
              selectedBlogDate: blog.date,
              selectedBlogParagraphs: blog.paragraphs
            });
          },
          onMouseEnter: _this2.hoverToggle,
          onMouseLeave: _this2.hoverToggle,
          style: _this2.state.hover ? hoverStyles : {
            opacity: '1'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_DateObject__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: blog.title,
          week: blog.week,
          date: moment__WEBPACK_IMPORTED_MODULE_8___default()(blog.date).format('MMMM Do YYYY'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: indexStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Bree+Serif",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Fjalla+One",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2940664450",
        css: "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZtQyxBQUdpQyxTQUNDLFVBQ1QiLCJmaWxlIjoiL2hvbWUvam9lbC9NZW51LVBhcnNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVPYmogZnJvbSAnLi4vY29tcHMvRGF0ZU9iamVjdCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wcy9Db250ZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJztcbmltcG9ydCBibG9ncyBmcm9tICcuLi9kYXRhL2Jsb2dzLmpzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtTdGlja3lDb250YWluZXIsIFN0aWNreX0gZnJvbSAncmVhY3Qtc3RpY2t5JztcbmltcG9ydCBTY3JvbGxiYXJzIGZyb20gJ3JlYWN0LXNjcm9sbGJhcnMtY3VzdG9tJztcbmNvbnN0IGluZGV4U3R5bGVzID0ge1xuICAgIGZvbnRGYW1pbHk6ICdMYXRvJyxcbiAgICBmbGV4OiAxLFxuXG59XG5jb25zdCBuYXZDb250YWluZXJTdHlsZXMgPSB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgaGVpZ2h0OiAnOTV2aCcsXG4gICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUxLDU0LDU5LDEpJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ1xufVxuY29uc3QgY29udGVudFN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbn1cblxuXG5jb25zdCBuYXZTdHlsZXMgPSB7XG59XG5jb25zdCBob3ZlclN0eWxlcyA9IHtcbiAgICBvcGFjaXR5OiAnLjcnXG59XG5jb25zdCBsaW5rU3R5bGVzID0ge1xuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLCBwYWRkaW5nVG9wOiAxMCwgb3V0bGluZTogJ25vbmUnXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dUaXRsZTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0NvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3ZlclRvZ2dsZSA9IHRoaXMuaG92ZXJUb2dnbGUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBob3ZlclRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYmxvZ0xpc3QgPSBibG9ncy5tYXAoKGJsb2csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bmF2U3R5bGVzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RpY2t5Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2cudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiBibG9nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dQYXJhZ3JhcGhzOiBibG9nLnBhcmFncmFwaHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyID0ge3RoaXMuaG92ZXJUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7dGhpcy5ob3ZlclRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLmhvdmVyID8gaG92ZXJTdHlsZXMgOiB7b3BhY2l0eTogJzEnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlT2JqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vlaz17YmxvZy53ZWVrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e21vbWVudChibG9nLmRhdGUpLmZvcm1hdCgnTU1NTSBEbyBZWVlZJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TdGlja3lDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIFxuICAgICAgICAgICB9KTtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17aW5kZXhTdHlsZXN9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJyZWUrU2VyaWZcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICAqIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxTY3JvbGxiYXJzIHN0eWxlPXtuYXZDb250YWluZXJTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtibG9nTGlzdH1cbiAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cblxuICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dUaXRsZX1cbiAgICAgICAgICAgICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dEYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfVxuICAgICAgICAgICAgICAgIHBhcmFncmFwaHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nUGFyYWdyYXBoc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSAgXG4gICAgfVxuICAgIFxufSJdfQ== */\n/*@ sourceURL=/home/joel/Menu-Parser/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: navContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, blogList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: this.state.selectedBlogTitle,
        date: moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        paragraphs: this.state.selectedBlogParagraphs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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

/***/ "react-scrollbars-custom":
/*!******************************************!*\
  !*** external "react-scrollbars-custom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollbars-custom");

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

/***/ }),

/***/ "typed.js":
/*!***************************!*\
  !*** external "typed.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map