Syn/Accept Queues

- Server listens on an address:port
- Client connects
- Kernel does the handshake, creating a connection
- Backend process "Accepts" the connection

Connection Establishment
- Kernel creates a socket & two queues (syn/accept)
- Client sends a SYN packet
- Kernel adds to SYN queue, replies with SYN-ACK
- Client replies ACK
- Kernel finds SYN matching the ACK
- Kernel finish the connection
- Kernel removes SYN from SYN queue
- A File Descriptor is created for the connection
- Kernel adds to accept queue
- Backend process "Accepts" the connection

In linux file descriptors are used for everything. Files, sockets, pipes, etc. They are just integers.

Intel DDP (Dynamic Device Personalization)
- Smart things to implement all the logic in the network interface so the kernel does not have to do it.



Reverse Proxy's 1 job: accept the connections as fast as possible and forward them to the backend as fast as possible.

Problems with accepting connections
- backend does not accpet fast enough
- Clients who don't ack. (SYN flood attack- solved with SYN cookies)
- Small backlog 