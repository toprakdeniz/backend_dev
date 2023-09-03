HTTP over QUIC Multiplexed Streams

Client initiates a streams have even-numbered IDs, server initiated streams have odd-numbered IDs.


In http.2 if a segment in the middle is lost, all the segments after that will not processed until the lost segment is received. This is called head of line blocking.


HTTP.3 uses QUIC
- Quic is a new transport protocol over UDP

HTTP.3 not only solves the head of line blocking problem, but also solves the problem of ossification. Because it is over UDP, middle boxes cannot understand it and cannot block it.


HTTP.3 Pros
- Merges Connection and TLS handshake in one round trip
- No head of line blocking (HOL)
- No ossification
- Connection migration (if you change your network, you can migrate your connection to the new network without closing the connection, Each packets has a token that identifies the connection)
   - This has security implications, because if someone steals your token, they can hijack your connection.


HTTP.3 Cons
- Takes a lot of cpu (parsing logic)
- UDP could be blocked
- IP fragmentation

Header Compression Algorithms
- HPACK (HTTP/2)
 - HPACK is a compression format for efficiently representing HTTP header fields, to be used in HTTP/2.
 - HPACK is designed to be reasonably efficient to implement, without requiring access to any particular data structures from the programming language used.
 - It requeires a dictionary to be shared between the client and the server. The data send in order. Therefore QUIC cant use it because it is unordered.
- QPACK (HTTP/3)


