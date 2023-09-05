we will connnect two browser with each other using WebRTC, A, B
A will create an offer (sdp ) and set it as local description
B will get  the offer and set it as remote description
B creates an answer sets it as its local description and signal sdp to A
A sets the answer as its remote description
A and B are connected now


A
----------------
const lc = new RTCPeerConnection();
const dc = lc.createDataChannel('chat');
dc.onmessage = (e) => console.log(e.data);
dc.onopen = () => dc.send('connection opened!');
lc.onicecandidate = e =>  console.log("New ICE candidate: ", JSON.stringify(lc.localDescription));
lc.createOffer().then(offer => lc.setLocalDescription(offer)).then(() => console.log("Local description set!"));

offer = {} // suppose to appear on console.log of browser
// coppy it and set it to B somehow

B
----------------
const offer = {} // paste the offer here
const rc = new RTCPeerConnection();
rc.onicecandidate = e =>  console.log("New ICE candidate: ", JSON.stringify(rc.localDescription));
rc.ondatachannel = e => {
    rc.dc = e.channel;
    rc.dc.onmessage = (e) => console.log(e.data);
    rc.dc.onopen = () => rc.dc.send('connection opened!');
};

rc.setRemoteDescription(offer).then(() => console.log("Remote description set!"));

rc.createAnswer().then(answer => rc.setLocalDescription(answer)).then(() => console.log("Local description set!"));
// Answer will appear on console.log of browser

answer = {} // suppose to appear on console.log of browser

// coppy it and set it to A somehow


A
--------------

lc.setRemoteDescription(answer).then(() => console.log("Remote description set!"));

// A and B are connected now

// A can send data to B
dc.send("hello B");
rc.dc.send("hello A");


you can add audio/video stream to the connection with addTrack method


WebRTC Pros
- Peer to peer. Low latency for high bandwidth applications
- Standardized API

WebRTC Cons
- Maintaining STUN/TURN servers
- Peer 2 peer falls apart in case of multiple participants (discord case)