Is state stored in the backend?

Stateful
- Stores state about client in the backend
- Relaying that state is there to function properly
Stateless
- Client is responsible to "transfer the state" to the backend with every request
- May store but can safely lose it

A problem with stateful
You login. Page loaded. Refreshed the page. You are logged out.
- The state is stored in the backend, one of the servers. When you refresh, you are redirected to another server. The server does not know you are logged in.

In stateless your state is kept in redis or database. You can refresh and still be logged in.
You can say it is stateful since it keeps the state in the database. But it is stateless since the server does not keep the state.

Stateless vs Stateful protocols
- The protocols can be designed to store state
- TCP is stateful
  - Sequences, connection file descriptor
- UDP is stateless
  - No connection file descriptor
  - No sequence numbers
  - DNS send queryId in udp to identify the response
  - QUIC sends a connectionId identify the connection (build on udp)

JWT (JSON Web Token)
- Stateless
- Everything is in the token
Someone can stole that. You need TLS in your system. 