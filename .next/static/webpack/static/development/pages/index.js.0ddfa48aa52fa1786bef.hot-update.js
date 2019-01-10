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

var contentStyle = _defineProperty({
  backgroundColor: '#DFDCE3;',
  height: '95vh',
  overflowY: 'scroll',
  backgroundImage: "url(".concat('https://i.imgur.com/96u67GB.png', ")"),
  backgroundSize: 'cover'
}, "backgroundColor", 'rgba(0,0,0,0.1)');

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
          lineNumber: 42
        },
        __self: this
      }, para);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: contentContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
          lineNumber: 50
        },
        __self: this
      }, this.state.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.state.paragraphs))));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=70)}({18:function(e,t,r){var n,i,s;i=[e],void 0===(s="function"==typeof(n=function(e){"use strict";var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"getFirstMatch",value:function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(e,t,r){if(e.test(t))return r}},{key:"getWindowsVersionName",value:function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}},{key:"getVersionPrecision",value:function(e){return e.split(".").length}},{key:"compareVersions",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(i,s),a=0,u=e.map([t,r],function(t){var r=o-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});for(n&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}}},{key:"map",value:function(e,t){var r=[],n=void 0;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)r.push(t(e[n]));return r}}]),e}();e.exports=r})?n.apply(t,i):n)||(e.exports=s)},65:function(e,t,r){var n,i,s;i=[t,r(18)],void 0===(s="function"==typeof(n=function(t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){var t=(0,r.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:"EdgeHTML",version:t}}},{test:[/trident/i],describe:function(e){var t={name:"Trident"},n=(0,r.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:"Presto"},n=(0,r.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:"Gecko"},n=(0,r.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:"WebKit"},n=(0,r.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}],e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},66:function(e,t,r){var n,i,s;i=[t,r(18)],void 0===(s="function"==typeof(n=function(t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={tablet:"tablet",mobile:"mobile",desktop:"desktop"};t.default=[{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:n.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:n.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:n.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:n.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return{type:n.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=(0,r.getFirstMatch)(/(ipod|iphone)/i,e);return{type:n.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:n.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:n.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:n.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:n.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:n.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:n.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:n.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:n.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:n.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:n.desktop}}}],e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},67:function(e,t,r){var n,i,s;i=[t,r(18)],void 0===(s="function"==typeof(n=function(t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{test:[/windows phone/i],describe:function(e){var t=(0,r.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:"Windows Phone",version:t}}},{test:[/windows/i],describe:function(e){var t=(0,r.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=(0,r.getWindowsVersionName)(t);return{name:"Windows",version:t,versionName:n}}},{test:[/macintosh/i],describe:function(e){var t=(0,r.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,".");return{name:"macOS",version:t}}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=(0,r.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:"iOS",version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=(0,r.getFirstMatch)(/android[\s/-](\d+(\.\d+)*)/i,e);return{name:"Android",version:t}}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=(0,r.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:"WebOS"};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=(0,r.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||(0,r.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||(0,r.getFirstMatch)(/\bbb(\d+)/i,e);return{name:"BlackBerry",version:t}}},{test:[/bada/i],describe:function(e){var t=(0,r.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i,e);return{name:"Bada",version:t}}},{test:[/tizen/i],describe:function(e){var t=(0,r.getFirstMatch)(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:"Tizen",version:t}}},{test:[/linux/i],describe:function(){return{name:"Linux"}}}],e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},68:function(e,t,r){var n,i,s;i=[t,r(18)],void 0===(s="function"==typeof(n=function(t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=/version\/(\d+(\.?_?\d+)+)/i,i=[{test:[/opera/i],describe:function(e){var t={name:"Opera"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},i=(0,r.getFirstMatch)(/(?:opr|opios)[\s/](\S+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},i=(0,r.getFirstMatch)(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},i=(0,r.getFirstMatch)(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},i=(0,r.getFirstMatch)(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},n=(0,r.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},n=(0,r.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},n=(0,r.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},n=(0,r.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},n=(0,r.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},n=(0,r.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},n=(0,r.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},n=(0,r.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},i=(0,r.getFirstMatch)(n,e)||(0,r.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return i&&(t.version=i),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},n=(0,r.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},i=(0,r.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},i=(0,r.getFirstMatch)(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},n=(0,r.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},i=(0,r.getFirstMatch)(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},n=(0,r.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},i=(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},i=(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},i=(0,r.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i,e)||(0,r.getFirstMatch)(n,e);return i&&(t.version=i),t}},{test:[/.*/i],describe:function(e){return{name:(0,r.getFirstMatch)(/^(.*)\/(.*) /,e),version:(0,r.getSecondMatch)(/^(.*)\/(.*) /,e)}}}];t.default=i,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},69:function(e,t,r){var n,i,s;i=[t,r(68),r(67),r(66),r(65),r(18)],void 0===(s="function"==typeof(n=function(t,r,n,i,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(r),u=f(n),c=f(i),d=f(s);function f(e){return e&&e.__esModule?e:{default:e}}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t||null===t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==r&&this.parse()}return v(e,[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(e){return e.test(this._ua)}},{key:"parseBrowser",value:function(){var e=this;this.parsedResult.browser={};var t=a.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var e=this;this.parsedResult.os={};var t=u.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(e){var t=this.getOS(),r=t.name;return e?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.getPlatform(),r=t.type;return e?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var e=this;this.parsedResult.platform={};var t=c.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"parseEngine",value:function(){var e=this;this.parsedResult.engine={};var t=d.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return this.parsedResult}},{key:"satisfies",value:function(e){var t=this,r={},n=0,i={},s=0,o=Object.keys(e);if(o.forEach(function(t){var o=e[t];"string"==typeof o?(i[t]=o,s+=1):"object"===(void 0===o?"undefined":l(o))&&(r[t]=o,n+=1)}),n>0){var a=Object.keys(r),u=a.find(function(e){return t.isOS(e)});if(u){var c=this.satisfies(r[u]);if(void 0!==c)return c}var d=a.find(function(e){return t.isPlatform(e)});if(d){var f=this.satisfies(r[d]);if(void 0!==f)return f}}if(s>0){var v=Object.keys(i),p=v.find(function(e){return t.isBrowser(e)});if(void 0!==p)return this.compareVersion(i[p])}}},{key:"isBrowser",value:function(e){return this.getBrowserName(!0)===String(e).toLowerCase()}},{key:"compareVersion",value:function(e){var t=0,r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]?(t=1,r=e.substr(1)):"<"===e[0]?(t=-1,r=e.substr(1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),(0,o.compareVersions)(i,r,n)===t}},{key:"isOS",value:function(e){return this.getOSName(!0)===String(e).toLowerCase()}},{key:"isPlatform",value:function(e){return this.getPlatformType(!0)===String(e).toLowerCase()}},{key:"is",value:function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}},{key:"some",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some(function(t){return e.is(t)})}}]),e}();t.default=p,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)},70:function(e,t,r){var n,i,s;i=[t,r(69)],void 0===(s="function"==typeof(n=function(t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getParser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)}},{key:"parse",value:function(e){return new n.default(e).getResult()}}]),e}();t.default=s,e.exports=t.default})?n.apply(t,i):n)||(e.exports=s)}})});

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/NativeScrollbar.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/NativeScrollbar.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NativeScrollbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NativeScrollbar, _React$Component);

  function NativeScrollbar() {
    _classCallCheck(this, NativeScrollbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NativeScrollbar).apply(this, arguments));
  }

  _createClass(NativeScrollbar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          rtl = _this$props.rtl,
          momentum = _this$props.momentum,
          permanentTrackX = _this$props.permanentTrackX,
          permanentTrackY = _this$props.permanentTrackY,
          permanentTracks = _this$props.permanentTracks,
          noScrollX = _this$props.noScrollX,
          noScrollY = _this$props.noScrollY,
          noScroll = _this$props.noScroll,
          tagName = _this$props.tagName,
          className = _this$props.className,
          style = _this$props.style,
          elementRef = _this$props.elementRef,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["rtl", "momentum", "permanentTrackX", "permanentTrackY", "permanentTracks", "noScrollX", "noScrollY", "noScroll", "tagName", "className", "style", "elementRef", "children"]);

      var classNames = "ScrollbarsCustom native" + (rtl ? " rtl" : "") + (className ? " " + className : "");

      var styles = _objectSpread({
        position: "relative"
      }, style, rtl && {
        direction: "rtl"
      }, momentum && {
        WebkitOverflowScrolling: "touch"
      }, {
        overflowX: noScroll || noScrollX ? "hidden" : permanentTracks || permanentTrackX ? "scroll" : "auto",
        overflowY: noScroll || noScrollY ? "hidden" : permanentTracks || permanentTrackY ? "scroll" : "auto"
      });

      return _react.default.createElement(this.props.tagName, _extends({
        style: styles,
        className: classNames,
        ref: function ref(_ref) {
          _this.element = _ref;
          typeof elementRef === "function" && elementRef(_ref);
        }
      }, props), children);
    }
  }]);

  return NativeScrollbar;
}(_react.default.Component);

