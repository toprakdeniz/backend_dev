needs a task id. so client can ask for the status of the task

What is Short polling?

- Client sends a request to the server
- Server responds immediately with a handle
- Server continues to process the request
- Client polls the server with the handle
- Multiple "short" requests response as polls


Pros
- Simple to implement
- Easy to understand
- good for long running tasks
Cons
- Too chatty
- Netowrk bandwidth
- Wasted Backend resources
  