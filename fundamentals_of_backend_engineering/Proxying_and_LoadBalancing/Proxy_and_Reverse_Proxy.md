# Proxy and Reverse Proxy

## Difference between Proxy and Reverse Proxy

### Proxy

A server makes calls on behalf of a client. The client connects to the proxy server and sends requests for resources such as a file or connection to a website or other servers. The proxy server evaluates the request as a way to simplify and control its complexity. Proxies were invented to add structure and encapsulation to distributed systems.


The clients tcp connection (layer 4) is establised between proxy before for example google.com.

Google.com sees the proxy server as the client and the proxy server sees the client as the client.


### Proxy Use Cases

- caching
- Anonymity
- Logging, Monitoring
- Content Filtering (block sites)
  - Most https proxies decrypt the traffic to inspect it

### Reverse Proxy

A reverse proxy is a server that sits in front of web servers and forwards client (e.g. web browser) requests to those web servers. Reverse proxies are typically implemented to help increase security, performance, and reliability. Reverse proxies can be used for:

- Load balancing
- Content delivery networks
- Web acceleration
- Security and anonymity
- SSL encryption
- Decryption and caching
- Compression
- Static content offloading
- Content filtering
- Fault tolerance
- Traffic management
- Ingress controllers (15percent of requests go to server1 , rest go to server2)
- A/B testing and feature rollouts

The client establishes a tcp connection with the proxy server. The proxy server establishes a tcp connection with the server.


Can I use Proxy instead of VPN for anonymity?
VPN is layer 3, proxy is layer 4. VPN is more secure because it encrypts the traffic. Proxy is not encrypted. Proxy needs to know the protocol. 

Tunnel proxy establishes a connection and sends segments immediately. 


Is proxy just for HTTP traffic? No, it can be used for any protocol. Most popular is HTTP.