exports.default = NativeScrollbar;

_defineProperty(NativeScrollbar, "propTypes", {
  rtl: _propTypes.default.bool,
  momentum: _propTypes.default.bool,
  permanentTrackX: _propTypes.default.bool,
  permanentTrackY: _propTypes.default.bool,
  permanentTracks: _propTypes.default.bool,
  noScrollX: _propTypes.default.bool,
  noScrollY: _propTypes.default.bool,
  noScroll: _propTypes.default.bool,
  tagName: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  elementRef: _propTypes.default.func
});

_defineProperty(NativeScrollbar, "defaultProps", {
  tagName: "div"
});

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/Thumb.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/Thumb.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TYPE_Y = exports.TYPE_X = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Track = _interopRequireDefault(__webpack_require__(/*! ./Track */ "./node_modules/react-scrollbars-custom/dist/Track.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TYPE_X = 1;
exports.TYPE_X = TYPE_X;
var TYPE_Y = 2;
exports.TYPE_Y = TYPE_Y;

var Thumb =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Thumb, _React$Component);

  function Thumb(props) {
    var _this;

    _classCallCheck(this, Thumb);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Thumb).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragStart", function (ev) {
      if (ev.nativeEvent.which !== 1) {
        return;
      }

      ev.nativeEvent.preventDefault();
      ev.nativeEvent.stopImmediatePropagation();
      _this.isDragging = true;

      _this.element.classList.add("dragging");

      var rect = _this.element.getBoundingClientRect(),
          parentRect = _this.element.offsetParent.getBoundingClientRect(); // drag start offset


      _this.dragStartOffsetX = ev.clientX - rect.left - rect.width / 2;
      _this.dragStartOffsetY = ev.clientY - rect.top - rect.height / 2;

      if (global.document) {
        global.document.addEventListener("mousemove", _this.handleDragEvent);
        global.document.addEventListener("mouseup", _this.handleDragEnd);
        _this.prevUserSelect = global.document.body.style.userSelect;
        global.document.body.style.userSelect = "none";
        _this.prevOnSelectStart = global.document.onselectstart;

        global.document.onselectstart = function () {
          return false;
        };
      }

      _this.props.onDragStart && _this.props.onDragStart({
        axis: _this.props.type,
        offset: _this.props.type === TYPE_X ? ev.clientX - parentRect.left - _this.dragStartOffsetX : ev.clientY - parentRect.top - _this.dragStartOffsetY
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragEvent", function (ev) {
      if (ev.which !== 1 || !_this.props.onDrag) {
        return;
      } else if (!_this.isDragging) {
        _this.handleDragEnd();

        return;
      }

      var parentRect = _this.element.offsetParent.getBoundingClientRect();

      _this.props.onDrag({
        axis: _this.props.type,
        offset: _this.props.type === TYPE_X ? ev.clientX - parentRect.left - _this.dragStartOffsetX : ev.clientY - parentRect.top - _this.dragStartOffsetY
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragEnd", function () {
      _this.dragStartOffsetX = false;
      _this.dragStartOffsetY = false;

      _this.element.classList.remove("dragging");

      if (global.document) {
        global.document.removeEventListener("mousemove", _this.handleDragEvent);
        global.document.removeEventListener("mouseup", _this.handleDragEnd);
        global.document.body.style.userSelect = _this.prevUserSelect;
        _this.prevUserSelect = null;
        global.document.onselectstart = _this.prevOnSelectStart;
        _this.prevOnSelectStart = null;
      }

      if (!_this.isDragging) {
        return;
      }

      _this.isDragging = false;
      _this.props.onDragEnd && _this.props.onDragEnd({
        axis: _this.props.type
      });
    });

    return _this;
  }

  _createClass(Thumb, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleDragEnd();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          renderer = _this$props.renderer,
          type = _this$props.type,
          elementRef = _this$props.elementRef,
          onDrag = _this$props.onDrag,
          onDragStart = _this$props.onDragStart,
          onDragEnd = _this$props.onDragEnd,
          props = _objectWithoutProperties(_this$props, ["className", "renderer", "type", "elementRef", "onDrag", "onDragStart", "onDragEnd"]);

      props.className = "thumb " + (type === TYPE_X ? "thumbX" : "thumbY") + (className ? " " + className : "");
      props.onMouseDown = this.handleDragStart;

      var ref = function ref(_ref) {
        typeof elementRef === "function" && elementRef(_ref);
        _this2.element = _ref;
      };

      return renderer ? renderer(_objectSpread({}, props, {
        elementRef: ref
      })) : _react.default.createElement("div", _extends({}, props, {
        ref: ref
      }));
    }
  }]);

  return Thumb;
}(_react.default.Component);

exports.default = Thumb;

_defineProperty(Thumb, "displayName", "Scrollbar Thumb");

