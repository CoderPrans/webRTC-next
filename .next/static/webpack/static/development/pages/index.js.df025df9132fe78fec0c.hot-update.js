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
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "messages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onsubmit: "return false;",
    className: "jsx-1529784906" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Your message..",
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Send"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("template", {
    "data-template": "message",
    className: "jsx-1529784906",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "message__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1529784906" + " " + "message__bubble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1529784906",
    __self: this
  }, "h1.jsx-1529784906{font-family:Arial;}button.jsx-1529784906{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}.content.jsx-1529784906{box-shadow:rgba(156,172,172,0.2) 0px 2px 2px, rgba(156,172,172,0.2) 0px 4px 4px, rgba(156,172,172,0.2) 0px 8px 8px, rgba(156,172,172,0.2) 0px 16px 16px, rgba(156,172,172,0.2) 0px 32px 32px, rgba(156,172,172,0.2) 0px 64px 64px;border-radius:3px;height:100vh;max-height:600px;width:100vw;max-width:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.messages.jsx-1529784906{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:20px 30px;overflow:auto;}.message.jsx-1529784906{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.message--mine.jsx-1529784906{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.message--theirs.jsx-1529784906{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.message__name.jsx-1529784906{padding:10px 0;}.message__bubble.jsx-1529784906{padding:20px;border-radius:3px;}.message--theirs.jsx-1529784906 .message__bubble.jsx-1529784906{background:#6363bf;color:white;}.message--mine.jsx-1529784906 .message__bubble.jsx-1529784906{background:rgba(156,172,172,0.2);}.footer.jsx-1529784906{line-height:76px;border-top:1px solid rgba(156,172,172,0.2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}input.jsx-1529784906{height:76px;border:none;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 30px;font-size:16px;background:transparent;}button.jsx-1529784906{border:none;background:transparent;padding:0 30px;font-size:16px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBRzZCLEFBR04sQUFlNEIsQUFVNUIsQUFLQyxBQUlRLEFBR0UsQUFHUixBQUdGLEFBSU0sQUFJaUIsQUFHbkIsQUFNTCxBQVFBLFlBbkVFLEFBNERGLEFBUVcsQ0F6QkwsRUFIcEIsRUFjZ0QsQ0F6RGhELENBa0RjLEtBY0EsRUE1REcsS0EyQ2pCLEFBSUEsRUFHQSxFQWtCaUIsTUFuRUMsU0FvRUQsT0FuRVUsR0FvRFosS0FnQkUsTUE5Q0csR0FLSSxNQTBDeEIsRUFwRW9CLE9Bc0JKLE1Bb0NDLEtBekRILENBNkJkLEVBUEEsTUFVQSxDQTBCaUIsRUF6REgsWUFDZCxDQXlEeUIsU0FSVCxjQVNoQixJQWxDQSxzQ0EwQkEsb0NBMUNvQixrQkFDTCxhQUNJLGlCQUNMLFlBQ0ksZ0JBQ0gsMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6Ii9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUlRDaW5pdCBmcm9tICcuLi9SVENpbml0LmpzJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93Ym94LCBzZXRTaG93Ym94XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGRvQ2hhdFNoaXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoYFdlbGNvbWUgJHtuYW1lfWApO1xuICAgIHNldFNob3dib3goZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgIFJUQ2luaXQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPldlbGNvbWUgdG8gV2ViLUNoYXR7IXNob3dib3ggJiYgYCwgJHtuYW1lfWB9PC9oMT5cbiAgICAgIHtzaG93Ym94ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUgP1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICBlLndoaWNoID09PSAxMyA/IGRvQ2hhdFNoaXQoKSA6IG51bGw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogMTMwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb0NoYXRTaGl0fT5FbnRlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc1wiIC8+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvb3RlclwiIG9uc3VibWl0PVwicmV0dXJuIGZhbHNlO1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlLi5cIiAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSBkYXRhLXRlbXBsYXRlPVwibWVzc2FnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX25hbWVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZV9fYnViYmxlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCxcbiAgICAgICAgICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCxcbiAgICAgICAgICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCxcbiAgICAgICAgICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXG4gICAgICAgICAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UtLW1pbmUge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS0tdGhlaXJzIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZV9fbmFtZSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlX19idWJibGUge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlLS10aGVpcnMgLm1lc3NhZ2VfX2J1YmJsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzYzNjNiZjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UtLW1pbmUgLm1lc3NhZ2VfX2J1YmJsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl19 */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.df025df9132fe78fec0c.hot-update.js.map