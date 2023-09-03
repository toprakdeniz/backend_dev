How HTTP.2 improves HTTP.1.1?
- HTTP.2 is binary protocol, HTTP.1.1 is text protocol
- HTTP.2 is multiplexed, HTTP.1.1 is not
- HTTP.2 uses header compression, HTTP.1.1 does not
- HTTP.2 allows server to push data, HTTP.1.1 does not

browser connections limit to a single domain? 
- HTTP.1.1: 6 connections
- HTTP.2: 1 connection

TCP head of line blocking.


HTTP.2 Push: server can push data to client without client asking for it.

HTTP.2 Pros
- Multiplexing over a single TCP connection
- Header compression
- Server push
- Binary protocol
- Secure by default

HTTP.2 Cons
- Tcp head of line blocking on the server
- Server push never picked up by the client
- High cpu usage
- More reads compare to HTTP.1.1
  - Stream header

HTTP.2 is not a silver bullet, it is not a replacement for HTTP.1.1, it is a complement to HTTP.1.1.
