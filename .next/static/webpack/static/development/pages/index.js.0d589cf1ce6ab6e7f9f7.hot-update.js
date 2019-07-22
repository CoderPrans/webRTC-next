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
/* harmony import */ var _RTCinit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RTCinit.js */ "./RTCinit.js");

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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(location);
    Object(_RTCinit_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1529784906",
    __self: this
  }, "h1.jsx-1529784906{font-family:Arial;}button.jsx-1529784906{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}.content.jsx-1529784906{box-shadow:rgba(156,172,172,0.2) 0px 2px 2px, rgba(156,172,172,0.2) 0px 4px 4px, rgba(156,172,172,0.2) 0px 8px 8px, rgba(156,172,172,0.2) 0px 16px 16px, rgba(156,172,172,0.2) 0px 32px 32px, rgba(156,172,172,0.2) 0px 64px 64px;border-radius:3px;height:100vh;max-height:600px;width:100vw;max-width:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.messages.jsx-1529784906{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:20px 30px;overflow:auto;}.message.jsx-1529784906{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.message--mine.jsx-1529784906{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.message--theirs.jsx-1529784906{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.message__name.jsx-1529784906{padding:10px 0;}.message__bubble.jsx-1529784906{padding:20px;border-radius:3px;}.message--theirs.jsx-1529784906 .message__bubble.jsx-1529784906{background:#6363bf;color:white;}.message--mine.jsx-1529784906 .message__bubble.jsx-1529784906{background:rgba(156,172,172,0.2);}.footer.jsx-1529784906{line-height:76px;border-top:1px solid rgba(156,172,172,0.2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}input.jsx-1529784906{height:76px;border:none;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 30px;font-size:16px;background:transparent;}button.jsx-1529784906{border:none;background:transparent;padding:0 30px;font-size:16px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBRzZCLEFBR04sQUFlNEIsQUFVNUIsQUFLQyxBQUlRLEFBR0UsQUFHUixBQUdGLEFBSU0sQUFJaUIsQUFHbkIsQUFNTCxBQVFBLFlBbkVFLEFBNERGLEFBUVcsQ0F6QkwsRUFIcEIsRUFjZ0QsQ0F6RGhELENBa0RjLEtBY0EsRUE1REcsS0EyQ2pCLEFBSUEsRUFHQSxFQWtCaUIsTUFuRUMsU0FvRUQsT0FuRVUsR0FvRFosS0FnQkUsTUE5Q0csR0FLSSxNQTBDeEIsRUFwRW9CLE9Bc0JKLE1Bb0NDLEtBekRILENBNkJkLEVBUEEsTUFVQSxDQTBCaUIsRUF6REgsWUFDZCxDQXlEeUIsU0FSVCxjQVNoQixJQWxDQSxzQ0EwQkEsb0NBMUNvQixrQkFDTCxhQUNJLGlCQUNMLFlBQ0ksZ0JBQ0gsMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6Ii9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUlRDaW5pdCBmcm9tICcuLi9SVENpbml0LmpzJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93Ym94LCBzZXRTaG93Ym94XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGRvQ2hhdFNoaXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoYFdlbGNvbWUgJHtuYW1lfWApO1xuICAgIHNldFNob3dib3goZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgIFJUQ2luaXQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPldlbGNvbWUgdG8gV2ViLUNoYXR7IXNob3dib3ggJiYgYCwgJHtuYW1lfWB9PC9oMT5cbiAgICAgIHtzaG93Ym94ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUgP1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICBlLndoaWNoID09PSAxMyA/IGRvQ2hhdFNoaXQoKSA6IG51bGw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogMTMwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb0NoYXRTaGl0fT5FbnRlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsXG4gICAgICAgICAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCxcbiAgICAgICAgICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZXMge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS0tbWluZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlLS10aGVpcnMge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlX19uYW1lIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2VfX2J1YmJsZSB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UtLXRoZWlycyAubWVzc2FnZV9fYnViYmxlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjM2M2JmO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS0tbWluZSAubWVzc2FnZV9fYnViYmxlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.0d589cf1ce6ab6e7f9f7.hot-update.js.map