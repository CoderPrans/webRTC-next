const configuration = {
  iceServers: [
    {
      url: 'stun:stun.l.google.com:19302',
    },
  ],
};

// RTCPeerConnection
let pc;
// RTCDataChannel
let dataChannel;

let Location;

let chatHash;

let drone;

const roomName = `observable-${chatHash}`;

let room;

export async function RTCinit() {
  if (!location.hash) {
    location.hash = Math.floor(Math.random() * 0xffffff).toString(16);
  }

  Location = await location;
  chatHash = await Location.hash.substring(1);

  drone = await new Scaledrone('c4l8B2ejDQcIBLKi');
  // Wait for Scaledrone signaling server to connect
  drone.on('open', function(error) {
    if (error) {
      return console.error(error);
    }
    room = drone.subscribe(roomName);
    room.on('open', error => {
      if (error) {
        return console.error(error);
      }
      console.log('Connected to signaling server');
    });
    // We're connected to the room and received an array of 'members'
    // connected to the room (including us). Signaling server is ready.
    room.on('members', function(members) {
      if (members.length >= 3) {
        return alert('The room is full');
      }
      // If we are the second user to connect to the room we will be creating the offer
      const isOfferer = members.length === 2;
      dataChannel = startWebRTC(isOfferer);
      console.log('from callback', dataChannel);
    });
  });
  // Send signaling data via Scaledrone

  alert('Chat location is: ' + location.href);
}

export function startWebRTC(isOfferer) {
  console.log('Starting WebRTC in as', isOfferer ? 'offerer' : 'waiter');
  pc = new RTCPeerConnection(configuration);

  // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
  // message to the other peer through the signaling server
  pc.onicecandidate = event => {
    if (event.candidate) {
      sendSignalingMessage({candidate: event.candidate});
    }
  };

  startListentingToSignals();

  if (isOfferer) {
    // If user is offerer let them create a negotiation offer and set up the data channel
    pc.onnegotiationneeded = () => {
      pc.createOffer(localDescCreated, error => console.error(error));
    };
    dataChannel = pc.createDataChannel('chat');
    setupDataChannel();
    return dataChannel;
  } else {
    // If user is not the offerer let wait for a data channel
    pc.ondatachannel = event => {
      dataChannel = event.channel;
      setupDataChannel();
      return dataChannel;
    };
  }
}

export function startListentingToSignals() {
  // Listen to signaling data from Scaledrone
  room.on('data', (message, client) => {
    // Message was sent by us
    if (client.id === drone.clientId) {
      return;
    }
    if (message.sdp) {
      // This is called after receiving an offer or answer from another peer
      pc.setRemoteDescription(
        new RTCSessionDescription(message.sdp),
        () => {
          console.log('pc.remoteDescription.type', pc.remoteDescription.type);
          // When receiving an offer lets answer it
          if (pc.remoteDescription.type === 'offer') {
            console.log('Answering offer');
            pc.createAnswer(localDescCreated, error => console.error(error));
          }
        },
        error => console.error(error),
      );
    } else if (message.candidate) {
      // Add the new ICE candidate to our connections remote description
      pc.addIceCandidate(new RTCIceCandidate(message.candidate));
    }
  });
}

export function setupDataChannel() {
  checkDataChannelState();
  dataChannel.onopen = checkDataChannelState;
  dataChannel.onclose = checkDataChannelState;
  // dataChannel.onmessage = event =>
  // insertMessageToDOM(JSON.parse(event.data), false);
}

export function localDescCreated(desc) {
  pc.setLocalDescription(
    desc,
    () => sendSignalingMessage({sdp: pc.localDescription}),
    error => console.error(error),
  );
}

export function checkDataChannelState() {
  console.log('WebRTC channel state is:', dataChannel.readyState);
  // if (dataChannel.readyState === 'open') {
  //   insertMessageToDOM({content: 'WebRTC data channel is now open'});
  // }
}

export function sendSignalingMessage(message) {
  drone.publish({
    room: roomName,
    message,
  });
}

export default {
  RTCinit,
  startWebRTC,
  startListentingToSignals,
  localDescCreated,
  setupDataChannel,
  checkDataChannelState,
  sendSignalingMessage,
};
