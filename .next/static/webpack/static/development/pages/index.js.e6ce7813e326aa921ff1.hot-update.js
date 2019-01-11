webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_DateObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/DateObject */ "./comps/DateObject.js");
/* harmony import */ var _comps_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/Content */ "./comps/Content.js");
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/blogs.json */ "./data/blogs.json");
var _data_blogs_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/blogs.json */ "./data/blogs.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sticky */ "./node_modules/react-sticky/lib/index.js");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scrollbars-custom */ "./node_modules/react-scrollbars-custom/dist/index.js");
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
        selectBlogImages: _data_blogs_json__WEBPACK_IMPORTED_MODULE_7__[_data_blogs_json__WEBPACK_IMPORTED_MODULE_7__.length - 1].images
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
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Bree+Serif",
        rel: "stylesheet",
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Fjalla+One",
        rel: "stylesheet",
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans",
        rel: "stylesheet",
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://photosom/css?family=Mukta:700",
        rel: "stylesheet",
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://photosom/css?family=Noto+Serif+TC",
        rel: "stylesheet",
        className: "jsx-4168406443",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4168406443",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQyIsImZpbGUiOiIvaG9tZS9qb2VsL01lbnUtUGFyc2VyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGF0ZU9iaiBmcm9tICcuLi9jb21wcy9EYXRlT2JqZWN0JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL2NvbXBzL0NvbnRlbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9IZWFkZXInO1xuaW1wb3J0IGJsb2dzIGZyb20gJy4uL2RhdGEvYmxvZ3MuanNvbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1N0aWNreUNvbnRhaW5lciwgU3RpY2t5fSBmcm9tICdyZWFjdC1zdGlja3knO1xuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSAncmVhY3Qtc2Nyb2xsYmFycy1jdXN0b20nO1xuY29uc3QgaW5kZXhTdHlsZXMgPSB7XG4gICAgZm9udEZhbWlseTogJ0xhdG8nLFxuICAgIGZsZXg6IDEsXG5cbn1cbmNvbnN0IG5hdkNvbnRhaW5lclN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBoZWlnaHQ6ICc5NHZoJyxcbiAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0ZjRmNGYnXG59XG5jb25zdCBjb250ZW50U3R5bGVzID0ge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxufVxuXG5cbmNvbnN0IG5hdlN0eWxlcyA9IHtcbn1cblxuY29uc3QgbGlua1N0eWxlcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJywgcGFkZGluZ1RvcDogMTAsIG91dGxpbmU6ICdub25lJ1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9nRGF0ZTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dQYXJhZ3JhcGhzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0ltYWdlczogW10sXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dUaXRsZTogYmxvZ3NbYmxvZ3MubGVuZ3RoIC0gMV0udGl0bGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nRGF0ZTogYmxvZ3NbYmxvZ3MubGVuZ3RoIC0gMV0uZGF0ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dQYXJhZ3JhcGhzOiBibG9nc1tibG9ncy5sZW5ndGggLSAxXS5wYXJhZ3JhcGhzLFxuICAgICAgICAgICAgICAgIHNlbGVjdEJsb2dJbWFnZXM6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLmltYWdlc1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYmxvZ0xpc3QgPSBibG9ncy5tYXAoKGJsb2csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bmF2U3R5bGVzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RpY2t5Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2cudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dEYXRlOiBibG9nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dQYXJhZ3JhcGhzOiBibG9nLnBhcmFncmFwaHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dJbWFnZXM6IGJsb2cuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVPYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrPXtibG9nLndlZWt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17bW9tZW50KGJsb2cuZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1N0aWNreUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgXG4gICAgICAgICAgIH0pO1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXtpbmRleFN0eWxlc30+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnJlZStTZXJpZlwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vcGhvdG9zb20vY3NzP2ZhbWlseT1NdWt0YTo3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9waG90b3NvbS9jc3M/ZmFtaWx5PU5vdG8rU2VyaWYrVENcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YHBob3Rvc1xuICAgICAgICAgICAgICAgICAgICAqIHsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxTY3JvbGxiYXJzIHN0eWxlPXtuYXZDb250YWluZXJTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtibG9nTGlzdH1cbiAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nVGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nRGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzPXt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ1BhcmFncmFwaHN9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ0ltYWdlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSAgXG4gICAgfVxuICAgIFxufSJdfQ== */\n/*@ sourceURL=/home/joel/Menu-Parser/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: navContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, blogList), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: this.state.selectedBlogTitle,
        date: moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        paragraphs: this.state.selectedBlogParagraphs,
        images: this.state.selectedBlogImages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e6ce7813e326aa921ff1.hot-update.js.map