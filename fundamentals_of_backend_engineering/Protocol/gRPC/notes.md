Why gRPC is invected?
- Client Library: One library for all popular languages
- Protocol Buffers: Language neutral, platform neutral, extensible, efficient
- HTTP/2: Low latency, multiplexing, streaming, header compression, security

gRPC modes
- unary
- server streaming
- client streaming
- bidirectional streaming 



gRPC Pros
- fast and compact
- one client library
- progress feedback (upload/download)
- cancel request (h2)
- h2/protobuf

gRPC Cons
- schema 
- Thick client
- Proxies ( tricky to use things like nginx)
- error handling ( no http status codes )
- no native browser support (Streams are not supported all it sees are http2 requests)
- timeouts (pub/sub)
