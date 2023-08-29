# Open Systems Interconnection Model

Why do we need a communication model?

- Agnostic to the underlying technology
- Standardization
- Network Equipment Interoperability
- Decoupled from Innovation
    - New technologies can be introduced without changing the model

# What is OSI Model?

Layer 7: Application Layer - HTTP, FTP, SMTP, etc
Layer 6: Presentation Layer - Encryption, Compression, etc
Layer 5: Session Layer - Establishes, manages, and terminates connections between applications (States, TLS, etc)
Layer 4: Transport Layer - TCP, UDP, etc (visibility of ports)
Layer 3: Network Layer - IP, ICMP, etc (what are ports, we only know IP addresses)
Layer 2: Data Link Layer - Ethernet, PPP, etc (what are IP addresses, we only know MAC addresses)
Layer 1: Physical Layer - Cables, Hubs, etc, Electrical, Optical, radio waves, etc

### Example Post Sender
Layer 7 - Application 
- HTTP
Layer 6 - Presentation
- Serialize json to flat btye array
Layer 5 - Session
- Request to establish a connection TCP, then TLS, adds source and destination ports
Layer 4 - Transport
- Sends SYN request target port 443
Layer 3 - Network
- STN is placed in IP paket(s) and adds the source and destination IP addresses
Layer 2 - Data Link
- Each packet goes into a single frame and adds the source and destination MAC addresses
Layer 1 - Physical
- Each frame becomes a string of bites which converted into signals
### Example Post Reciever
Layer 1 - Physical
- Signals are converted into bites
Layer 2 - Data Link
- The bits from Layer 1  is assembled into frames
Layer 3 - Network
- The frames are assembled into IP packets
Layer 4 - Transport
- The IP packets from layer 3 are assembled into TCP segments.
- Deals with congestion control/flow control/retransmission is case of TCP
- If Segment is SYN we don't need to go further into more layers as we are still processing connection request
Layer 5 - Session
- The connection session is established or identified
- We only arrive at this layer when necessare (three way handshake is done)
Layer 6 - Presentation
- Deserialize flat byte array into json
Layer 7 - Application
- Application understand response and acts accordingly


 
 Client          Switch       Router          Server
Application   |                         |   Application
Presentation  |                         |   Presentation
Session       |                         |   Session
Transport     |                         |   Transport
Network       |            | Network    |   Network
Data Link     | Data Link  | Data Link  |   Data Link
Physical      | Physical   | Physical   |   Physical


                             Layer 7 
 Client          Layer 4     Balancer/Cdn    Server
Application   |   Proxy      Application  |   Application
Presentation  |  Firewall    Presentation |   Presentation
Session       |              Session      |   Session
Transport     | Transport  | Transport    |   Transport
Network       | Network    | Network      |   Network
Data Link     | Data Link  | Data Link    |   Data Link
Physical      | Physical   | Physical     |   Physical

Balancer can be act as cache needs layer 7
Proxy calls the server on behalf of the client


Switch vs Hub 
- Switches are more intelligent than hubs
- Switches can send and receive data at the same time
- Hubs broadcast data to all devices on the network

simpler to deal with 5, 6, 7 as just 1 layer, TCP/IP does that.