_defineProperty(Thumb, "propTypes", _objectSpread({}, _Track.default.propTypes, {
  onDrag: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDragEnd: _propTypes.default.func
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/Track.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/Track.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TYPE_Y = exports.TYPE_X = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TYPE_X = 1;
exports.TYPE_X = TYPE_X;
var TYPE_Y = 2;
exports.TYPE_Y = TYPE_Y;

var Track =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Track, _React$Component);

  function Track(props) {
    var _this;

    _classCallCheck(this, Track);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Track).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickHandler", function (ev) {
      if (ev.target !== _this.element || !_this.props.onClick) {
        return true;
      }

      var rect = _this.element.getBoundingClientRect();

      _this.props.onClick(ev, {
        axis: _this.props.type,
        offset: _this.props.type === TYPE_X ? ev.clientX - rect.left : ev.clientY - rect.top
      });
    });

    return _this;
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          renderer = _this$props.renderer,
          type = _this$props.type,
          elementRef = _this$props.elementRef,
          onClick = _this$props.onClick,
          props = _objectWithoutProperties(_this$props, ["className", "renderer", "type", "elementRef", "onClick"]);

      props.className = "track " + (type === TYPE_X ? "trackX" : "trackY") + (className ? " " + className : "");
      props.onClick = this.onClickHandler;

      var ref = function ref(_ref) {
        typeof elementRef === "function" && elementRef(_ref);
        _this2.element = _ref;
      };

      return renderer ? renderer(_objectSpread({}, props, {
        elementRef: ref
      })) : _react.default.createElement("div", _extends({}, props, {
        ref: ref
      }));
    }
  }]);

  return Track;
}(_react.default.Component);

exports.default = Track;

_defineProperty(Track, "displayName", "Scrollbar Track");

