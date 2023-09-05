WebRTC (Real Time Communication)

- WebRTC is a free, open-source project that provides web browsers and mobile applications with real-time communication (RTC) via simple application programming interfaces (APIs). It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication, eliminating the need to install plugins or download native apps. Supported by Apple, Google, Microsoft, Mozilla, and Opera, WebRTC is being standardized through the World Wide Web Consortium (W3C) and the Internet Engineering Task Force (IETF).


Why WebRTC is invented?
- Low latency peer-to-peer communication
- high quality audio/video
- real-time communication (no buffering)


WebRTC OVERVIEW

- A wants to connect to B ( A does not know B)
- A finds out all possible ways the public can connect to it
- B finds out all possible ways the public can connect to it
- A and B signal this session information via other means
    - WhatsApp, QR(Quick Response) code, Tweet, Websocket, HTTP Fetch, etc
- A connects to B via the best possible way
- A and B exchange their supported media and security capabilities


WebRTC Demystified
- NAT (network address translation)
- STUN, TURN (Traversal Using Relays around NAT)
- ICE (Interactive Connectivity Establishment)
- SDP (Session Description Protocol)
- Signaling the SDP


# NAT (network address translation)

If you have a public address no problem.
If you have a private address your router has a public address and it will translate your private address to a public address. 


MY IP       Router IP  Router Public IP   Public IP server
10.0.0.2 -> 10.0.0.1 | 5.5.5.5    ->      4.4.4.4:80

Get request is translated to belove by router and sent to server. Because no one at the outside world knows your private IP.

internal IP | internal port | external IP | external port | Destination IP | Destination Port
10.0.0.2    | 1234          | 5.5.5.5     | 3333          | 4.4.4.4        | 80 

the server sends respond back to 5.5.5.5:3333 and router translates it to 10.0.0.2:1234 and sends it to your computer.

NAT Translations Methods
- One to One NAT (Full Cone NAT)
  - Packets to external IP: Port are forwarded to internal IP: Port
  - The router does not care who sends the packet, it will forward it to the internal IP: Port
- Address restricted NAat 
  - Packets to external IP: Port on the router always internal IP: Port as long as source address from packet matches the table 
  - Allow if communicated with this host before
- Port restricted cone NAT 
  - Packets to external IP: Port on the router always maps to internal IP: port as long as source address and port from packet matches the table
  - Allow if we communicated with this host:port before
- Symmetric NAT ?
  - Packets to external IP: Port on the router always maps to internal IP: Port as long as source address and port from packet matches the table
  - Only allow if the full pair match


# STUN
- Session Traversal Utilities for NAT
- Tell me my public ip and port through NAT
- Works for full cone NAT, Address/Port restricted NAT
- Does not work for symmetric NAT
- STUN server port is 3478, 5349 for (TLS)
- Cheap to maintain
  
Purpose of STUN: We need to find out our public presence 

What STUN Server does? Router changes source address while sending packet and changes the destination address while receiving packet. STUN server writes the source address when it recives the packet and sends it back to the source address. So the source address will know its public address.

# TURN
- Traversal Using Relays around NAT
- In case of Symmetric Nat we use TURN
- TURN server port is 3478, 5349 for (TLS)
- It is just a server that relays the packets
- Expensive to maintain
Basicly a proxy server

# ICE
- Interactive Connectivity Establishment
- ICE is a framework to find the best way to connect two peers

# SDP
- Session Description Protocol
- A format that describes ice candidates, networking options, media options, security options etc.
- Not really a protocol, just a format
- Most important part of WebRTC
- The goal is to exchange SDP between peers

# Signaling 
- QR code, whatsapp, websocket, http fetch, etc


# WebRTC Demythified II
- A wants to connect to B ( A does not know B)
- A collects all possible ways the public can connect to it. ICE candidates, security, media options
- A creates an offer (SDP)
- A sends the offer to B via signaling
- B creates an answer (SDP)
- B sends the answer to A via signaling
- Connection is established

You can create own STUN/TURN server or use google's STUN/TURN server.
stun:stun.l.google.com:19302