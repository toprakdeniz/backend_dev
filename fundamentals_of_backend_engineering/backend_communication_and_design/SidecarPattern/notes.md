# Thick Client, Thicker Backends

TLS (Transport Layer Security) is a protocol that provides privacy and data integrity between two communicating applications. It's the most widely deployed security protocol used today, and is used for web browsers and other applications that require data to be securely exchanged over a network, such as file transfers, VPN connections, instant messaging and voice over IP.

Delegate the communication to proxy
client has thin library
proxy has a rich library
Each client must have a sidecar proxy

if you want to change the protocol, you only need to change the proxy

## Sidecar Pattern Exampls
- Service Mesh Proxies
  - Linkerd, Istio, Envoy
- Sidecar Proxy Container
- Must be Layer 7 aware

Whistle!
(layer 7 proxy vs layer 4 proxy)

Pros:
- Language agnostic(polyglot)
- Protocol agnostic
- Easy to add new features
- Security
- Observability -> (control plane monitors all the proxies) (Add request an id so You can trace the request)
- Service Discovery 
- Caching (they can cache)
Cons
- Complexity
- Performance
- Latency (Proxies are local but they are not in the same process)