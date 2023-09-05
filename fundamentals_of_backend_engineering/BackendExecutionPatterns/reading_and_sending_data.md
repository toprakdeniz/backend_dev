# Send and Recieve buffers
- Client sends data on a connection 
  - The clients starts by writing  to the file descriptor
  - Then it will be delievered to backend application
  - NIC (Network Interface Card) will recieve the frame
  - the frame is parsed and delivered to the OS in a form of an IP packet
- kernel puts data in reveive queue
- Kernel ACKs (may delay) and update window
- App calls read to copy the data from the receive queue to the application buffer
  

Recieve Buffer

- Delayed ACKs to reduce ACK traffic
- 
Linux is working on a patch so application does not need to copy the data from the receive buffer to the application buffer
