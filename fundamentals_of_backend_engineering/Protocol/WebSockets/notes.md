The web is protected under the HTTP protocol. Websocket starts with HTTP and then upgrades to Websocket if the server supports it.

WebSockets
- WebSockets are a protocol that allows for bidirectional communication between a client and a server over a TCP connection

TCP is too powerful to expose to the web. 



Http 1.0
New connection for each request
Http 1.1
Keep-alive connections (pipelining)

Websockets
Handshake with HTTP
Then close the connection

ws:// or wss:// (secure)    

-> Get 1.1 UPGRADE
<- 101 Switching Protocols


# example
Client
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
```

Server
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```

Upgrade header should be understand by the server.

hop-by-hop header:






# Use cases
- Chat
- Real time data
- Multiplayer games
- Collaborative editing
- Notifications
- Stock tickers

Pros
- full duplex (no polling)
- low overhead
- http compatible
- firewall friendly

Cons
- proxying is tricky
- L7 LB challenging (timeouts) Middle routers can close the connection
    - send ping and pong to keep the connection alive (Pong ICMP message to find out if target reaccable)
- stateful, difficult to scale horizontally


Do you need websockets?
- Do you need full duplex communication?
- Do you need low latency communication?
- Do you need to send large amounts of data?
- Do you need to send data frequently?
- Do you need to send data to multiple clients?

