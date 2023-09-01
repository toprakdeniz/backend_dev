# The IP Building Blocks

IP Adress
- Layer 3 property
- Can be set automatically or statically
- Network and Host portion
- 4 bytes in IPv4 - 32 bits

Network vs Host
- a.b.c.d/x (a.b.c.d are integers) x is the network bits and ramains are host bits
  - Example: 192.168.254.0/24
- 24 bits are network bits and 8 bits are host bits
- This means we have 2^24 networks (16777216) and 2^8 hosts (255)
  

Subnet Mask
- 192.168.254.0/24 is also called a subnet
- The subnet has a mask 255.255.255.0
- Subnet mask is used to determine whether an ip is in the same subnet or not

Default Gateway
- Most networks consists of multiple hosts and a default gateway
- Hosts in the same subnet can communicate directly
- Hosts in different subnets need to communicate through the default gateway
- The gateway has an IP adress and each host should know its gateway.


Example
- Host A: 192.168,1.3
- Host B: 192.168,1.2
- A wants to talk to B
- Subnet masks are same: 255.255.255.0
- (192.168,1.3 & 255.255.255.0) == (192.168,1.2 == 255.255.255.0)
- No router is needed
  
Example
- Host A: 192.168,1.3
- Host B: 192.168,2.2
- A wants to talk to B
- Subnet masks are same: 255.255.255.0
- (192.168,1.3 & 255.255.255.0) != (192.168,2.2 == 255.255.255.0)
- The packet sends to 192.168.1.100 (default gateway)
- The router will forward the packet to Host B
- The router has another IP address on the other subnet
- The router has a routing table that tells it how to forward packets



High performance switch vs router
- Switches are faster than routers
- Switches are layer 2 devices
- Routers are layer 3 devices
- Switches use MAC addresses
- Routers use IP addresses
- Switches are used to connect devices in the same subnet
- Routers are used to connect devices in different subnets

Uses switch to connect backend to database!


# The IP Packet 

- The IP Packet has headers and payload  (data section)
- IP Packet header is 20 bytes. Cost to do business.
- The maximum IP packet size is 65,535 bytes (2^16-1), including all headers and usually requiring fragmentation



