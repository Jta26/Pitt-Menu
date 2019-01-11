webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/Content.js":
/*!**************************!*\
  !*** ./comps/Content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollbars-custom */ "./node_modules/react-scrollbars-custom/dist/index.js");
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
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
var photos = [{
  src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  width: 1,
  height: 1
}, {
  src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  width: 4,
  height: 3
}];

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
            lineNumber: 92
          },
          __self: this
        }, i);
      }),
      images: props.images
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
              lineNumber: 106
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
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: titleStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
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
          lineNumber: 138
        },
        __self: this
      }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'center',
          fontSize: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, this.state.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
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
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.state.paragraphs)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        photos: this.state.images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_3___default.a, {
        images: this.state.images,
        onClose: this.closeLightbox,
        onClickPrev: this.goToPrevious,
        onClickNext: this.onClickNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3c6d05cbca8d783d74bd.hot-update.js.map