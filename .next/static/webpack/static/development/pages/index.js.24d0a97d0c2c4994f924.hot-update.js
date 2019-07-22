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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2314001180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Welcome to Web-Chat"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    placeholder: "your name ?",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      e.which === 13 ? alert("Welcome ".concat(name)) : null;
    },
    value: name,
    style: {
      width: 130,
      padding: '8px',
      margin: '10px'
    },
    className: "jsx-2314001180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2314001180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-2314001180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Enter"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2314001180",
    __self: this
  }, "button.jsx-2314001180{padding:8px;margin:0 10px;background-color:forestgreen;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBR3VCLFlBQ0UsY0FDZSw2QkFDakIsWUFDQSxZQUNkIiwiZmlsZSI6Ii9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+V2VsY29tZSB0byBXZWItQ2hhdDwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUgP1wiXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICBlLndoaWNoID09PSAxMyA/IGFsZXJ0KGBXZWxjb21lICR7bmFtZX1gKSA6IG51bGw7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAxMzAsXG4gICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvQ2hhdFNoaXR9PkVudGVyPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IGRvQ2hhdFNoaXQgPSAoKSA9PiB7XG4gIGFsZXJ0KGBXZWxjb21lICR7bmFtZX1gKTtcbiAgc2V0TmFtZSgnJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

var doChatShit = function doChatShit() {
  alert("Welcome ".concat(name));
  setName('');
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.24d0a97d0c2c4994f924.hot-update.js.map