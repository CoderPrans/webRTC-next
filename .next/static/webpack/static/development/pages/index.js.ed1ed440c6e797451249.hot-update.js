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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(location);
    RTCinit();
  });

  function RTCinit() {
    if (!location.hash) {
      location.hash = Math.floor(Math.random() * 0xffffff).toString(16);
    }

    var chatHash = location.hash.substring(1);
    var configuration = {
      iceServers: [{
        url: 'stun:stun.l.google.com:19302'
      }]
    }; // RTCPeerConnection

    var pc; // RTCDataChannel

    var dataChannel;
    var drone = new Scaledrone('c4l8B2ejDQcIBLKi');
    var roomName = "observable-".concat(chatHash);
    var room; // Wait for Scaledrone signaling server to connect

    drone.on('open', function (error) {
      if (error) {
        return console.error(error);
      }

      room = drone.subscribe(roomName);
      room.on('open', function (error) {
        if (error) {
          return console.error(error);
        }

        console.log('Connected to signaling server');
      }); // We're connected to the room and received an array of 'members'
      // connected to the room (including us). Signaling server is ready.

      room.on('members', function (members) {
        if (members.length >= 3) {
          return alert('The room is full');
        } // If we are the second user to connect to the room we will be creating the offer


        var isOfferer = members.length === 2;
        startWebRTC(isOfferer);
      });
    }); // Send signaling data via Scaledrone

    function sendSignalingMessage(message) {
      drone.publish({
        room: roomName,
        message: message
      });
    }

    function startWebRTC(isOfferer) {
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
      }

      startListentingToSignals();
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2332887812" + " " + "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
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
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2332887812",
    __self: this
  }, "h1.jsx-2332887812{font-family:Arial;}button.jsx-2332887812{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSWtCLEFBRzZCLEFBR04sWUFDRSxNQUhoQixRQUlpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNOLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9jb2Rlci1wcmFucy9EZXNrdG9wL2RldmVsb3AuLi4vd2ViLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dib3gsIHNldFNob3dib3hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZG9DaGF0U2hpdCA9ICgpID0+IHtcbiAgICBhbGVydChgV2VsY29tZSAke25hbWV9YCk7XG4gICAgc2V0U2hvd2JveChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgUlRDaW5pdCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBSVENpbml0KCkge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIGNvbnN0IGNoYXRIYXNoID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICAgICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgLy8gUlRDUGVlckNvbm5lY3Rpb25cbiAgICBsZXQgcGM7XG4gICAgLy8gUlRDRGF0YUNoYW5uZWxcbiAgICBsZXQgZGF0YUNoYW5uZWw7XG5cbiAgICBjb25zdCBkcm9uZSA9IG5ldyBTY2FsZWRyb25lKCdjNGw4QjJlakRRY0lCTEtpJyk7XG5cbiAgICBjb25zdCByb29tTmFtZSA9IGBvYnNlcnZhYmxlLSR7Y2hhdEhhc2h9YDtcblxuICAgIGxldCByb29tO1xuXG4gICAgLy8gV2FpdCBmb3IgU2NhbGVkcm9uZSBzaWduYWxpbmcgc2VydmVyIHRvIGNvbm5lY3RcbiAgICBkcm9uZS5vbignb3BlbicsIGVycm9yID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICByb29tID0gZHJvbmUuc3Vic2NyaWJlKHJvb21OYW1lKTtcbiAgICAgIHJvb20ub24oJ29wZW4nLCBlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHNpZ25hbGluZyBzZXJ2ZXInKTtcbiAgICAgIH0pO1xuICAgICAgLy8gV2UncmUgY29ubmVjdGVkIHRvIHRoZSByb29tIGFuZCByZWNlaXZlZCBhbiBhcnJheSBvZiAnbWVtYmVycydcbiAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgcm9vbSAoaW5jbHVkaW5nIHVzKS4gU2lnbmFsaW5nIHNlcnZlciBpcyByZWFkeS5cbiAgICAgIHJvb20ub24oJ21lbWJlcnMnLCBtZW1iZXJzID0+IHtcbiAgICAgICAgaWYgKG1lbWJlcnMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RoZSByb29tIGlzIGZ1bGwnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBhcmUgdGhlIHNlY29uZCB1c2VyIHRvIGNvbm5lY3QgdG8gdGhlIHJvb20gd2Ugd2lsbCBiZSBjcmVhdGluZyB0aGUgb2ZmZXJcbiAgICAgICAgY29uc3QgaXNPZmZlcmVyID0gbWVtYmVycy5sZW5ndGggPT09IDI7XG4gICAgICAgIHN0YXJ0V2ViUlRDKGlzT2ZmZXJlcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFNlbmQgc2lnbmFsaW5nIGRhdGEgdmlhIFNjYWxlZHJvbmVcbiAgICBmdW5jdGlvbiBzZW5kU2lnbmFsaW5nTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICBkcm9uZS5wdWJsaXNoKHtcbiAgICAgICAgcm9vbTogcm9vbU5hbWUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFdlYlJUQyhpc09mZmVyZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyBXZWJSVEMgaW4gYXMnLCBpc09mZmVyZXIgPyAnb2ZmZXJlcicgOiAnd2FpdGVyJyk7XG4gICAgICBwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcblxuICAgICAgLy8gJ29uaWNlY2FuZGlkYXRlJyBub3RpZmllcyB1cyB3aGVuZXZlciBhbiBJQ0UgYWdlbnQgbmVlZHMgdG8gZGVsaXZlciBhXG4gICAgICAvLyBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyIHRocm91Z2ggdGhlIHNpZ25hbGluZyBzZXJ2ZXJcbiAgICAgIHBjLm9uaWNlY2FuZGlkYXRlID0gZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgc2VuZFNpZ25hbGluZ01lc3NhZ2Uoe2NhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpc09mZmVyZXIpIHtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBvZmZlcmVyIGxldCB0aGVtIGNyZWF0ZSBhIG5lZ290aWF0aW9uIG9mZmVyIGFuZCBzZXQgdXAgdGhlIGRhdGEgY2hhbm5lbFxuICAgICAgICBwYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgIHBjLmNyZWF0ZU9mZmVyKGxvY2FsRGVzY0NyZWF0ZWQsIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YUNoYW5uZWwgPSBwYy5jcmVhdGVEYXRhQ2hhbm5lbCgnY2hhdCcpO1xuICAgICAgICBzZXR1cERhdGFDaGFubmVsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB1c2VyIGlzIG5vdCB0aGUgb2ZmZXJlciBsZXQgd2FpdCBmb3IgYSBkYXRhIGNoYW5uZWxcbiAgICAgICAgcGMub25kYXRhY2hhbm5lbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgICBkYXRhQ2hhbm5lbCA9IGV2ZW50LmNoYW5uZWw7XG4gICAgICAgICAgc2V0dXBEYXRhQ2hhbm5lbCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdGFydExpc3RlbnRpbmdUb1NpZ25hbHMoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+V2VsY29tZSB0byBXZWItQ2hhdHshc2hvd2JveCAmJiBgLCAke25hbWV9YH08L2gxPlxuICAgICAge3Nob3dib3ggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtYm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZSA/XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XG4gICAgICAgICAgICAgIGUud2hpY2ggPT09IDEzID8gZG9DaGF0U2hpdCgpIDogbnVsbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMzAsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvQ2hhdFNoaXR9PkVudGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.ed1ed440c6e797451249.hot-update.js.map