_defineProperty(Track, "propTypes", {
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  type: _propTypes.default.oneOf([TYPE_X, TYPE_Y]).isRequired,
  elementRef: _propTypes.default.func,
  renderer: _propTypes.default.func
});

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bowser = _interopRequireDefault(__webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _NativeScrollbar = _interopRequireDefault(__webpack_require__(/*! ./NativeScrollbar */ "./node_modules/react-scrollbars-custom/dist/NativeScrollbar.js"));

var _Thumb = _interopRequireDefault(__webpack_require__(/*! ./Thumb */ "./node_modules/react-scrollbars-custom/dist/Thumb.js"));

var _Track = _interopRequireWildcard(__webpack_require__(/*! ./Track */ "./node_modules/react-scrollbars-custom/dist/Track.js"));

var _getInnerSizes = __webpack_require__(/*! ./util/getInnerSizes */ "./node_modules/react-scrollbars-custom/dist/util/getInnerSizes.js");

var _getScrollbarWidth = _interopRequireDefault(__webpack_require__(/*! ./util/getScrollbarWidth */ "./node_modules/react-scrollbars-custom/dist/util/getScrollbarWidth.js"));

var _LoopController = _interopRequireDefault(__webpack_require__(/*! ./util/LoopController */ "./node_modules/react-scrollbars-custom/dist/util/LoopController.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var browser = global.window && global.window.navigator && _bowser.default.getParser(global.window.navigator.userAgent);

var engine = browser && browser.getEngine().name;
var defaultStyles = {
  holder: {
    position: "relative",
    display: "flex"
  },
  wrapper: {
    flexGrow: 1
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  track: {
    common: {
      position: "absolute",
      overflow: "hidden",
      borderRadius: 4,
      background: "rgba(0,0,0,.1)",
      userSelect: "none"
    },
    x: {
      height: 8,
      width: "calc(100% - 16px)",
      bottom: 0,
      left: 8
    },
    y: {
      width: 8,
      height: "calc(100% - 16px)",
      top: 8
    }
  },
  thumb: {
    common: {
      cursor: "pointer",
      borderRadius: 4,
      background: "rgba(0,0,0,.4)"
    },
    x: {
      height: "100%"
    },
    y: {
      width: "100%"
    }
  }
};
/**
 * @typedef {object} ScrollValues
 *
 * @property {number|null} clientHeight - content's native clientHeight parameter
 * @property {number|null} clientWidth - content's native clientWidth parameter
 * @property {number|null} scrollHeight - content's native scrollHeight parameter
 * @property {number|null} scrollWidth - content's native scrollWidth parameter
 * @property {number|null} scrollTop - content's native scrollTop parameter
 * @property {number|null} scrollLeft - content's native scrollLeft parameter
 * @property {boolean|null} scrollYBlocked - Indicates whether vertical scroll blocked via properties
 * @property {boolean|null} scrollXBlocked - Indicates whether horizontal scroll blocked via properties
 * @property {boolean|null} scrollYPossible - Indicates whether the content overflows vertically and scrolling not blocked
 * @property {boolean|null} scrollXPossible - Indicates whether the content overflows horizontally and scrolling not blocked
 * @property {boolean|null} trackYVisible - Indicates whether vertical track is visible
 * @property {boolean|null} trackXVisible - Indicates whether horizontal track is visible
 * @property {boolean|null} isRtl - Indicates whether display direction is right-to-left
 */

var Scrollbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scrollbar, _React$Component);

  _createClass(Scrollbar, null, [{
    key: "computeThumbSize",

    /**
     * Compute the thumb size
     *
     * @param {number} trackSize
     * @param {number} scrollableSize
     * @param {number} viewportSize
     * @param {number} minimalSize
     * @return {number}
     */
    value: function computeThumbSize(trackSize, scrollableSize, viewportSize, minimalSize) {
      var size = Math.ceil(viewportSize / scrollableSize * trackSize) || 0;
      return trackSize === size ? 0 : Math.max(size, minimalSize);
    }
    /**
     * Compute the thumb offset from scroll value
     *
     * @param {number} trackSize
     * @param {number} thumbSize
     * @param {number} scrollableSize
     * @param {number} viewportSize
     * @param {number} scrollValue
     * @return {number}
     */

  }, {
    key: "computeThumbOffset",
    value: function computeThumbOffset(trackSize, thumbSize, scrollableSize, viewportSize, scrollValue) {
      return thumbSize && scrollValue / (scrollableSize - viewportSize) * (trackSize - thumbSize) || 0;
    }
    /**
     * Compute the scroll value depending on thumb offset
     *
     * @param {number} trackSize
     * @param {number} thumbSize
     * @param {number} offset
     * @param {number} scrollableSize
     * @param {number} viewportSize
     * @return {number}
     */

  }, {
    key: "computeScrollForOffset",
    value: function computeScrollForOffset(trackSize, thumbSize, offset, scrollableSize, viewportSize) {
      return (offset - thumbSize / 2) / (trackSize - thumbSize) * (scrollableSize - viewportSize) || 0;
    }
  }]);

  function Scrollbar(props) {
    var _this;

    _classCallCheck(this, Scrollbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scrollbar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollEvent", function () {
      _this.scrollDetect();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollDetect", function () {
      if (!_this.props.onScrollStart && !_this.props.onScrollStop) {
        return;
      }

      !_this.scrollDetect.timeout && _this.props.onScrollStart && _this.props.onScrollStart.call(_assertThisInitialized(_assertThisInitialized(_this)), _this.getScrollValues());
      _this.scrollDetect.timeout && clearTimeout(_this.scrollDetect.timeout);
      _this.scrollDetect.timeout = setTimeout(function () {
        _this.scrollDetect.timeout = null;
        _this.props.onScrollStop && _this.props.onScrollStop.call(_assertThisInitialized(_assertThisInitialized(_this)), _this.getScrollValues());
      }, _this.props.scrollDetectionThreshold);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function () {
      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // autodetect direction if not defined
      if (typeof _this.state.isRtl !== "boolean") {
        _this.setState({
          isRtl: getComputedStyle(_this.contentEl).direction === "rtl"
        });

        return _this.getScrollValues();
      }

      var scrollValues = _this.getScrollValues(true),
          prevScrollValues = _this.getScrollValues();

      var bitmask = 0; // calculating bitmask

      prevScrollValues.clientHeight !== scrollValues.clientHeight && (bitmask |= 1 << 0);
      prevScrollValues.clientWidth !== scrollValues.clientWidth && (bitmask |= 1 << 1);
      prevScrollValues.scrollHeight !== scrollValues.scrollHeight && (bitmask |= 1 << 2);
      prevScrollValues.scrollWidth !== scrollValues.scrollWidth && (bitmask |= 1 << 3);
      prevScrollValues.scrollTop !== scrollValues.scrollTop && (bitmask |= 1 << 4);
      prevScrollValues.scrollLeft !== scrollValues.scrollLeft && (bitmask |= 1 << 5);
      prevScrollValues.scrollYBlocked !== scrollValues.scrollYBlocked && (bitmask |= 1 << 6);
      prevScrollValues.scrollXBlocked !== scrollValues.scrollXBlocked && (bitmask |= 1 << 7);
      prevScrollValues.scrollYPossible !== scrollValues.scrollYPossible && (bitmask |= 1 << 8);
      prevScrollValues.scrollXPossible !== scrollValues.scrollXPossible && (bitmask |= 1 << 9);
      prevScrollValues.trackYVisible !== scrollValues.trackYVisible && (bitmask |= 1 << 10);
      prevScrollValues.trackXVisible !== scrollValues.trackXVisible && (bitmask |= 1 << 11);
      prevScrollValues.isRtl !== scrollValues.isRtl && (bitmask |= 1 << 12); // if not forced and nothing has changed - skip this step

      if (bitmask === 0 && !forced) {
        return prevScrollValues;
      } // if updater return true - call callbacks and cache the scroll values


      if ((_this.props.native ? _this.updaterNative : _this.updaterCustom).call(_assertThisInitialized(_assertThisInitialized(_this)), scrollValues, prevScrollValues, bitmask)) {
        _this.scrollValues = scrollValues;
        prevScrollValues.scrollTop !== null && _this.props.onScroll && _this.props.onScroll(scrollValues, prevScrollValues);
      }

      return prevScrollValues;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTrackClick", function (e, params) {
      params.axis === _Track.TYPE_X && _this.props.trackXProps.onClick && _this.props.trackXProps.onClick(e, params);
      params.axis === _Track.TYPE_Y && _this.props.trackYProps.onClick && _this.props.trackYProps.onClick(e, params);
      var scrollTarget = params.axis === _Track.TYPE_X ? Scrollbar.computeScrollForOffset((0, _getInnerSizes.getInnerWidth)(_this.trackXEl), _this.thumbXEl.clientWidth, params.offset, _this.contentEl.scrollWidth, _this.contentEl.clientWidth) : Scrollbar.computeScrollForOffset((0, _getInnerSizes.getInnerHeight)(_this.trackYEl), _this.thumbYEl.clientHeight, params.offset, _this.contentEl.scrollHeight, _this.contentEl.clientHeight);

      if (_this.props.trackClickBehavior === "jump") {
        params.axis === _Track.TYPE_X && (_this.contentEl.scrollLeft = scrollTarget);
        params.axis === _Track.TYPE_Y && (_this.contentEl.scrollTop = scrollTarget);
      } else if (_this.props.trackClickBehavior === "step") {
        params.axis === _Track.TYPE_X && (_this.contentEl.scrollLeft = _this.contentEl.scrollLeft < scrollTarget ? _this.contentEl.scrollLeft + _this.contentEl.clientWidth : _this.contentEl.scrollLeft - _this.contentEl.clientWidth);
        params.axis === _Track.TYPE_Y && (_this.contentEl.scrollTop = _this.contentEl.scrollTop < scrollTarget ? _this.contentEl.scrollTop + _this.contentEl.clientHeight : _this.contentEl.scrollTop - _this.contentEl.clientHeight);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleThumbDragStart", function (params) {
      params.axis === _Track.TYPE_X && _this.props.thumbXProps.onDragStart && _this.props.thumbXProps.onDragStart(params);
      params.axis === _Track.TYPE_Y && _this.props.thumbYProps.onDragStart && _this.props.thumbYProps.onDragStart(params);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleThumbDragEnd", function (params) {
      params.axis === _Track.TYPE_X && _this.props.thumbXProps.onDragEnd && _this.props.thumbXProps.onDragEnd(params);
      params.axis === _Track.TYPE_Y && _this.props.thumbYProps.onDragEnd && _this.props.thumbYProps.onDragEnd(params);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleThumbDrag", function (params) {
      _this.scrollDetect();

      if (params.axis === _Track.TYPE_X) {
        _this.props.thumbXProps.onDrag && _this.props.thumbXProps.onDrag(params);
        var trackWidth = (0, _getInnerSizes.getInnerWidth)(_this.trackXEl);
        var offset = params.offset;

        if (_this.state.isRtl) {
          if (engine === "Trident" || engine === "EdgeHTML") {
            offset = trackWidth - offset;
          } else if (engine !== "Blink") {
            offset -= _this.thumbXEl.clientWidth / 2;
          }
        }

        _this.contentEl.scrollLeft = Scrollbar.computeScrollForOffset(trackWidth, _this.thumbXEl.clientWidth, offset, _this.contentEl.scrollWidth, _this.contentEl.clientWidth);
      }

      if (params.axis === _Track.TYPE_Y) {
        _this.props.thumbYProps.onDrag && _this.props.thumbYProps.onDrag(params);
        _this.contentEl.scrollTop = Scrollbar.computeScrollForOffset((0, _getInnerSizes.getInnerHeight)(_this.trackYEl), _this.thumbYEl.clientHeight, params.offset, _this.contentEl.scrollHeight, _this.contentEl.clientHeight);
      }
    });

    _this.state = {
      trackYVisible: true,
      trackXVisible: true,
      isRtl: _this.props.rtl
    };
    _this.scrollValues = _this.getScrollValues(true);
    return _this;
  }

  _createClass(Scrollbar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.rtl !== prevProps.rtl && this.props.rtl !== this.state.isRtl) {
        this.setState({
          isRtl: this.props.rtl
        });
      }

      if (this.state.isRtl !== prevState.isRtl) {
        this.update();
      }

      if (this.props.scrollTop !== prevProps.scrollTop) {
        if (typeof this.props.scrollTop !== "undefined") {
          this.contentEl.scrollTop = this.props.scrollTop;
        }
      }

      if (this.props.scrollLeft !== prevProps.scrollLeft) {
        if (typeof this.props.scrollLeft !== "undefined") {
          this.contentEl.scrollLeft = this.props.scrollLeft;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _LoopController.default.registerScrollbar(this);

      this.contentEl.addEventListener("scroll", this.handleScrollEvent, {
        passive: true
      });

      if (typeof this.props.scrollTop !== "undefined") {
        this.contentEl.scrollTop = this.props.scrollTop;
      }

      if (typeof this.props.scrollLeft !== "undefined") {
        this.contentEl.scrollLeft = this.props.scrollLeft;
      }

      this.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _LoopController.default.unregisterScrollbar(this);

      this.contentEl.removeEventListener("scroll", this.handleScrollEvent, {
        passive: true
      });
    }
  }, {
    key: "scrollTo",

    /**
     *  Set scroll at given coordinates
     *
     * @param {number} x
     * @param {number} y
     *
     * @return {Scrollbar}
     */
    value: function scrollTo(y, x) {
      this.contentEl.scrollTop = y;
      this.contentEl.scrollLeft = x;
      return this;
    }
    /**
     *  Set viewport's center at given coordinates
     *
     * @param {number} x
     * @param {number} y
     *
     * @return {Scrollbar}
     */

  }, {
    key: "centerAt",
    value: function centerAt(y, x) {
      this.contentEl.scrollTop = y - this.contentEl.clientHeight / 2;
      this.contentEl.scrollLeft = x - this.contentEl.clientWidth / 2;
      return this;
    }
    /**
     * Return the vertical scroll position
     *
     * @return {number}
     */

  }, {
    key: "scrollToTop",

    /**
     * Scrol to the top border
     *
     * @return {Scrollbar}
     */
    value: function scrollToTop() {
      if (this.contentEl) {
        this.contentEl.scrollTop = 0;
      }

      return this;
    }
    /**
     * Scroll to the bottom border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      if (this.contentEl) {
        this.contentEl.scrollTop = this.contentEl.scrollHeight;
      }

      return this;
    }
    /**
     * Scrolls to the left border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToLeft",
    value: function scrollToLeft() {
      if (this.contentEl) {
        this.contentEl.scrollLeft = 0;
      }

      return this;
    }
    /**
     * Scroll to the right border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToRight",
    value: function scrollToRight() {
      if (this.contentEl) {
        this.contentEl.scrollLeft = this.contentEl.scrollWidth;
      }

      return this;
    }
    /**
     * @param {boolean} force
     *
     * @return {ScrollValues}
     */

  }, {
    key: "getScrollValues",
    value: function getScrollValues() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!force) {
        return this.scrollValues;
      }

      var scrollValues = {
        clientHeight: null,
        clientWidth: null,
        scrollHeight: null,
        scrollWidth: null,
        scrollTop: null,
        scrollLeft: null,
        scrollYBlocked: null,
        scrollXBlocked: null,
        scrollYPossible: null,
        scrollXPossible: null,
        trackYVisible: null,
        trackXVisible: null,
        isRtl: null
      };

      if (this.contentEl) {
        scrollValues.clientHeight = this.contentEl.clientHeight;
        scrollValues.clientWidth = this.contentEl.clientWidth;
        scrollValues.scrollHeight = this.contentEl.scrollHeight;
        scrollValues.scrollWidth = this.contentEl.scrollWidth;
        scrollValues.scrollTop = this.contentEl.scrollTop;
        scrollValues.scrollLeft = this.contentEl.scrollLeft;
        scrollValues.scrollYBlocked = this.props.noScroll || this.props.noScrollY;
        scrollValues.scrollXBlocked = this.props.noScroll || this.props.noScrollX;
        scrollValues.scrollYPossible = !scrollValues.scrollYBlocked && scrollValues.scrollHeight > scrollValues.clientHeight;
        scrollValues.scrollXPossible = !scrollValues.scrollXBlocked && scrollValues.scrollWidth > scrollValues.clientWidth;
        scrollValues.trackYVisible = scrollValues.scrollYPossible || this.props.permanentTracks || this.props.permanentTrackY;
        scrollValues.trackXVisible = scrollValues.scrollXPossible || this.props.permanentTracks || this.props.permanentTrackX;
        scrollValues.isRtl = this.state.isRtl;
      }

      return scrollValues;
    }
    /**
     *
     * @param forced
     * @return {ScrollValues}
     */

  }, {
    key: "updaterCustom",

    /**
     * @param {ScrollValues} scrollValues current scroll values
     * @param {ScrollValues} prevScrollValues scroll values that been before the update process
     * @param {number} bitmask bit mask that represents difference between prev scroll values and current ones
     *
     * @return {boolean} whether to save current scroll values or not
     */
    value: function updaterCustom(scrollValues, prevScrollValues, bitmask) {
      // if scrollbars visibility has changed
      if (bitmask & 1 << 10 || bitmask & 1 << 11) {
        this.scrollValues.scrollYBlocked = scrollValues.scrollYBlocked;
        this.scrollValues.scrollXBlocked = scrollValues.scrollXBlocked;
        this.scrollValues.scrollYPossible = scrollValues.scrollYPossible;
        this.scrollValues.scrollXPossible = scrollValues.scrollXPossible;
        this.setState({
          trackYVisible: this.scrollValues.trackYVisible = scrollValues.trackYVisible,
          trackXVisible: this.scrollValues.trackXVisible = scrollValues.trackXVisible
        });
        return false;
      } // if Y track rendered and changed anything related to scrollY


      if (this.trackYEl) {
        bitmask & 1 << 10 && (this.trackYEl.style.display = scrollValues.trackYVisible ? null : "none");

        if (bitmask & 1 << 0 || bitmask & 1 << 2 || bitmask & 1 << 4 || bitmask & 1 << 6 || bitmask & 1 << 8) {
          if (scrollValues.scrollYPossible) {
            var trackSize = (0, _getInnerSizes.getInnerHeight)(this.trackYEl);
            var thumbSize = Scrollbar.computeThumbSize(trackSize, scrollValues.scrollHeight, scrollValues.clientHeight, this.props.minimalThumbsSize);
            var thumbOffset = Scrollbar.computeThumbOffset(trackSize, thumbSize, scrollValues.scrollHeight, scrollValues.clientHeight, scrollValues.scrollTop);
            this.thumbYEl.style.transform = "translateY(".concat(thumbOffset, "px)");
            this.thumbYEl.style.height = thumbSize + "px";
            this.thumbYEl.style.display = null;
          } else {
            this.thumbYEl.style.transform = null;
            this.thumbYEl.style.height = "0px";
            this.thumbYEl.style.display = "none";
          }
        }
      } // if X track rendered and changed anything related to scrollX


      if (this.trackXEl) {
        bitmask & 1 << 11 && (this.trackXEl.style.display = scrollValues.trackXVisible ? null : "none");

        if (bitmask & 1 << 1 || bitmask & 1 << 3 || bitmask & 1 << 5 || bitmask & 1 << 7 || bitmask & 1 << 9) {
          if (scrollValues.scrollXPossible) {
            var _trackSize = (0, _getInnerSizes.getInnerWidth)(this.trackXEl);

            var _thumbSize = Scrollbar.computeThumbSize(_trackSize, scrollValues.scrollWidth, scrollValues.clientWidth, this.props.minimalThumbsSize);

            var _thumbOffset = Scrollbar.computeThumbOffset(_trackSize, _thumbSize, scrollValues.scrollWidth, scrollValues.clientWidth, scrollValues.scrollLeft);

            if (this.state.isRtl) {
              if (engine === "Blink") {
                _thumbOffset = _thumbSize + _thumbOffset - _trackSize;
              } else if (engine === "Trident" || engine === "EdgeHTML") {
                _thumbOffset *= -1;
              }
            }

            this.thumbXEl.style.transform = "translateX(".concat(_thumbOffset, "px)");
            this.thumbXEl.style.width = _thumbSize + "px";
            this.thumbXEl.style.display = null;
          } else {
            this.thumbXEl.style.transform = null;
            this.thumbXEl.style.width = "0px";
            this.thumbXEl.style.display = "none";
          }
        }
      }

      if (this.props.translateContentSizesToHolder && this.holderEl && (bitmask & 1 << 2 || bitmask & 1 << 3)) {
        this.holderEl.style.width = scrollValues.scrollWidth + "px";
        this.holderEl.style.height = scrollValues.scrollHeight + "px";
      }

      return true;
    }
    /**
     * @param {ScrollValues} scrollValues current scroll values
     * @param {ScrollValues} prevScrollValues scroll values that been before the update process
     *
     * @param {number} bitmask bit mask that represents difference between prev scroll values and current ones
     */

  }, {
    key: "updaterNative",
    value: function updaterNative(scrollValues, prevScrollValues, bitmask) {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          native = _this$props.native,
          minimalThumbsSize = _this$props.minimalThumbsSize,
          fallbackScrollbarWidth = _this$props.fallbackScrollbarWidth,
          scrollDetectionThreshold = _this$props.scrollDetectionThreshold,
          tagName = _this$props.tagName,
          className = _this$props.className,
          style = _this$props.style,
          trackClickBehavior = _this$props.trackClickBehavior,
          rtl = _this$props.rtl,
          momentum = _this$props.momentum,
          noDefaultStyles = _this$props.noDefaultStyles,
          translateContentSizesToHolder = _this$props.translateContentSizesToHolder,
          scrollLeft = _this$props.scrollLeft,
          scrollTop = _this$props.scrollTop,
          noScrollX = _this$props.noScrollX,
          noScrollY = _this$props.noScrollY,
          noScroll = _this$props.noScroll,
          permanentTrackX = _this$props.permanentTrackX,
          permanentTrackY = _this$props.permanentTrackY,
          permanentTracks = _this$props.permanentTracks,
          removeTracksWhenNotUsed = _this$props.removeTracksWhenNotUsed,
          removeTrackYWhenNotUsed = _this$props.removeTrackYWhenNotUsed,
          removeTrackXWhenNotUsed = _this$props.removeTrackXWhenNotUsed,
          propsWrapperProps = _this$props.wrapperProps,
          propsContentProps = _this$props.contentProps,
          propsTrackXProps = _this$props.trackXProps,
          propsTrackYProps = _this$props.trackYProps,
          propsThumbXProps = _this$props.thumbXProps,
          propsThumbYProps = _this$props.thumbYProps,
          wrapperRenderer = _this$props.wrapperRenderer,
          contentRenderer = _this$props.contentRenderer,
          trackXRenderer = _this$props.trackXRenderer,
          trackYRenderer = _this$props.trackYRenderer,
          thumbXRenderer = _this$props.thumbXRenderer,
          thumbYRenderer = _this$props.thumbYRenderer,
          onScroll = _this$props.onScroll,
          onScrollStart = _this$props.onScrollStart,
          onScrollStop = _this$props.onScrollStop,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["native", "minimalThumbsSize", "fallbackScrollbarWidth", "scrollDetectionThreshold", "tagName", "className", "style", "trackClickBehavior", "rtl", "momentum", "noDefaultStyles", "translateContentSizesToHolder", "scrollLeft", "scrollTop", "noScrollX", "noScrollY", "noScroll", "permanentTrackX", "permanentTrackY", "permanentTracks", "removeTracksWhenNotUsed", "removeTrackYWhenNotUsed", "removeTrackXWhenNotUsed", "wrapperProps", "contentProps", "trackXProps", "trackYProps", "thumbXProps", "thumbYProps", "wrapperRenderer", "contentRenderer", "trackXRenderer", "trackYRenderer", "thumbXRenderer", "thumbYRenderer", "onScroll", "onScrollStart", "onScrollStop", "children"]);

      var _this$state = this.state,
          trackXVisible = _this$state.trackXVisible,
          trackYVisible = _this$state.trackYVisible;
      var scrollValues = this.getScrollValues();

      if (native) {
        return _react.default.createElement(_NativeScrollbar.default, _extends({
          rtl: rtl,
          momentum: momentum,
          permanentTrackX: permanentTrackX,
          permanentTrackY: permanentTrackY,
          permanentTracks: permanentTracks,
          noScrollX: noScrollX,
          noScrollY: noScrollY,
          noScroll: noScroll,
          tagName: tagName,
          className: (trackYVisible ? " trackYVisible" : "") + (trackYVisible ? " trackXVisible" : "") + (className ? " " + className : ""),
          style: style,
          elementRef: function elementRef(ref) {
            return _this2.contentEl = ref;
          },
          onScroll: this.handleScrollEvent,
          children: children
        }, props));
      }

      var browserSBW = (0, _getScrollbarWidth.default)();
      var scrollbarWidth = browserSBW || fallbackScrollbarWidth;

      var wrapperProps = _objectSpread({}, propsWrapperProps),
          contentProps = _objectSpread({}, propsContentProps),
          trackXProps = _objectSpread({}, propsTrackXProps),
          trackYProps = _objectSpread({}, propsTrackYProps),
          thumbXProps = _objectSpread({}, propsThumbXProps),
          thumbYProps = _objectSpread({}, propsThumbYProps);

      wrapperProps.key = "wrapper";
      contentProps.key = "content";
      trackXProps.key = "trackX";
      trackYProps.key = "trackY";
      thumbXProps.key = "thumbX";
      thumbYProps.key = "thumbY";

      if (!noDefaultStyles) {
        var _objectSpread2;

        props.style = _objectSpread({}, defaultStyles.holder);
        wrapperProps.style = _objectSpread({}, defaultStyles.wrapper, (_objectSpread2 = {}, _defineProperty(_objectSpread2, this.state.isRtl ? "marginLeft" : "marginRight", trackYVisible ? 8 : null), _defineProperty(_objectSpread2, "marginBottom", trackXVisible ? 8 : null), _objectSpread2));
        trackXProps.style = _objectSpread({}, defaultStyles.track.common, defaultStyles.track.x);
        trackYProps.style = _objectSpread({}, defaultStyles.track.common, defaultStyles.track.y, _defineProperty({}, this.state.isRtl ? "left" : "right", 0));
        thumbXProps.style = _objectSpread({}, defaultStyles.thumb.common, defaultStyles.thumb.x);
        thumbYProps.style = _objectSpread({}, defaultStyles.thumb.common, defaultStyles.thumb.y);
      }

      props.style = _objectSpread({}, props.style, style, typeof rtl !== "undefined" && {
        direction: rtl ? "rtl" : "ltr"
      });
      wrapperProps.style = _objectSpread({}, wrapperProps.style, propsWrapperProps.style, {
        position: "relative",
        overflow: "hidden"
      });
      contentProps.style = _objectSpread({}, defaultStyles.content, propsContentProps.style, momentum && {
        WebkitOverflowScrolling: "touch"
      }, {
        overflowY: scrollValues.scrollYPossible ? "scroll" : "hidden",
        overflowX: scrollValues.scrollXPossible ? "scroll" : "hidden"
      }, this.state.isRtl ? {
        paddingLeft: !browserSBW && scrollValues.scrollYPossible ? scrollbarWidth : null,
        marginLeft: scrollValues.scrollYPossible ? -scrollbarWidth : null
      } : {
        paddingRight: !browserSBW && scrollValues.scrollYPossible ? scrollbarWidth : null,
        marginRight: scrollValues.scrollYPossible ? -scrollbarWidth : null
      }, {
        paddingBottom: !browserSBW && scrollValues.scrollXPossible ? scrollbarWidth : null,
        marginBottom: scrollValues.scrollXPossible ? -scrollbarWidth : null
      });
      trackXProps.style = _objectSpread({}, trackXProps.style, propsTrackXProps.style, !trackXVisible && {
        display: "none"
      });
      trackYProps.style = _objectSpread({}, trackYProps.style, propsTrackYProps.style, !trackYVisible && {
        display: "none"
      });
      thumbXProps.style = _objectSpread({}, thumbXProps.style, propsThumbXProps.style);
      thumbYProps.style = _objectSpread({}, thumbYProps.style, propsThumbYProps.style);
      props.className = "ScrollbarsCustom" + (trackYVisible ? " trackYVisible" : "") + (trackYVisible ? " trackXVisible" : "") + (this.state.isRtl ? " rtl" : "") + (className ? " " + className : "");
      contentProps.className = "content" + (contentProps.className ? " " + contentProps.className : "");
      wrapperProps.className = "wrapper" + (wrapperProps.className ? " " + wrapperProps.className : "");

      props.ref = function (ref) {
        _this2.holderEl = ref;
      };

      wrapperProps[wrapperRenderer ? "elementRef" : "ref"] = function (ref) {
        _this2.wrapperEl = ref;
      };

      contentProps[contentRenderer ? "elementRef" : "ref"] = function (ref) {
        _this2.contentEl = ref;
      };

      trackXProps.elementRef = function (ref) {
        _this2.trackXEl = ref;
      };

      trackYProps.elementRef = function (ref) {
        _this2.trackYEl = ref;
      };

      thumbXProps.elementRef = function (ref) {
        _this2.thumbXEl = ref;
      };

      thumbYProps.elementRef = function (ref) {
        _this2.thumbYEl = ref;
      };

      trackXProps.renderer = trackXRenderer;
      trackYProps.renderer = trackYRenderer;
      thumbXProps.renderer = thumbXRenderer;
      thumbYProps.renderer = thumbYRenderer;
      trackYProps.onClick = trackXProps.onClick = this.handleTrackClick;
      thumbYProps.onDragStart = thumbXProps.onDragStart = this.handleThumbDragStart;
      thumbYProps.onDragEnd = thumbXProps.onDragEnd = this.handleThumbDragEnd;
      thumbYProps.onDrag = thumbXProps.onDrag = this.handleThumbDrag;
      contentProps.children = children;
      wrapperProps.children = contentRenderer ? contentRenderer(contentProps) : _react.default.createElement("div", contentProps);
      return _react.default.createElement(this.props.tagName, props, wrapperRenderer ? wrapperRenderer(wrapperProps) : _react.default.createElement("div", wrapperProps), (trackYVisible || !(removeTracksWhenNotUsed && removeTrackYWhenNotUsed)) && _react.default.createElement(_Track.default, _extends({
        type: _Track.TYPE_Y
      }, trackYProps), _react.default.createElement(_Thumb.default, _extends({
        type: _Track.TYPE_Y
      }, thumbYProps))), (trackXVisible || !(removeTracksWhenNotUsed && removeTrackXWhenNotUsed)) && _react.default.createElement(_Track.default, _extends({
        type: _Track.TYPE_X
      }, trackXProps), _react.default.createElement(_Thumb.default, _extends({
        type: _Track.TYPE_X
      }, thumbXProps))));
    }
  }, {
    key: "scrollTop",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.scrollTop;
      }

      return 0;
    }
    /**
     *
     * Set the vertical scroll to given amount of pixels
     *
     * @param top {number} Pixels amount
     */
    ,
    set: function set(top) {
      if (this.contentEl) {
        this.contentEl.scrollTop = top;
        this.update();
      }
    }
    /**
     * Return the horizontal scroll position
     *
     * @return {number}
     */

  }, {
    key: "scrollLeft",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.scrollLeft;
      }

      return 0;
    }
    /**
     * Set the horizontal scroll to given amount of pixels
     *
     * @param left {number} Pixels amount
     */
    ,
    set: function set(left) {
      if (this.contentEl) {
        this.contentEl.scrollLeft = left;
      }
    }
    /**
     * @return {number}
     */

  }, {
    key: "scrollHeight",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.scrollHeight;
      }

      return 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "scrollWidth",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.scrollWidth;
      }

      return 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "clientHeight",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.clientHeight;
      }

      return 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "clientWidth",
    get: function get() {
      if (this.contentEl) {
        return this.contentEl.clientWidth;
      }

      return 0;
    }
  }]);

  return Scrollbar;
}(_react.default.Component);

