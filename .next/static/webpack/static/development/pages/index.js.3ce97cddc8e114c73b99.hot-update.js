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
      dataChannel.onclose = checkDataChannelState; // dataChannel.onmessage = event =>
      // insertMessageToDOM(JSON.parse(event.data), false);
    }

    function checkDataChannelState() {
      console.log('WebRTC channel state is:', dataChannel.readyState); // if (dataChannel.readyState === 'open') {
      //   insertMessageToDOM({content: 'WebRTC data channel is now open'});
      // }
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

    alert('Chat location is: ' + location.href);
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
  }, "h1.jsx-2332887812{font-family:Arial;}button.jsx-2332887812{padding:8px;margin:0 10px;font-size:15px;font-style:bold;background-color:#4285f4;border-radius:3px;color:white;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVyLXByYW5zL0Rlc2t0b3AvZGV2ZWxvcC4uLi93ZWItY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TGtCLEFBRzZCLEFBR04sWUFDRSxNQUhoQixRQUlpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNOLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9jb2Rlci1wcmFucy9EZXNrdG9wL2RldmVsb3AuLi4vd2ViLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dib3gsIHNldFNob3dib3hdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZG9DaGF0U2hpdCA9ICgpID0+IHtcbiAgICBhbGVydChgV2VsY29tZSAke25hbWV9YCk7XG4gICAgc2V0U2hvd2JveChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgUlRDaW5pdCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBSVENpbml0KCkge1xuICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIGNvbnN0IGNoYXRIYXNoID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICAgICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgLy8gUlRDUGVlckNvbm5lY3Rpb25cbiAgICBsZXQgcGM7XG4gICAgLy8gUlRDRGF0YUNoYW5uZWxcbiAgICBsZXQgZGF0YUNoYW5uZWw7XG5cbiAgICBjb25zdCBkcm9uZSA9IG5ldyBTY2FsZWRyb25lKCdjNGw4QjJlakRRY0lCTEtpJyk7XG5cbiAgICBjb25zdCByb29tTmFtZSA9IGBvYnNlcnZhYmxlLSR7Y2hhdEhhc2h9YDtcblxuICAgIGxldCByb29tO1xuXG4gICAgLy8gV2FpdCBmb3IgU2NhbGVkcm9uZSBzaWduYWxpbmcgc2VydmVyIHRvIGNvbm5lY3RcbiAgICBkcm9uZS5vbignb3BlbicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgcm9vbSA9IGRyb25lLnN1YnNjcmliZShyb29tTmFtZSk7XG4gICAgICByb29tLm9uKCdvcGVuJywgZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBzaWduYWxpbmcgc2VydmVyJyk7XG4gICAgICB9KTtcbiAgICAgIC8vIFdlJ3JlIGNvbm5lY3RlZCB0byB0aGUgcm9vbSBhbmQgcmVjZWl2ZWQgYW4gYXJyYXkgb2YgJ21lbWJlcnMnXG4gICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHJvb20gKGluY2x1ZGluZyB1cykuIFNpZ25hbGluZyBzZXJ2ZXIgaXMgcmVhZHkuXG4gICAgICByb29tLm9uKCdtZW1iZXJzJywgZnVuY3Rpb24obWVtYmVycykge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPj0gMykge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnVGhlIHJvb20gaXMgZnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGFyZSB0aGUgc2Vjb25kIHVzZXIgdG8gY29ubmVjdCB0byB0aGUgcm9vbSB3ZSB3aWxsIGJlIGNyZWF0aW5nIHRoZSBvZmZlclxuICAgICAgICBjb25zdCBpc09mZmVyZXIgPSBtZW1iZXJzLmxlbmd0aCA9PT0gMjtcbiAgICAgICAgc3RhcnRXZWJSVEMoaXNPZmZlcmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU2VuZCBzaWduYWxpbmcgZGF0YSB2aWEgU2NhbGVkcm9uZVxuICAgIGZ1bmN0aW9uIHNlbmRTaWduYWxpbmdNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIGRyb25lLnB1Ymxpc2goe1xuICAgICAgICByb29tOiByb29tTmFtZSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0V2ViUlRDKGlzT2ZmZXJlcikge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIFdlYlJUQyBpbiBhcycsIGlzT2ZmZXJlciA/ICdvZmZlcmVyJyA6ICd3YWl0ZXInKTtcbiAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICAvLyAnb25pY2VjYW5kaWRhdGUnIG5vdGlmaWVzIHVzIHdoZW5ldmVyIGFuIElDRSBhZ2VudCBuZWVkcyB0byBkZWxpdmVyIGFcbiAgICAgIC8vIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIgdGhyb3VnaCB0aGUgc2lnbmFsaW5nIHNlcnZlclxuICAgICAgcGMub25pY2VjYW5kaWRhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICBzZW5kU2lnbmFsaW5nTWVzc2FnZSh7Y2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGV9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzT2ZmZXJlcikge1xuICAgICAgICAvLyBJZiB1c2VyIGlzIG9mZmVyZXIgbGV0IHRoZW0gY3JlYXRlIGEgbmVnb3RpYXRpb24gb2ZmZXIgYW5kIHNldCB1cCB0aGUgZGF0YSBjaGFubmVsXG4gICAgICAgIHBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgcGMuY3JlYXRlT2ZmZXIobG9jYWxEZXNjQ3JlYXRlZCwgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9O1xuICAgICAgICBkYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKCdjaGF0Jyk7XG4gICAgICAgIHNldHVwRGF0YUNoYW5uZWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgbm90IHRoZSBvZmZlcmVyIGxldCB3YWl0IGZvciBhIGRhdGEgY2hhbm5lbFxuICAgICAgICBwYy5vbmRhdGFjaGFubmVsID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGRhdGFDaGFubmVsID0gZXZlbnQuY2hhbm5lbDtcbiAgICAgICAgICBzZXR1cERhdGFDaGFubmVsKCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0TGlzdGVudGluZ1RvU2lnbmFscygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwRGF0YUNoYW5uZWwoKSB7XG4gICAgICBjaGVja0RhdGFDaGFubmVsU3RhdGUoKTtcbiAgICAgIGRhdGFDaGFubmVsLm9ub3BlbiA9IGNoZWNrRGF0YUNoYW5uZWxTdGF0ZTtcbiAgICAgIGRhdGFDaGFubmVsLm9uY2xvc2UgPSBjaGVja0RhdGFDaGFubmVsU3RhdGU7XG4gICAgICAvLyBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBldmVudCA9PlxuICAgICAgLy8gaW5zZXJ0TWVzc2FnZVRvRE9NKEpTT04ucGFyc2UoZXZlbnQuZGF0YSksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0RhdGFDaGFubmVsU3RhdGUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnV2ViUlRDIGNoYW5uZWwgc3RhdGUgaXM6JywgZGF0YUNoYW5uZWwucmVhZHlTdGF0ZSk7XG4gICAgICAvLyBpZiAoZGF0YUNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAvLyAgIGluc2VydE1lc3NhZ2VUb0RPTSh7Y29udGVudDogJ1dlYlJUQyBkYXRhIGNoYW5uZWwgaXMgbm93IG9wZW4nfSk7XG4gICAgICAvLyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0YXJ0TGlzdGVudGluZ1RvU2lnbmFscygpIHtcbiAgICAgIC8vIExpc3RlbiB0byBzaWduYWxpbmcgZGF0YSBmcm9tIFNjYWxlZHJvbmVcbiAgICAgIHJvb20ub24oJ2RhdGEnLCAobWVzc2FnZSwgY2xpZW50KSA9PiB7XG4gICAgICAgIC8vIE1lc3NhZ2Ugd2FzIHNlbnQgYnkgdXNcbiAgICAgICAgaWYgKGNsaWVudC5pZCA9PT0gZHJvbmUuY2xpZW50SWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2Uuc2RwKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgcmVjZWl2aW5nIGFuIG9mZmVyIG9yIGFuc3dlciBmcm9tIGFub3RoZXIgcGVlclxuICAgICAgICAgIHBjLnNldFJlbW90ZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihtZXNzYWdlLnNkcCksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICdwYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlJyxcbiAgICAgICAgICAgICAgICBwYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAvLyBXaGVuIHJlY2VpdmluZyBhbiBvZmZlciBsZXRzIGFuc3dlciBpdFxuICAgICAgICAgICAgICBpZiAocGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbnN3ZXJpbmcgb2ZmZXInKTtcbiAgICAgICAgICAgICAgICBwYy5jcmVhdGVBbnN3ZXIobG9jYWxEZXNjQ3JlYXRlZCwgZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgLy8gQWRkIHRoZSBuZXcgSUNFIGNhbmRpZGF0ZSB0byBvdXIgY29ubmVjdGlvbnMgcmVtb3RlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcGMuYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUobWVzc2FnZS5jYW5kaWRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvY2FsRGVzY0NyZWF0ZWQoZGVzYykge1xuICAgICAgcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihcbiAgICAgICAgZGVzYyxcbiAgICAgICAgKCkgPT4gc2VuZFNpZ25hbGluZ01lc3NhZ2Uoe3NkcDogcGMubG9jYWxEZXNjcmlwdGlvbn0pLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICk7XG4gICAgfVxuICAgIGFsZXJ0KCdDaGF0IGxvY2F0aW9uIGlzOiAnICsgbG9jYXRpb24uaHJlZik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+V2VsY29tZSB0byBXZWItQ2hhdHshc2hvd2JveCAmJiBgLCAke25hbWV9YH08L2gxPlxuICAgICAge3Nob3dib3ggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtYm94XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZSA/XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XG4gICAgICAgICAgICAgIGUud2hpY2ggPT09IDEzID8gZG9DaGF0U2hpdCgpIDogbnVsbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMzAsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RvQ2hhdFNoaXR9PkVudGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/home/coder-prans/Desktop/develop.../web-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.3ce97cddc8e114c73b99.hot-update.js.map