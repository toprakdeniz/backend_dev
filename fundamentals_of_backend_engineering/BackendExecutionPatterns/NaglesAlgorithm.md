# Nagle's algorithm

Delay in the client side

In the telnet days sending a single byte in a segment is a waste of bandwidth. So Nagle's algorithm was introduced to wait for a certain amount of time before sending the segment.

The client can wait for a full MSS before sending the segment. 
NO waste 40 bytes of header(IP+TCP) for 1 byte of data.

Example:
Assume MSS = 1460 bytes, A sends 500 bytes
500 < 1460, so A waits to fill the segment
A sends 960 bytes, segment fills and send
If there is not anything to ACK data will be immediately sent

Example Large data:
A wants to send 5000 bytes on 1460 MSS
3 full segments of 1460 bytes will be sent
4th segment will be sent after 5000-3*1460 = 620 bytes
**Not full segments are only sent when an ACK is received**
```
 _      - 1460 bytes - 1460 bytes - 1460 bytes ->       _
|A|     <- ACK -                                       |B|
        - 620 bytes -> 
        <- ACK - 
```

Most hosts today disable Nagle's algorithm by default.

in curl disbale Nagle's algorithm in 2016 by default
TCP_NODELAY is set to 1 disabling Nagle's algorithm