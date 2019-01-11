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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = [{"title":"Capstone Blog Creation","date":"Jan 11 2019","week":"1","paragraphs":["Today I created this single page blog. In total it took about 10 hours to create, an utlizes Next.js and React to an interactive webpage without the need to make multiple requests to a server hosted on an AWS instance running Ubuntu 18.04.  React is a javascript front-end framework used to make creating interactive content online simple and modular. The blog selection bar, and blog content is pulled from a JSON file on the server, that is to be manually updated when I make a new blog post. The choice to program my own blog instead of using a service like wordpress is to exmplify my front-end development ability. My capstone project is going to involve all facets of full-stack development, including data retrieve and organization scripts, databases, RESTful API back-end technologies, and front-end development frameworks such as React.\nAll images in this blog will be at the bottom of the blog post. They are all clickable such that they can be viewed in a lightbox. The blogs will be added on the left side of the page as I progress through my capstone project."],"images":[{"src":"https://i.imgur.com/gTvLu4t.png","width":2,"height":1},{"src":"https://i.imgur.com/U4QZeGh.png","width":1.5,"height":1},{"src":"https://i.imgur.com/GqV2Vh5.png","width":2,"height":1}]}];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-scrollbars-custom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-photo-gallery");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./comps/DateObject.js


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

var DateObject_DateObj =
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
      return external_react_default.a.createElement("div", {
        style: this.state.hover ? {
          opacity: '0.5'
        } : {
          opacity: '1'
        },
        onMouseEnter: this.hoverToggle,
        onMouseLeave: this.hoverToggle
      }, external_react_default.a.createElement("p", {
        style: dateTitleStyle
      }, this.props.title), external_react_default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }
      }, external_react_default.a.createElement("p", {
        style: datePStyle
      }, "Week ", this.props.week), external_react_default.a.createElement("p", {
        style: datePStyle
      }, this.props.date)));
    }
  }]);

  return DateObj;
}(external_react_default.a.Component);


;
// EXTERNAL MODULE: external "react-scrollbars-custom"
var external_react_scrollbars_custom_ = __webpack_require__(2);
var external_react_scrollbars_custom_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollbars_custom_);

// EXTERNAL MODULE: external "react-photo-gallery"
var external_react_photo_gallery_ = __webpack_require__(7);
var external_react_photo_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_photo_gallery_);

// EXTERNAL MODULE: external "react-images"
var external_react_images_ = __webpack_require__(8);
var external_react_images_default = /*#__PURE__*/__webpack_require__.n(external_react_images_);

// CONCATENATED MODULE: ./comps/Content.js


function Content_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Content_typeof = function _typeof(obj) { return typeof obj; }; } else { Content_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Content_typeof(obj); }

function Content_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Content_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Content_createClass(Constructor, protoProps, staticProps) { if (protoProps) Content_defineProperties(Constructor.prototype, protoProps); if (staticProps) Content_defineProperties(Constructor, staticProps); return Constructor; }

function Content_possibleConstructorReturn(self, call) { if (call && (Content_typeof(call) === "object" || typeof call === "function")) { return call; } return Content_assertThisInitialized(self); }

function Content_getPrototypeOf(o) { Content_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Content_getPrototypeOf(o); }

function Content_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Content_setPrototypeOf(subClass, superClass); }

function Content_setPrototypeOf(o, p) { Content_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Content_setPrototypeOf(o, p); }

function Content_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




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

