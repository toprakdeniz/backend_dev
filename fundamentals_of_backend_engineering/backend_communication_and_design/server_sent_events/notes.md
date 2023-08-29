One request. One response.
The response keeps sending data until the connection is closed.

design for http

client parses data searching for events

Pros
- Real time
- Compatible with request/response
Cons
- Clients must be online
- clients might not be able to handle
- Polling is prefered for light clients
- HTTP/1.1 problem()


only 6 tcp connections to a domain. limitation by chrome ??