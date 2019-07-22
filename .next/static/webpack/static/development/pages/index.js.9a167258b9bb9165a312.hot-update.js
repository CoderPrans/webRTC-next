webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");

var _jsxFileName = "/home/coder-prans/Desktop/develop.../web-chat/pages/index.js";





var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      showbox = _useState4[0],
      setShowbox = _useState4[1];

  var doChatShit = function doChatShit() {
    alert("Welcome ".concat(name));
    setShowbox(false);
  };

  if (!location.hash) {
    location.hash = Math.floor(Math.random() * 0xffffff).toString(16);
  }

  var chatHash = location.hash.substring(1);
  console.log(chatHash);
  var drone = new Scaledrone('hc4l8B2ejDQcIBLKi');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2332887812" + " " + "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    placeholder: "your name ?",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      e.which === 13 ? doChatShit() : null;
    },
    value: name,
    style: {
      width: 130,
      padding: '8px',
      margin: '10px',
      fontSize: 16,
      borderRadius: 2,
      border: '1px solid #DDD'
    },
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2332887812",
    __self: this
  }, "h1.jsx-2332887812{font-family:Arial;}button.jsx-2332887812{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBRzZCLEFBR04sWUFDRSxNQUhoQixRQUlpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNOLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9jb2Rlci1wcmFucy9EZXNrdG9wL2RldmVsb3AuLi4vd2ViLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93Ym94LCBzZXRTaG93Ym94XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGRvQ2hhdFNoaXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoYFdlbGNvbWUgJHtuYW1lfWApO1xuICAgIHNldFNob3dib3goZmFsc2UpO1xuICB9O1xuXG4gIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgY29uc3QgY2hhdEhhc2ggPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgY29uc29sZS5sb2coY2hhdEhhc2gpO1xuXG4gIGNvbnN0IGRyb25lID0gbmV3IFNjYWxlZHJvbmUoJ2hjNGw4QjJlakRRY0lCTEtpJyk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFdlYi1DaGF0eyFzaG93Ym94ICYmIGAsICR7bmFtZX1gfTwvaDE+XG4gICAgICB7c2hvd2JveCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1ib3hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBuYW1lID9cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgICAgZS53aGljaCA9PT0gMTMgPyBkb0NoYXRTaGl0KCkgOiBudWxsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzEwcHgnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG9DaGF0U2hpdH0+RW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdfQ== */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.9a167258b9bb9165a312.hot-update.js.map