exports.default = Scrollbar;

_defineProperty(Scrollbar, "propTypes", {
  native: _propTypes.default.bool,
  minimalThumbsSize: _propTypes.default.number,
  fallbackScrollbarWidth: _propTypes.default.number,
  tagName: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  trackClickBehavior: _propTypes.default.oneOf(["jump", "step"]),
  rtl: _propTypes.default.bool,
  momentum: _propTypes.default.bool,
  noDefaultStyles: _propTypes.default.bool,
  scrollDetectionThreshold: _propTypes.default.number,
  translateContentSizesToHolder: _propTypes.default.bool,
  scrollTop: _propTypes.default.number,
  scrollLeft: _propTypes.default.number,
  noScrollX: _propTypes.default.bool,
  noScrollY: _propTypes.default.bool,
  noScroll: _propTypes.default.bool,
  removeTracksWhenNotUsed: _propTypes.default.bool,
  removeTrackYWhenNotUsed: _propTypes.default.bool,
  removeTrackXWhenNotUsed: _propTypes.default.bool,
  permanentTrackX: _propTypes.default.bool,
  permanentTrackY: _propTypes.default.bool,
  permanentTracks: _propTypes.default.bool,
  wrapperProps: _propTypes.default.object,
  contentProps: _propTypes.default.object,
  trackXProps: _propTypes.default.object,
  trackYProps: _propTypes.default.object,
  thumbXProps: _propTypes.default.object,
  thumbYProps: _propTypes.default.object,
  wrapperRenderer: _propTypes.default.func,
  contentRenderer: _propTypes.default.func,
  trackXRenderer: _propTypes.default.func,
  trackYRenderer: _propTypes.default.func,
  thumbXRenderer: _propTypes.default.func,
  thumbYRenderer: _propTypes.default.func,
  onScroll: _propTypes.default.func,
  onScrollStart: _propTypes.default.func,
  onScrollStop: _propTypes.default.func
});

