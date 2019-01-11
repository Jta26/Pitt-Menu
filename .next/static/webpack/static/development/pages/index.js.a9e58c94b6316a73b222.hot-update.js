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
        css: "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQyxBQUdpQyxTQUNDLFVBQ1QiLCJmaWxlIjoiL2hvbWUvam9lbC9NZW51LVBhcnNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVPYmogZnJvbSAnLi4vY29tcHMvRGF0ZU9iamVjdCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wcy9Db250ZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJztcbmltcG9ydCBibG9ncyBmcm9tICcuLi9kYXRhL2Jsb2dzLmpzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtTdGlja3lDb250YWluZXIsIFN0aWNreX0gZnJvbSAncmVhY3Qtc3RpY2t5JztcbmltcG9ydCBTY3JvbGxiYXJzIGZyb20gJ3JlYWN0LXNjcm9sbGJhcnMtY3VzdG9tJztcbmNvbnN0IGluZGV4U3R5bGVzID0ge1xuICAgIGZvbnRGYW1pbHk6ICdMYXRvJyxcbiAgICBmbGV4OiAxLFxuXG59XG5jb25zdCBuYXZDb250YWluZXJTdHlsZXMgPSB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgaGVpZ2h0OiAnOTR2aCcsXG4gICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNGY0ZjRmJ1xufVxuY29uc3QgY29udGVudFN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbn1cblxuXG5jb25zdCBuYXZTdHlsZXMgPSB7XG59XG5cbmNvbnN0IGxpbmtTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsIHBhZGRpbmdUb3A6IDEwLCBvdXRsaW5lOiAnbm9uZSdcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ1RpdGxlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9nUGFyYWdyYXBoczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZEJsb2dJbWFnZXM6IFtdLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nVGl0bGU6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLnRpdGxlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdLmRhdGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nUGFyYWdyYXBoczogYmxvZ3NbYmxvZ3MubGVuZ3RoIC0gMV0ucGFyYWdyYXBocyxcbiAgICAgICAgICAgICAgICBzZWxlY3RCbG9nSW1hZ2VzOiBibG9nc1tibG9ncy5sZW5ndGggLSAxXS5pbWFnZXNcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGJsb2dMaXN0ID0gYmxvZ3MubWFwKChibG9nLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e25hdlN0eWxlc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0aWNreUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQmxvZ1RpdGxlOiBibG9nLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nRGF0ZTogYmxvZy5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nUGFyYWdyYXBoczogYmxvZy5wYXJhZ3JhcGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCbG9nSW1hZ2VzOiBibG9nLmltYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uTGluZTogJ25vbmUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlT2JqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vlaz17YmxvZy53ZWVrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e21vbWVudChibG9nLmRhdGUpLmZvcm1hdCgnTU1NTSBEbyBZWVlZJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TdGlja3lDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIFxuICAgICAgICAgICB9KTtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17aW5kZXhTdHlsZXN9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJyZWUrU2VyaWZcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3Bob3Rvc29tL2Nzcz9mYW1pbHk9TXVrdGE6NzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vcGhvdG9zb20vY3NzP2ZhbWlseT1Ob3RvK1NlcmlmK1RDXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgKiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICA8U2Nyb2xsYmFycyBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGVzfT5cbiAgICAgICAgICAgICAgICB7YmxvZ0xpc3R9XG4gICAgICAgICAgICA8L1Njcm9sbGJhcnM+XG4gICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ1RpdGxlfVxuICAgICAgICAgICAgICAgIGRhdGU9e21vbWVudCh0aGlzLnN0YXRlLnNlbGVjdGVkQmxvZ0RhdGUpLmZvcm1hdCgnTU1NTSBEbyBZWVlZJyl9XG4gICAgICAgICAgICAgICAgcGFyYWdyYXBocz17dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dQYXJhZ3JhcGhzfVxuICAgICAgICAgICAgICAgIGltYWdlcz17dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dJbWFnZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgIFxuICAgIH1cbiAgICBcbn0iXX0= */\n/*@ sourceURL=/home/joel/Menu-Parser/pages/index.js */",
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
//# sourceMappingURL=index.js.a9e58c94b6316a73b222.hot-update.js.map