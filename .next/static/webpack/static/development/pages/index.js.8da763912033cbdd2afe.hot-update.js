webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");



var _jsxFileName = "/home/coder-prans/Desktop/develop.../web-chat/pages/index.js";





var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      showbox = _useState4[0],
      setShowbox = _useState4[1];

  var doChatShit = function doChatShit() {
    alert("Welcome ".concat(name));
    setShowbox(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(location);
    RTCinit();
  });

  function RTCinit() {
    return _RTCinit.apply(this, arguments);
  }

  function _RTCinit() {
    _RTCinit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var chatHash, configuration, pc, dataChannel, drone, roomName, room, sendSignalingMessage, startWebRTC;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              startWebRTC = function _ref4(isOfferer) {
                console.log('Starting WebRTC in as', isOfferer ? 'offerer' : 'waiter');
                pc = new RTCPeerConnection(configuration); // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
                // message to the other peer through the signaling server

                pc.onicecandidate = function (event) {
                  if (event.candidate) {
                    sendSignalingMessage({
                      candidate: event.candidate
                    });
                  }
                };

                if (isOfferer) {
                  // If user is offerer let them create a negotiation offer and set up the data channel
                  pc.onnegotiationneeded = function () {
                    pc.createOffer(localDescCreated, function (error) {
                      return console.error(error);
                    });
                  };

                  dataChannel = pc.createDataChannel('chat');
                  setupDataChannel();
                } else {
                  // If user is not the offerer let wait for a data channel
                  pc.ondatachannel = function (event) {
                    dataChannel = event.channel;
                    setupDataChannel();
                  };
                } // startListentingToSignals();

              };

              sendSignalingMessage = function _ref3(message) {
                drone.publish({
                  room: roomName,
                  message: message
                });
              };

              if (!location.hash) {
                location.hash = Math.floor(Math.random() * 0xffffff).toString(16);
              }

              chatHash = location.hash.substring(1);
              configuration = {
                iceServers: [{
                  url: 'stun:stun.l.google.com:19302'
                }]
              }; // RTCPeerConnection

              drone = new Scaledrone('c4l8B2ejDQcIBLKi');
              roomName = "observable-".concat(chatHash);
              // Wait for Scaledrone signaling server to connect
              drone.on('open',
              /*#__PURE__*/
              function () {
                var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(error) {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!error) {
                            _context2.next = 2;
                            break;
                          }

                          return _context2.abrupt("return", console.error(error));

                        case 2:
                          room = drone.subscribe(roomName);
                          room.on('open', function (error) {
                            if (error) {
                              return console.error(error);
                            }

                            console.log('Connected to signaling server');
                          }); // We're connected to the room and received an array of 'members'
                          // connected to the room (including us). Signaling server is ready.

                          room.on('members',
                          /*#__PURE__*/
                          function () {
                            var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                            /*#__PURE__*/
                            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(members) {
                              var isOfferer;
                              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      if (!(members.length >= 3)) {
                                        _context.next = 2;
                                        break;
                                      }

                                      return _context.abrupt("return", alert('The room is full'));

                                    case 2:
                                      // If we are the second user to connect to the room we will be creating the offer
                                      isOfferer = members.length === 2;
                                      _context.next = 5;
                                      return startWebRTC(isOfferer);

                                    case 5:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x2) {
                              return _ref2.apply(this, arguments);
                            };
                          }());

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()); // Send signaling data via Scaledrone

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _RTCinit.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2332887812" + " " + "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
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
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2332887812",
    __self: this
  }, "h1.jsx-2332887812{font-family:Arial;}button.jsx-2332887812{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSWtCLEFBRzZCLEFBR04sWUFDRSxNQUhoQixRQUlpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNOLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9jb2Rlci1wcmFucy9EZXNrdG9wL2RldmVsb3AuLi4vd2ViLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dib3gsIHNldFNob3dib3hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZG9DaGF0U2hpdCA9ICgpID0+IHtcbiAgICBhbGVydChgV2VsY29tZSAke25hbWV9YCk7XG4gICAgc2V0U2hvd2JveChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgUlRDaW5pdCgpO1xuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBSVENpbml0KCkge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIGNvbnN0IGNoYXRIYXNoID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICAgICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgLy8gUlRDUGVlckNvbm5lY3Rpb25cbiAgICBsZXQgcGM7XG4gICAgLy8gUlRDRGF0YUNoYW5uZWxcbiAgICBsZXQgZGF0YUNoYW5uZWw7XG5cbiAgICBjb25zdCBkcm9uZSA9IG5ldyBTY2FsZWRyb25lKCdjNGw4QjJlakRRY0lCTEtpJyk7XG5cbiAgICBjb25zdCByb29tTmFtZSA9IGBvYnNlcnZhYmxlLSR7Y2hhdEhhc2h9YDtcblxuICAgIGxldCByb29tO1xuXG4gICAgLy8gV2FpdCBmb3IgU2NhbGVkcm9uZSBzaWduYWxpbmcgc2VydmVyIHRvIGNvbm5lY3RcbiAgICBkcm9uZS5vbignb3BlbicsIGFzeW5jIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgcm9vbSA9IGRyb25lLnN1YnNjcmliZShyb29tTmFtZSk7XG4gICAgICByb29tLm9uKCdvcGVuJywgZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBzaWduYWxpbmcgc2VydmVyJyk7XG4gICAgICB9KTtcbiAgICAgIC8vIFdlJ3JlIGNvbm5lY3RlZCB0byB0aGUgcm9vbSBhbmQgcmVjZWl2ZWQgYW4gYXJyYXkgb2YgJ21lbWJlcnMnXG4gICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHJvb20gKGluY2x1ZGluZyB1cykuIFNpZ25hbGluZyBzZXJ2ZXIgaXMgcmVhZHkuXG4gICAgICByb29tLm9uKCdtZW1iZXJzJywgYXN5bmMgZnVuY3Rpb24obWVtYmVycykge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPj0gMykge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnVGhlIHJvb20gaXMgZnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGFyZSB0aGUgc2Vjb25kIHVzZXIgdG8gY29ubmVjdCB0byB0aGUgcm9vbSB3ZSB3aWxsIGJlIGNyZWF0aW5nIHRoZSBvZmZlclxuICAgICAgICBjb25zdCBpc09mZmVyZXIgPSBtZW1iZXJzLmxlbmd0aCA9PT0gMjtcbiAgICAgICAgYXdhaXQgc3RhcnRXZWJSVEMoaXNPZmZlcmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU2VuZCBzaWduYWxpbmcgZGF0YSB2aWEgU2NhbGVkcm9uZVxuICAgIGZ1bmN0aW9uIHNlbmRTaWduYWxpbmdNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIGRyb25lLnB1Ymxpc2goe1xuICAgICAgICByb29tOiByb29tTmFtZSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0V2ViUlRDKGlzT2ZmZXJlcikge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIFdlYlJUQyBpbiBhcycsIGlzT2ZmZXJlciA/ICdvZmZlcmVyJyA6ICd3YWl0ZXInKTtcbiAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICAvLyAnb25pY2VjYW5kaWRhdGUnIG5vdGlmaWVzIHVzIHdoZW5ldmVyIGFuIElDRSBhZ2VudCBuZWVkcyB0byBkZWxpdmVyIGFcbiAgICAgIC8vIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIgdGhyb3VnaCB0aGUgc2lnbmFsaW5nIHNlcnZlclxuICAgICAgcGMub25pY2VjYW5kaWRhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICBzZW5kU2lnbmFsaW5nTWVzc2FnZSh7Y2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGV9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzT2ZmZXJlcikge1xuICAgICAgICAvLyBJZiB1c2VyIGlzIG9mZmVyZXIgbGV0IHRoZW0gY3JlYXRlIGEgbmVnb3RpYXRpb24gb2ZmZXIgYW5kIHNldCB1cCB0aGUgZGF0YSBjaGFubmVsXG4gICAgICAgIHBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgcGMuY3JlYXRlT2ZmZXIobG9jYWxEZXNjQ3JlYXRlZCwgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9O1xuICAgICAgICBkYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKCdjaGF0Jyk7XG4gICAgICAgIHNldHVwRGF0YUNoYW5uZWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgbm90IHRoZSBvZmZlcmVyIGxldCB3YWl0IGZvciBhIGRhdGEgY2hhbm5lbFxuICAgICAgICBwYy5vbmRhdGFjaGFubmVsID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGRhdGFDaGFubmVsID0gZXZlbnQuY2hhbm5lbDtcbiAgICAgICAgICBzZXR1cERhdGFDaGFubmVsKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIHN0YXJ0TGlzdGVudGluZ1RvU2lnbmFscygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFdlYi1DaGF0eyFzaG93Ym94ICYmIGAsICR7bmFtZX1gfTwvaDE+XG4gICAgICB7c2hvd2JveCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1ib3hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBuYW1lID9cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgICAgZS53aGljaCA9PT0gMTMgPyBkb0NoYXRTaGl0KCkgOiBudWxsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzEwcHgnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG9DaGF0U2hpdH0+RW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdfQ== */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.8da763912033cbdd2afe.hot-update.js.map