Use case solved
Performance 

What is a protocol?
- A set of rules that governs the communication between two entities
  
Protocol Properties
- Data Format
  - Text (JSON, XML, HTML, etc)
  - Binary (Protobuf, Thrift, RESP(redis), etc)
- Transfer Mode
  - Message based (HTTP, gRPC, UDP, etc)
  - Stream based (TCP, WebSockets, WebRTC, etc)
  - Synchronous (HTTP, gRPC, etc)
  - Asynchronous (MQTT, AMQP, etc)
- Addresing system
  - IP Address (TCP, UDP, etc)
  - URL (HTTP, gRPC, etc)
  - Topic (MQTT, AMQP, etc)
- Directionality
  - Unicast (HTTP, gRPC, etc), Uni-directional
  - Multicast (MQTT, AMQP, etc), Bi-directional
  - Broadcast (UDP, etc), Bi-directional
  - Full/Half Duplex (TCP, WebSockets, etc), Bi-directional
- State
  - Stateful (TCP, WebSockets, etc)
  - Stateless (HTTP, gRPC, etc)
- Routing
  - Proxy, Gateways, etc
- Flow & Congestion Control
  - TCP, WebSockets, etc
  - Not in UDP
- Error Management
  - TCP, WebSockets, etc
  - Not in UDP