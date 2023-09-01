# HTTP Request

Method  Path  Protocol 
       Headers (key: value) (autherity, host, user-agent, accept, accept-language, accept-encoding, referer, cookie, connection, cache-control)
       Body

# HTTP Response

Protocol Code CodeText (code text is removed on HTTP/2, HTTP/3)
        Headers
        Body

HTTP TCP connection
HTTPS after TCP, TLS connection


What was like http 1.0?
- Was closing the connection after each request
- New TCP connections for each request
- Buffering (transfer encoding: chunked did not exist)
- No multi-homed websites (host header did not exist)
  

HTTP/1.1
- Persisted TCP connections with Pipelining
- Low Latency
- low cpu usage

Pipelining 
- open TCP connection
- ask for index.html, image1, image2 in order
- server sends index.html, image1, image2 in order

The problem is http smugling 

in HTTP/1.1 there was header compression. But attackers know how it compress and can exploit it.


HTTP/2
invented by google
- SPDY 
- Compression of headers and body
- Multiplexing 
- Server push (server can push data to client without client asking for it)
- Secure by deafult (TLS)
- Protocol negotiation during TLS using tls extention NPN/ALPN (hey are you talking http/2? yes? ok lets talk http/2)

Protocol ossification (when a protocol is so old that it is hard to change it)
Middle boxes (firewalls, intrusion detection systems, load balancers, proxies, NATs, etc) are not able to understand the new protocol and they will not allow it to pass through them.


HTTP over QUICT (HTTP/3)
- Replaces TCP with QUIC (UDP with Congestion Control)
- All the features of HTTP/2
- Without HOL (Head of line blocking)