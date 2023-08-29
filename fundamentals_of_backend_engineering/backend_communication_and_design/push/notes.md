If you want the result as fast as possible.

Request/Response isn't always ideal:
- client wants real time notifications
  
What is a push?

- client connects to a server
- server sends data to the client
- client does not have to request for anything
- Protocol must be bidirectional
- used by RabbitMQ, WebSockets, gRPC, HTTP/2

Push Pros:
- Real time
Push Cons:
- Clients must be online
  - you can push to a server and the server can push to the client when it comes online
- Clients might not be able to handle
- requires a bidrectional protocol
- Polling is prefered for light weight clients
  
  