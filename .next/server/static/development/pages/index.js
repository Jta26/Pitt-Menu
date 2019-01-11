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
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photo-gallery */ "react-photo-gallery");
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-images */ "react-images");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_3__);
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




var titleStyles = {
  backgroundColor: '#4f4f4f',
  fontFamily: 'Mukta',
  height: '20vh',
  color: '#FFF',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'Center',
  flexDirection: 'column'
};
var contentStyle = {
  height: '94vh',
  overflowY: 'hidden',
  backgroundColor: '#FFF',
  backgroundImage: "Url(".concat('https://i.imgur.com/IQfMFfo.png', ")"),
  backgroundSize: 'cover',
  borderLeft: '1px solid white'
};
var contentContainer = {
  backgroundColor: '#FFF',
  padding: 25,
  color: '#000',
  width: '75%',
  margin: 'auto',
  marginTop: '10vh'
};
var paraStyles = {
  marginTop: 50,
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
    _this.state = {
      title: props.title,
      date: props.date,
      paragraphs: props.paragraphs.toString().split("\n").map(function (i, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, i);
      }),
      images: props.images,
      currentImage: 0
    };
    _this.openLightbox = _this.openLightbox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToNext = _this.goToNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToPrevious = _this.goToPrevious.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Content, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        title: props.title,
        date: props.date,
        paragraphs: props.paragraphs.toString().split("\n").map(function (i, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, i);
        }),
        images: props.images
      });
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: "goToNext",
    value: function goToNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var paras = this.state.paragraphs;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: contentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: titleStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'center',
          paddingTop: 10,
          fontSize: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'center',
          fontSize: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '80%',
          margin: 'auto',
          marginTop: 35,
          marginBottom: 35,
          fontFamily: 'Noto Sans',
          lineHeight: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.paragraphs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
        photos: this.state.images,
        direction: 'column',
        onClick: this.openLightbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_3___default.a, {
        images: this.state.images,
        onClose: this.closeLightbox,
        onClickPrev: this.goToPrevious,
        onClickNext: this.goToNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })))));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateObj; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/joel/Menu-Parser/comps/DateObject.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var dateTitleStyle = {
  fontSize: 20,
  textAlign: 'center',
  fontFamily: 'Mukta',
  marginLeft: 20,
  marginRight: 20,
  alignItems: 'column',
  marginTop: 10,
  marginBottom: 10,
  textDecorationLine: 'none',
  color: '#FFF'
};
var datePStyle = {
  float: 'left',
  fontSize: 14,
  //color: '#b2ac75',
  color: '#cdbc70',
  marginLeft: 22,
  marginRight: 22,
  fontFamily: 'Mukta'
};

var DateObj =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateObj, _React$Component);

  function DateObj(props) {
    var _this;

    _classCallCheck(this, DateObj);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateObj).call(this, props));
    _this.state = {
      hover: false
    };
    _this.hoverToggle = _this.hoverToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DateObj, [{
    key: "hoverToggle",
    value: function hoverToggle() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.state.hover ? {
          opacity: '0.5'
        } : {
          opacity: '1'
        },
        onMouseEnter: this.hoverToggle,
        onMouseLeave: this.hoverToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: dateTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: datePStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Week ", this.props.week), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: datePStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.props.date)));
    }
  }]);

  return DateObj;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


;

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
  backgroundColor: '#315175',
  height: '5vh',
  borderBottom: '1px solid white',
  paddingBottom: 0
};
var titleStyles = {
  textAlign: 'right',
  fontSize: '2em',
  marginRight: 20,
  fontFamily: 'Noto Serif TC',
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
        strings: ["Joel Austin | Capstone Blog"],
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
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"title":"Capstone Blog Creation","date":"Jan 11 2019","week":"1","paragraphs":["Today I created this single page blog. In total it took about 10 hours to create, an utlizes Next.js and React to an interactive webpage without the need to make multiple requests to a server hosted on an AWS instance running Ubuntu 18.04.  React is a javascript front-end framework used to make creating interactive content online simple and modular. The blog selection bar, and blog content is pulled from a JSON file on the server, that is to be manually updated when I make a new blog post. The choice to program my own blog instead of using a service like wordpress is to exmplify my front-end development ability. My capstone project is going to involve all facets of full-stack development, including data retrieve and organization scripts, databases, RESTful API back-end technologies, and front-end development frameworks such as React.\nAll images in this blog will be at the bottom of the blog post. They are all clickable such that they can be viewed in a lightbox. The blogs will be added on the left side of the page as I progress through my capstone project."],"images":[{"src":"https://i.imgur.com/gTvLu4t.png","width":2,"height":1},{"src":"https://i.imgur.com/U4QZeGh.png","width":1.5,"height":1},{"src":"https://i.imgur.com/GqV2Vh5.png","width":2,"height":1}]}];

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var indexStyles = {
  fontFamily: 'Lato',
  flex: 1
};