_defineProperty(Scrollbar, "defaultProps", {
  native: false,
  tagName: "div",
  minimalThumbsSize: 30,
  fallbackScrollbarWidth: 20,
  trackClickBehavior: "jump",
  momentum: true,
  noDefaultStyles: false,
  scrollDetectionThreshold: 100,
  translateContentSizesToHolder: false,
  noScrollX: false,
  noScrollY: false,
  noScroll: false,
  permanentTrackX: false,
  permanentTrackY: false,
  permanentTracks: false,
  removeTracksWhenNotUsed: true,
  removeTrackYWhenNotUsed: true,
  removeTrackXWhenNotUsed: true,
  wrapperProps: {},
  contentProps: {},
  trackXProps: {},
  trackYProps: {},
  thumbXProps: {},
  thumbYProps: {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/util/LoopController.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/util/LoopController.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLoopController = createLoopController;
exports.default = exports.LoopController = void 0;

function LoopControllerClass() {
  var _this = this;

  /**
   * @typedef {Object} Scrollbar
   * @property {function} update
   */

  /**
   * @type {Scrollbar[]}
   */
  var scrollbarsRegister = [];
  /**
   * true if loop is active
   * @type {boolean}
   */

  var isActive = false;
  /**
   * ID of requested animation frame
   * @type {null|number}
   */

  var animationFrameId = null;
  /**
   * Function that called in animation frame
   */

  var animationFrameCallback = function animationFrameCallback() {
    if (!isActive) {
      return;
    }

    for (var _i = 0; _i < scrollbarsRegister.length; _i++) {
      var scrollbar = scrollbarsRegister[_i];
      scrollbar.update();
    }

    requestAnimationFrame(animationFrameCallback);
  };
  /**
   * Stop the loop if it wasn't active
   * @return {LoopControllerClass}
   */


  this.start = function () {
    if (!isActive) {
      isActive = true;
      animationFrameId && cancelAnimationFrame(animationFrameId);
      requestAnimationFrame(animationFrameCallback);
    }

    return _this;
  };
  /**
   * Stop the loop if it is active
   * @return {LoopControllerClass}
   */


  this.stop = function () {
    if (isActive) {
      isActive = false;
      animationFrameId && cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    return _this;
  };
  /**
   * Return the array pf registered scrollbars
   * @return {Scrollbar[]}
   */


  this.getRegisteredScrollbars = function () {
    return scrollbarsRegister.concat();
  };
  /**
   * Add the scrollbar to list to iterate each loop
   * @param {Scrollbar} scrollbar
   * @return {LoopControllerClass}
   */


  this.registerScrollbar = function (scrollbar) {
    if (scrollbarsRegister.indexOf(scrollbar) === -1) {
      scrollbarsRegister.push(scrollbar);

      _this.start();
    }

    return _this;
  };
  /**
   * Remove the scrollbar from list to iterate each loop
   * @param {Scrollbar} scrollbar
   * @return {LoopControllerClass}
   */


  this.unregisterScrollbar = function (scrollbar) {
    var index = scrollbarsRegister.indexOf(scrollbar);

    if (index !== -1) {
      scrollbarsRegister.splice(index, 1);
    }

    return _this;
  };
}

var LoopController = new LoopControllerClass();
exports.LoopController = LoopController;
var _default = LoopController;
/**
 * Return new instance of LoopControllerClass
 * @return {LoopControllerClass}
 */

exports.default = _default;

function createLoopController() {
  return new LoopControllerClass();
}

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/util/getInnerSizes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/util/getInnerSizes.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInnerHeight = getInnerHeight;
exports.getInnerWidth = getInnerWidth;
exports.getInnerSizes = getInnerSizes;

/**
 * @description Returns element"s height without padding
 * @param {HTMLElement} el
 * @return {number}
 */
function getInnerHeight(el) {
  var styles = getComputedStyle(el);
  return el.clientHeight - styles.paddingTop.slice(0, -2) - styles.paddingBottom.slice(0, -2);
}
/**
 * @description Returns element"s width without padding
 * @param {HTMLElement} el
 * @return {number}
 */


function getInnerWidth(el) {
  var styles = getComputedStyle(el);
  return el.clientWidth - styles.paddingLeft.slice(0, -2) - styles.paddingRight.slice(0, -2);
}
/**
 * @description Returns element"s dimensions without padding
 * @param {HTMLElement} el
 * @return {{width: number, height: number}}
 */


function getInnerSizes(el) {
  var styles = getComputedStyle(el);
  return {
    width: el.clientHeight - styles.paddingLeft.slice(0, -2) - styles.paddingRight.slice(0, -2),
    height: el.clientHeight - styles.paddingTop.slice(0, -2) - styles.paddingBottom.slice(0, -2)
  };
}

/***/ }),

/***/ "./node_modules/react-scrollbars-custom/dist/util/getScrollbarWidth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scrollbars-custom/dist/util/getScrollbarWidth.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollbarWidth;
exports.dbgSetScrollbarWidth = dbgSetScrollbarWidth;
exports.dbgSetDocument = dbgSetDocument;
exports.dbgGetDocument = dbgGetDocument;
var scrollbarWidth = null;
var doc = global.document || null;
/**
 * @description Returns scrollbar width specific for current environment
 * @return {number}
 */

function getScrollbarWidth() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!force && scrollbarWidth !== null) {
    return scrollbarWidth;
  }

  if (!doc) {
    return scrollbarWidth = 0;
  }

  var el = doc.createElement("div");
  el.setAttribute("style", "display:block;position:absolute;width:100px;height:100px;top:-9999px;overflow:scroll;");
  doc.body.appendChild(el);
  scrollbarWidth = el.offsetWidth - el.clientWidth || 0;
  doc.body.removeChild(el);
  return scrollbarWidth;
}

function dbgSetScrollbarWidth(v) {
  return scrollbarWidth = v;
}

function dbgSetDocument(v) {
  return doc = v;
}

function dbgGetDocument() {
  return doc;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.0ddfa48aa52fa1786bef.hot-update.js.map