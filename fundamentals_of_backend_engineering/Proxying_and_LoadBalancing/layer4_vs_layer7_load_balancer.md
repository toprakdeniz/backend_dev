# Layer 4 vs Layer 7 Load Balancer

A fundamental component of backend networking

Backend engineers generally works on layer 4 and layer 7.
We play in layer 5 in stateful cases:
- match, manage file descriptors
- see how many segments/bytes received
```
client <- TCP Connection -> L4 load balancer <- TCP Connection -> server
            SYN
          SYN-ACK
            ACK
```  

## Layer 4 Load Balancer

TCP Request from specfic client always go to the same server behind the load balancer.



Pros:
it doesn't need to look at the content of the request
- Fast  (port ip address)
- More secure 
- Works with any protocol
- One TCP Connection (NAT)

Cons:
- No smart routing
- Not applicapble for microservices
- Sticky per TCP connection
- No Caching
- Protocol unaware (can bypass rules) 

## Layer 7 Load Balancer

HTTP is stateless. So Load Balancer reads segments and makes decisions based on the content of the request.
Can select different servers based on the content of the request.

HTTP smugling attack happen when backend and load balancer are not in sync.

Pros:
- Smart routing, actual load balancing
- can cache results.
- Great for microservices
- API gateway logic: authentication, rate limiting, logging, monitoring, etc.



Cons:
- Slow
- Decrypts (terminates TLS) and re-encrypts traffic
- Two TCP connections (NAT)
- Must share TLS certificate with load balancer
- Needs buffer ( read read understand and then forward)
- Needs to understand the protocol