var navContainerStyles = _defineProperty({
  flexDirection: 'row',
  height: '94vh',
  overflowY: 'hidden',
  backgroundColor: '#fff',
  outline: 'none',
  width: '300px',
  float: 'left'
}, "backgroundColor", '#4f4f4f');

var contentStyles = {
  flexDirection: 'row'
};
var navStyles = {};
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
      selectedBlogParagraphs: [],
      selectedBlogImages: [],
      hover: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        selectedBlogTitle: _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__[_data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.length - 1].title,
        selectedBlogDate: _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__[_data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.length - 1].date,
        selectedBlogParagraphs: _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__[_data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.length - 1].paragraphs,
        selectedBlogImages: _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__[_data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.length - 1].images
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
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_9__["StickyContainer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.setState({
              selectedBlogTitle: blog.title,
              selectedBlogDate: blog.date,
              selectedBlogParagraphs: blog.paragraphs,
              selectedBlogImages: blog.images
            });
          },
          style: {
            textDecorationLine: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_DateObject__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: blog.title,
          week: blog.week,
          date: moment__WEBPACK_IMPORTED_MODULE_8___default()(blog.date).format('MMMM Do YYYY'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: indexStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Bree+Serif",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Fjalla+One",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://photosom/css?family=Mukta:700",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://photosom/css?family=Noto+Serif+TC",
        rel: "stylesheet",
        className: "jsx-2940664450",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2940664450",
        css: "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQyxBQUdpQyxTQUNDLFVBQ1QiLCJmaWxlIjoiL2hvbWUvam9lbC9NZW51LVBhcnNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVPYmogZnJvbSAnLi4vY29tcHMvRGF0ZU9iamVjdCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wcy9Db250ZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJztcbmltcG9ydCBibG9ncyBmcm9tICcuLi9kYXRhL2Jsb2dzLmpzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgU3RpY2t5Q29udGFpbmVyIH0gZnJvbSAncmVhY3Qtc3RpY2t5JztcbmltcG9ydCBTY3JvbGxiYXJzIGZyb20gJ3JlYWN0LXNjcm9sbGJhcnMtY3VzdG9tJztcbmNvbnN0IGluZGV4U3R5bGVzID0ge1xuICAgIGZvbnRGYW1pbHk6ICdMYXRvJyxcbiAgICBmbGV4OiAxLFxuXG59XG5jb25zdCBuYXZDb250YWluZXJTdHlsZXMgPSB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgaGVpZ2h0OiAnOTR2aCcsXG4gICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNGY0ZjRmJ1xufVxuY29uc3QgY29udGVudFN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbn1cblxuXG5jb25zdCBuYXZTdHlsZXMgPSB7XG59XG5cbmNvbnN0IGxpbmtTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsIHBhZGRpbmdUb3A6IDEwLCBvdXRsaW5lOiAnbm9uZSdcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ1RpdGxlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9nUGFyYWdyYXBoczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dJbWFnZXM6IFtdLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLnRpdGxlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLmRhdGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nUGFyYWdyYXBoczogYmxvZ3NbYmxvZ3MubGVuZ3RoIC0gMV0ucGFyYWdyYXBocyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dJbWFnZXM6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLmltYWdlc1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYmxvZ0xpc3QgPSBibG9ncy5tYXAoKGJsb2csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bmF2U3R5bGVzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RpY2t5Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2cudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiBibG9nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dQYXJhZ3JhcGhzOiBibG9nLnBhcmFncmFwaHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dJbWFnZXM6IGJsb2cuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVPYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrPXtibG9nLndlZWt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17bW9tZW50KGJsb2cuZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1N0aWNreUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgXG4gICAgICAgICAgIH0pO1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXtpbmRleFN0eWxlc30+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnJlZStTZXJpZlwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vcGhvdG9zb20vY3NzP2ZhbWlseT1NdWt0YTo3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9waG90b3NvbS9jc3M/ZmFtaWx5PU5vdG8rU2VyaWYrVENcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICAqIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxTY3JvbGxiYXJzIHN0eWxlPXtuYXZDb250YWluZXJTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtibG9nTGlzdH1cbiAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nVGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nRGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzPXt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ1BhcmFncmFwaHN9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ0ltYWdlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSAgXG4gICAgfVxuICAgIFxufSJdfQ== */\n/*@ sourceURL=/home/joel/Menu-Parser/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: navContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, blogList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: this.state.selectedBlogTitle,
        date: moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        paragraphs: this.state.selectedBlogParagraphs,
        images: this.state.selectedBlogImages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
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

/***/ "react-images":
/*!*******************************!*\
  !*** external "react-images" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),

/***/ "react-photo-gallery":
/*!**************************************!*\
  !*** external "react-photo-gallery" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-photo-gallery");

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