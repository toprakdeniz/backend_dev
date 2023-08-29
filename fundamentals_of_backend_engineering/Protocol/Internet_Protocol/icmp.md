ICMP is are ping, traceroute, and other network diagnostic tools. It is a layer 3 protocol that is used to send error messages and operational information indicating success or failure when communicating with another IP address. It is used by network devices, like routers, to send error messages indicating, for example, that a requested service is not available or that a host or router could not be reached.


ICMP
- Stands for Internet Control Message Protocol 
- There are no ports. It is a layer 3 protocol
- Uses IP directly
- Does not require listeners or ports to be opened. 

- Some firewalls blocks ICMP traffic for security reasons
- That is why PING might not work in those cases
- Disabling ICMP is not a good idea as it is used for network diagnostics
    - Fragmentation needed
    - TCP black hole