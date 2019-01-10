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
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__);
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
  float: 'left',
  height: '95vh',
  overflowY: 'scroll',
  backgroundColor: 'rgba(51,54,59,1)',
  outline: 'none'
};
var contentStyles = {
  flexDirection: 'row'
};
var navStyles = {
  height: '95vh'
};
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
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_9__["StickyContainer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
            lineNumber: 61
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2940664450",
        css: "*{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvTWVudS1QYXJzZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZtQyxBQUdpQyxTQUNDLFVBQ1QiLCJmaWxlIjoiL2hvbWUvam9lbC9NZW51LVBhcnNlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVPYmogZnJvbSAnLi4vY29tcHMvRGF0ZU9iamVjdCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wcy9Db250ZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJztcbmltcG9ydCBibG9ncyBmcm9tICcuLi9kYXRhL2Jsb2dzLmpzb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtTdGlja3lDb250YWluZXIsIFN0aWNreX0gZnJvbSAncmVhY3Qtc3RpY2t5JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuXG5jb25zdCBpbmRleFN0eWxlcyA9IHtcbiAgICBmb250RmFtaWx5OiAnTGF0bycsXG4gICAgZmxleDogMSxcblxufVxuY29uc3QgbmF2Q29udGFpbmVyU3R5bGVzID0ge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgaGVpZ2h0OiAnOTV2aCcsXG4gICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUxLDU0LDU5LDEpJyxcbiAgICBvdXRsaW5lOiAnbm9uZSdcblxufVxuY29uc3QgY29udGVudFN0eWxlcyA9IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbn1cblxuXG5jb25zdCBuYXZTdHlsZXMgPSB7XG4gICAgaGVpZ2h0OiAnOTV2aCdcbn1cbmNvbnN0IGhvdmVyU3R5bGVzID0ge1xuICAgIG9wYWNpdHk6ICcuNydcbn1cbmNvbnN0IGxpbmtTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsIHBhZGRpbmdUb3A6IDEwLCBvdXRsaW5lOiAnbm9uZSdcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ1RpdGxlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRCbG9nQ29udGVudDogW10sXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvdmVyVG9nZ2xlID0gdGhpcy5ob3ZlclRvZ2dsZS5iaW5kKHRoaXMpXG4gICAgfVxuICAgIGhvdmVyVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXJ9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBibG9nTGlzdCA9IGJsb2dzLm1hcCgoYmxvZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtuYXZTdHlsZXN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTdGlja3lDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJsb2dUaXRsZTogYmxvZy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQmxvZ0RhdGU6IGJsb2cuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQmxvZ1BhcmFncmFwaHM6IGJsb2cucGFyYWdyYXBoc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXIgPSB7dGhpcy5ob3ZlclRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IHt0aGlzLmhvdmVyVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMuc3RhdGUuaG92ZXIgPyBob3ZlclN0eWxlcyA6IHtvcGFjaXR5OiAnMSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVPYmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrPXtibG9nLndlZWt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17bW9tZW50KGJsb2cuZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1N0aWNreUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgXG4gICAgICAgICAgIH0pO1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXtpbmRleFN0eWxlc30+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnJlZStTZXJpZlwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+IFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgICogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIHtibG9nTGlzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cblxuICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dUaXRsZX1cbiAgICAgICAgICAgICAgICBkYXRlPXttb21lbnQodGhpcy5zdGF0ZS5zZWxlY3RlZEJsb2dEYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfVxuICAgICAgICAgICAgICAgIHBhcmFncmFwaHM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRCbG9nUGFyYWdyYXBoc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSAgXG4gICAgfVxuICAgIFxufSJdfQ== */\n/*@ sourceURL=/home/joel/Menu-Parser/pages/index.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, blogList)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: this.state.selectedBlogTitle,
        date: moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.selectedBlogDate).format('MMMM Do YYYY'),
        paragraphs: this.state.selectedBlogParagraphs,
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
//# sourceMappingURL=index.js.c7b3b192970d936a21ac.hot-update.js.map