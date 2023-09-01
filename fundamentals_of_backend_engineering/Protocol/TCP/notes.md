TCP
- Tranmission Control Protocol
- Layer 4 - Ability to address processes on a host using ports
- Controls the transmission of data 
- Connection oriented. Is stateful, requires Handshake
- 20 bytes header segment (can go up to 60)


Use Cases
- Reliable communication
- Remote shell
- Database connections
- Web communication
- Any biderictional communication

Tcp Connection

- Connection is an agrreement between two hosts to exchange data
- Must create connection to exchange data (3 way handshake)
- Segments are sequenced and ordered
- Segments are acknowledged
- Segments are retransmitted if lost


Connection establishment (3 way handshake)
- app1 sends SYN to app2
- app2 sends SYN-ACK to app1
- app1 sends ACK to app2
- app1 and app2 can now exchange data
- They have **file descriptors** to each other

Sending Data
- App1 sends data to app2
- app1 encapsulates the data in a segment and sends it to app2
- Appx acknowledges the data
- App1 can send more data without waiting for an acknowledgement but there is a limit to how much data can be sent without acknowledgement

- App1 sends data to app2 in three segments
- if app2 recieves all sends act3

Lost Data
- lets say segment 3 is lost
- lets say app2 recives first 2 and will send an ACK for segment 2
- segment 3 is retransmitted

Closing a connection (4 way handshake)
- app1 sends FIN to app2
- app2 sends ACK to app1
- app2 sends FIN to app1
- app1 sends ACK to app2
- file descriptors can be deleted after some time



TCP Segment
- 20 bytes header - can go up to 60 bytes
- 16 bit source port
- 16 bit destination port
- 32 bit sequence number
- 32 bit acknowledgement number ( you can send data wile acknowledging something else)
- 4 bit header length
- 9 bit flags (
    ns, 
    syn, 
    fin, 
    ack, 
    psh, 
    rst, 
    urg, 
    ece, 
    cwr cwr congestion window
    ) 
- 16 bit window size ( how much data can be sent without acknowledgement - flow control)
- 16 bit checksum
- 16 bit urgent pointer
- 0-40 bytes options

Maximum Segment Size

- Segment size depends the MTU (Maximum Transmission Unit) of the network
- usually 512 to 1460 bytes
- Default MTU is 1500 bytes ( 20bytes for IP header and 20 bytes for TCP header)
- jumbo frames can be up to 9000 bytes
- MSS can be larger in jumbo frames (MSS? - Maximum Segment Size)

listen performs the 3 way handshake
accept returns a new file descriptor for the connection
If your connection queue is fulyou wont get back ack signal or you will get a ECONNREFUSED error

