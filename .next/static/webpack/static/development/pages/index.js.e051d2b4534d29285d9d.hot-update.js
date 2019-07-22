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

    function setupDataChannel() {
      checkDataChannelState();
      dataChannel.onopen = checkDataChannelState;
      dataChannel.onclose = checkDataChannelState;

      dataChannel.onmessage = function (event) {
        return insertMessageToDOM(JSON.parse(event.data), false);
      };
    }

    function checkDataChannelState() {
      console.log('WebRTC channel state is:', dataChannel.readyState);

      if (dataChannel.readyState === 'open') {
        insertMessageToDOM({
          content: 'WebRTC data channel is now open'
        });
      }
    }

    function startListentingToSignals() {
      // Listen to signaling data from Scaledrone
      room.on('data', function (message, client) {
        // Message was sent by us
        if (client.id === drone.clientId) {
          return;
        }

        if (message.sdp) {
          // This is called after receiving an offer or answer from another peer
          pc.setRemoteDescription(new RTCSessionDescription(message.sdp), function () {
            console.log('pc.remoteDescription.type', pc.remoteDescription.type); // When receiving an offer lets answer it

            if (pc.remoteDescription.type === 'offer') {
              console.log('Answering offer');
              pc.createAnswer(localDescCreated, function (error) {
                return console.error(error);
              });
            }
          }, function (error) {
            return console.error(error);
          });
        } else if (message.candidate) {
          // Add the new ICE candidate to our connections remote description
          pc.addIceCandidate(new RTCIceCandidate(message.candidate));
        }
      });
    }

    function localDescCreated(desc) {
      pc.setLocalDescription(desc, function () {
        return sendSignalingMessage({
          sdp: pc.localDescription
        });
      }, function (error) {
        return console.error(error);
      });
    }

    alert('Chat location is: ', location.href);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Welcome to Web-Chat", !showbox && ", ".concat(name)), showbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2332887812" + " " + "welcome-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
      lineNumber: 165
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: doChatShit,
    className: "jsx-2332887812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Enter")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2332887812",
    __self: this
  }, "h1.jsx-2332887812{font-family:Arial;}button.jsx-2332887812{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TGtCLEFBRzZCLEFBR04sWUFDRSxNQUhoQixRQUlpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNOLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9jb2Rlci1wcmFucy9EZXNrdG9wL2RldmVsb3AuLi4vd2ViLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dib3gsIHNldFNob3dib3hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZG9DaGF0U2hpdCA9ICgpID0+IHtcbiAgICBhbGVydChgV2VsY29tZSAke25hbWV9YCk7XG4gICAgc2V0U2hvd2JveChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgUlRDaW5pdCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBSVENpbml0KCkge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIGNvbnN0IGNoYXRIYXNoID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICAgICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgLy8gUlRDUGVlckNvbm5lY3Rpb25cbiAgICBsZXQgcGM7XG4gICAgLy8gUlRDRGF0YUNoYW5uZWxcbiAgICBsZXQgZGF0YUNoYW5uZWw7XG5cbiAgICBjb25zdCBkcm9uZSA9IG5ldyBTY2FsZWRyb25lKCdjNGw4QjJlakRRY0lCTEtpJyk7XG5cbiAgICBjb25zdCByb29tTmFtZSA9IGBvYnNlcnZhYmxlLSR7Y2hhdEhhc2h9YDtcblxuICAgIGxldCByb29tO1xuXG4gICAgLy8gV2FpdCBmb3IgU2NhbGVkcm9uZSBzaWduYWxpbmcgc2VydmVyIHRvIGNvbm5lY3RcbiAgICBkcm9uZS5vbignb3BlbicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgcm9vbSA9IGRyb25lLnN1YnNjcmliZShyb29tTmFtZSk7XG4gICAgICByb29tLm9uKCdvcGVuJywgZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBzaWduYWxpbmcgc2VydmVyJyk7XG4gICAgICB9KTtcbiAgICAgIC8vIFdlJ3JlIGNvbm5lY3RlZCB0byB0aGUgcm9vbSBhbmQgcmVjZWl2ZWQgYW4gYXJyYXkgb2YgJ21lbWJlcnMnXG4gICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHJvb20gKGluY2x1ZGluZyB1cykuIFNpZ25hbGluZyBzZXJ2ZXIgaXMgcmVhZHkuXG4gICAgICByb29tLm9uKCdtZW1iZXJzJywgZnVuY3Rpb24obWVtYmVycykge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPj0gMykge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnVGhlIHJvb20gaXMgZnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGFyZSB0aGUgc2Vjb25kIHVzZXIgdG8gY29ubmVjdCB0byB0aGUgcm9vbSB3ZSB3aWxsIGJlIGNyZWF0aW5nIHRoZSBvZmZlclxuICAgICAgICBjb25zdCBpc09mZmVyZXIgPSBtZW1iZXJzLmxlbmd0aCA9PT0gMjtcbiAgICAgICAgc3RhcnRXZWJSVEMoaXNPZmZlcmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU2VuZCBzaWduYWxpbmcgZGF0YSB2aWEgU2NhbGVkcm9uZVxuICAgIGZ1bmN0aW9uIHNlbmRTaWduYWxpbmdNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIGRyb25lLnB1Ymxpc2goe1xuICAgICAgICByb29tOiByb29tTmFtZSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0V2ViUlRDKGlzT2ZmZXJlcikge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIFdlYlJUQyBpbiBhcycsIGlzT2ZmZXJlciA/ICdvZmZlcmVyJyA6ICd3YWl0ZXInKTtcbiAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICAvLyAnb25pY2VjYW5kaWRhdGUnIG5vdGlmaWVzIHVzIHdoZW5ldmVyIGFuIElDRSBhZ2VudCBuZWVkcyB0byBkZWxpdmVyIGFcbiAgICAgIC8vIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIgdGhyb3VnaCB0aGUgc2lnbmFsaW5nIHNlcnZlclxuICAgICAgcGMub25pY2VjYW5kaWRhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICBzZW5kU2lnbmFsaW5nTWVzc2FnZSh7Y2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGV9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzT2ZmZXJlcikge1xuICAgICAgICAvLyBJZiB1c2VyIGlzIG9mZmVyZXIgbGV0IHRoZW0gY3JlYXRlIGEgbmVnb3RpYXRpb24gb2ZmZXIgYW5kIHNldCB1cCB0aGUgZGF0YSBjaGFubmVsXG4gICAgICAgIHBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgcGMuY3JlYXRlT2ZmZXIobG9jYWxEZXNjQ3JlYXRlZCwgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9O1xuICAgICAgICBkYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKCdjaGF0Jyk7XG4gICAgICAgIHNldHVwRGF0YUNoYW5uZWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgbm90IHRoZSBvZmZlcmVyIGxldCB3YWl0IGZvciBhIGRhdGEgY2hhbm5lbFxuICAgICAgICBwYy5vbmRhdGFjaGFubmVsID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGRhdGFDaGFubmVsID0gZXZlbnQuY2hhbm5lbDtcbiAgICAgICAgICBzZXR1cERhdGFDaGFubmVsKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0TGlzdGVudGluZ1RvU2lnbmFscygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwRGF0YUNoYW5uZWwoKSB7XG4gICAgICBjaGVja0RhdGFDaGFubmVsU3RhdGUoKTtcbiAgICAgIGRhdGFDaGFubmVsLm9ub3BlbiA9IGNoZWNrRGF0YUNoYW5uZWxTdGF0ZTtcbiAgICAgIGRhdGFDaGFubmVsLm9uY2xvc2UgPSBjaGVja0RhdGFDaGFubmVsU3RhdGU7XG4gICAgICBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBldmVudCA9PlxuICAgICAgICBpbnNlcnRNZXNzYWdlVG9ET00oSlNPTi5wYXJzZShldmVudC5kYXRhKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRGF0YUNoYW5uZWxTdGF0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJSVEMgY2hhbm5lbCBzdGF0ZSBpczonLCBkYXRhQ2hhbm5lbC5yZWFkeVN0YXRlKTtcbiAgICAgIGlmIChkYXRhQ2hhbm5lbC5yZWFkeVN0YXRlID09PSAnb3BlbicpIHtcbiAgICAgICAgaW5zZXJ0TWVzc2FnZVRvRE9NKHtjb250ZW50OiAnV2ViUlRDIGRhdGEgY2hhbm5lbCBpcyBub3cgb3Blbid9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRMaXN0ZW50aW5nVG9TaWduYWxzKCkge1xuICAgICAgLy8gTGlzdGVuIHRvIHNpZ25hbGluZyBkYXRhIGZyb20gU2NhbGVkcm9uZVxuICAgICAgcm9vbS5vbignZGF0YScsIChtZXNzYWdlLCBjbGllbnQpID0+IHtcbiAgICAgICAgLy8gTWVzc2FnZSB3YXMgc2VudCBieSB1c1xuICAgICAgICBpZiAoY2xpZW50LmlkID09PSBkcm9uZS5jbGllbnRJZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5zZHApIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciByZWNlaXZpbmcgYW4gb2ZmZXIgb3IgYW5zd2VyIGZyb20gYW5vdGhlciBwZWVyXG4gICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2Uuc2RwKSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ3BjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUnLFxuICAgICAgICAgICAgICAgIHBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIC8vIFdoZW4gcmVjZWl2aW5nIGFuIG9mZmVyIGxldHMgYW5zd2VyIGl0XG4gICAgICAgICAgICAgIGlmIChwYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fuc3dlcmluZyBvZmZlcicpO1xuICAgICAgICAgICAgICAgIHBjLmNyZWF0ZUFuc3dlcihsb2NhbERlc2NDcmVhdGVkLCBlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBJQ0UgY2FuZGlkYXRlIHRvIG91ciBjb25uZWN0aW9ucyByZW1vdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICBwYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShtZXNzYWdlLmNhbmRpZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9jYWxEZXNjQ3JlYXRlZChkZXNjKSB7XG4gICAgICBwYy5zZXRMb2NhbERlc2NyaXB0aW9uKFxuICAgICAgICBkZXNjLFxuICAgICAgICAoKSA9PiBzZW5kU2lnbmFsaW5nTWVzc2FnZSh7c2RwOiBwYy5sb2NhbERlc2NyaXB0aW9ufSksXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgKTtcbiAgICB9XG4gICAgYWxlcnQoJ0NoYXQgbG9jYXRpb24gaXM6ICcsIGxvY2F0aW9uLmhyZWYpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPldlbGNvbWUgdG8gV2ViLUNoYXR7IXNob3dib3ggJiYgYCwgJHtuYW1lfWB9PC9oMT5cbiAgICAgIHtzaG93Ym94ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWJveFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUgP1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICBlLndoaWNoID09PSAxMyA/IGRvQ2hhdFNoaXQoKSA6IG51bGw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogMTMwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb0NoYXRTaGl0fT5FbnRlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl19 */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.e051d2b4534d29285d9d.hot-update.js.map