var Content_Content =
/*#__PURE__*/
function (_React$Component) {
  Content_inherits(Content, _React$Component);

  function Content(props) {
    var _this;

    Content_classCallCheck(this, Content);

    _this = Content_possibleConstructorReturn(this, Content_getPrototypeOf(Content).call(this, props));
    _this.state = {
      title: props.title,
      date: props.date,
      paragraphs: props.paragraphs.toString().split("\n").map(function (i, key) {
        return external_react_default.a.createElement("p", {
          key: key
        }, i);
      }),
      images: props.images,
      currentImage: 0
    };
    _this.openLightbox = _this.openLightbox.bind(Content_assertThisInitialized(Content_assertThisInitialized(_this)));
    _this.closeLightbox = _this.closeLightbox.bind(Content_assertThisInitialized(Content_assertThisInitialized(_this)));
    _this.goToNext = _this.goToNext.bind(Content_assertThisInitialized(Content_assertThisInitialized(_this)));
    _this.goToPrevious = _this.goToPrevious.bind(Content_assertThisInitialized(Content_assertThisInitialized(_this)));
    return _this;
  }

  Content_createClass(Content, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        title: props.title,
        date: props.date,
        paragraphs: props.paragraphs.toString().split("\n").map(function (i, key) {
          return external_react_default.a.createElement("p", {
            key: key
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
      return external_react_default.a.createElement(external_react_scrollbars_custom_default.a, {
        style: contentStyle
      }, external_react_default.a.createElement("div", {
        style: titleStyles
      }, external_react_default.a.createElement("p", {
        style: {
          textAlign: 'center',
          paddingTop: 10,
          fontSize: 30
        }
      }, this.state.date), external_react_default.a.createElement("p", {
        style: {
          textAlign: 'center',
          fontSize: 50
        }
      }, this.state.title)), external_react_default.a.createElement("div", {
        style: contentContainer
      }, external_react_default.a.createElement("div", {
        style: {
          width: '80%',
          margin: 'auto',
          marginTop: 35,
          marginBottom: 35,
          fontFamily: 'Noto Sans',
          lineHeight: 2
        }
      }, external_react_default.a.createElement("p", null, this.state.paragraphs), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_photo_gallery_default.a, {
        photos: this.state.images,
        direction: 'column',
        onClick: this.openLightbox
      }), external_react_default.a.createElement(external_react_images_default.a, {
        images: this.state.images,
        onClose: this.closeLightbox,
        onClickPrev: this.goToPrevious,
        onClickNext: this.goToNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen
      })))));
    }
  }]);

  return Content;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "typed.js"
var external_typed_js_ = __webpack_require__(9);
var external_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_typed_js_);

// CONCATENATED MODULE: ./comps/Header.js


function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }


var headerContainerStyles = {
  backgroundColor: '#315175',
  height: '5vh',
  borderBottom: '1px solid white',
  paddingBottom: 0
};
var Header_titleStyles = {
  textAlign: 'right',
  fontSize: '2em',
  marginRight: 20,
  fontFamily: 'Noto Serif TC',
  color: '#fff'
};

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    Header_classCallCheck(this, Header);

    _this = Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).call(this, props));
    _this.state = {};
    return _this;
  }

  Header_createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        strings: ["Joel Austin | Capstone Blog"],
        typeSpeed: 50,
        showCursor: false
      };
      var typed = new external_typed_js_default.a(".typed", options);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: headerContainerStyles
      }, external_react_default.a.createElement("p", {
        className: "typed",
        style: Header_titleStyles
      }));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./data/blogs.json
var blogs = __webpack_require__(1);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Index; });



function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

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

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
    _this.state = {
      selectedBlogTitle: '',
      selectedBlogDate: '',
      selectedBlogParagraphs: [],
      selectedBlogImages: [],
      hover: false
    };
    return _this;
  }

  pages_createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        selectedBlogTitle: blogs[blogs.length - 1].title,
        selectedBlogDate: blogs[blogs.length - 1].date,
        selectedBlogParagraphs: blogs[blogs.length - 1].paragraphs,
        selectedBlogImages: blogs[blogs.length - 1].images
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var blogList = blogs.map(function (blog, index) {
        return external_react_default.a.createElement("div", {
          style: navStyles
        }, external_react_default.a.createElement(external_react_sticky_["StickyContainer"], null, external_react_default.a.createElement(link_default.a, {
          href: "/"
        }, external_react_default.a.createElement("a", {
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
          }
        }, external_react_default.a.createElement(DateObject_DateObj, {
          title: blog.title,
          week: blog.week,
          date: external_moment_default()(blog.date).format('MMMM Do YYYY')
        })))));
      });
      return external_react_default.a.createElement("div", {
        style: indexStyles
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Bree+Serif",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Fjalla+One",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement("link", {
        href: "https://photosom/css?family=Mukta:700",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement("link", {
        href: "https://photosom/css?family=Noto+Serif+TC",
        rel: "stylesheet",
        className: "jsx-2940664450"
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "2940664450",
        css: ["*{margin:0;padding:0;}"]
      })), external_react_default.a.createElement(Header_Header, null), external_react_default.a.createElement(external_react_scrollbars_custom_default.a, {
        style: navContainerStyles
      }, blogList), external_react_default.a.createElement(Content_Content, {
        title: this.state.selectedBlogTitle,
        date: external_moment_default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        paragraphs: this.state.selectedBlogParagraphs,
        images: this.state.selectedBlogImages
      }));
    }
  }]);

  return Index;
}(external_react_default.a.Component);



/***/ })
/******/ ]);