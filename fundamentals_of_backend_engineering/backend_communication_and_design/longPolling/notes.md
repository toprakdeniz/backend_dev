request is sent to the server
server responds immediately with a handle
server continues to process the request
client polls the server with the handle
server responds with **only if** there is a result. 

(kafka uses it)



Pros
- Less chattier than short polling
- Client can be offline
Cons
- Not real time
