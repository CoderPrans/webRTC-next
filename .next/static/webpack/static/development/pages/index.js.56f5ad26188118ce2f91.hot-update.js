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






var WelcomeBox = function WelcomeBox(_ref) {
  var name = _ref.name,
      setName = _ref.setName,
      setShowbox = _ref.setShowbox;

  var doChatShit = function doChatShit() {
    alert("Welcome ".concat(name));
    setShowbox(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Enter"));
};

var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      showbox = _useState4[0],
      setShowbox = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(location);
    Object(_RTCinit_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }, [name]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2315661191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WelcomeBox, {
    name: name,
    setName: setName,
    setShowbox: setShowbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2315661191" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2315661191" + " " + "messages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onsubmit: "return false;",
    className: "jsx-2315661191" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Your message..",
    className: "jsx-2315661191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "jsx-2315661191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Send"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("template", {
    "data-template": "message",
    className: "jsx-2315661191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2315661191" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2315661191" + " " + "message__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2315661191" + " " + "message__bubble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2315661191",
    __self: this
  }, "h1.jsx-2315661191{font-family:Arial;}.content.jsx-2315661191{box-shadow:rgba(156,172,172,0.2) 0px 2px 2px, rgba(156,172,172,0.2) 0px 4px 4px, rgba(156,172,172,0.2) 0px 8px 8px, rgba(156,172,172,0.2) 0px 16px 16px, rgba(156,172,172,0.2) 0px 32px 32px, rgba(156,172,172,0.2) 0px 64px 64px;border-radius:3px;height:100vh;max-height:600px;width:100vw;max-width:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.messages.jsx-2315661191{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:20px 30px;overflow:auto;}.message.jsx-2315661191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.message--mine.jsx-2315661191{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.message--theirs.jsx-2315661191{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.message__name.jsx-2315661191{padding:10px 0;}.message__bubble.jsx-2315661191{padding:20px;border-radius:3px;}.message--theirs.jsx-2315661191 .message__bubble.jsx-2315661191{background:#6363bf;color:white;}.message--mine.jsx-2315661191 .message__bubble.jsx-2315661191{background:rgba(156,172,172,0.2);}.footer.jsx-2315661191{line-height:76px;border-top:1px solid rgba(156,172,172,0.2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}input.jsx-2315661191{height:76px;border:none;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 30px;font-size:16px;background:transparent;}button.jsx-2315661191{border:none;background:transparent;padding:0 30px;font-size:16px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBRzZCLEFBUXNCLEFBVTVCLEFBS0MsQUFJUSxBQUdFLEFBR1IsQUFHRixBQUlNLEFBSWlCLEFBR25CLEFBTUwsQUFRQSxZQVBBLEFBUVcsQ0F6QkwsRUFIcEIsRUFjZ0QsQ0EvQ2hELENBd0NjLEtBY0EsT0FqQmQsQUFJQSxFQUdBLEVBa0JpQixlQUNBLFVBZkYsS0FnQkUsTUE5Q0csR0FLSSxNQTBDeEIsU0E5Q2dCLE1Bb0NDLE1BNUJqQixFQVBBLE1BVUEsQ0EwQmlCLGVBQ1EsU0FSVCxjQVNoQixJQWxDQSxzQ0EwQkEsb0NBMUNvQixrQkFDTCxhQUNJLGlCQUNMLFlBQ0ksZ0JBQ0gsMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6Ii9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUlRDaW5pdCBmcm9tICcuLi9SVENpbml0LmpzJztcblxuY29uc3QgV2VsY29tZUJveCA9ICh7bmFtZSwgc2V0TmFtZSwgc2V0U2hvd2JveH0pID0+IHtcbiAgY29uc3QgZG9DaGF0U2hpdCA9ICgpID0+IHtcbiAgICBhbGVydChgV2VsY29tZSAke25hbWV9YCk7XG4gICAgc2V0U2hvd2JveChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtYm94XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUgP1wiXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICBlLndoaWNoID09PSAxMyA/IGRvQ2hhdFNoaXQoKSA6IG51bGw7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAxMzAsXG4gICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvQ2hhdFNoaXR9PkVudGVyPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dib3gsIHNldFNob3dib3hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgUlRDaW5pdCgpO1xuICB9LCBbbmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFdlYi1DaGF0eyFzaG93Ym94ICYmIGAsICR7bmFtZX1gfTwvaDE+XG4gICAgICB7c2hvd2JveCAmJiAoXG4gICAgICAgIDxXZWxjb21lQm94IG5hbWU9e25hbWV9IHNldE5hbWU9e3NldE5hbWV9IHNldFNob3dib3g9e3NldFNob3dib3h9IC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIiAvPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb290ZXJcIiBvbnN1Ym1pdD1cInJldHVybiBmYWxzZTtcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZS4uXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgZGF0YS10ZW1wbGF0ZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlX19uYW1lXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2J1YmJsZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LFxuICAgICAgICAgICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsXG4gICAgICAgICAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCxcbiAgICAgICAgICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZXMge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS0tbWluZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlLS10aGVpcnMge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlX19uYW1lIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2VfX2J1YmJsZSB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UtLXRoZWlycyAubWVzc2FnZV9fYnViYmxlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjM2M2JmO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZS0tbWluZSAubWVzc2FnZV9fYnViYmxlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.56f5ad26188118ce2f91.hot-update.js.map