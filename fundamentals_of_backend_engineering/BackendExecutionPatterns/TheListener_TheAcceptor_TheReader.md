Listener:
A Thread or a process that calls the listen and passing the port and the address and get get back the socket id and socket number

Acceptor: is whoever have access to the socket ID and calls accept and get back file descriptor pointing to the connection

Reader: is whoever have access to the file descriptor and calls read and get back the data

---
As we discussed in the above lactures listening is a part of kernel where it’ll move the connection from SYN queue to ACCEPT queue, is that correct ? So why are we considering it as a job of backend app?


when the backend listens it creates the socket, accept queue and syn queue which all live in the kernel

the kernel completes connections and put them in the accept queue but the backend MUST call accept() (a syscall) to pop that connection from the accept queue and create a file descriptor (think of it a connection handle or object)

the second job of the backend is to call read() on the connection so data received on that connection is moved from kernel to the backend app user space memory.

so yeah backend still does alot of work here

---
Note: Readers are also writers in this context


# Single Listener/Single Worker Thread 
Node JS is an example of this pattern

if there is too many connections, the listener will be overwhelmed and the worker thread will be overwhelmed as well

single thread 

client app(node) -> os -> listener/accepter/reader/worker thread 
                            ^
                            |
                        connection 


# Single Listener/Multiple Worker Threads
Memcached is an example of this pattern




client app -> os -> single listener/acceptor -> multiple worker threads ready to reader


What is the problem with this pattern?
- load balancing is not easy, a hard request can be sent to a worker thread that is already busy
  

# Single Listener/Multiple Worker threads with load balancing
RAMCloud is an example of this pattern


client app -> os -> single listener/acceptor/readers -> multiple worker threads ready to process requests

read must we on the same thread that accepted the connection because of the load balancing


# Single listener with multiple thread acceptors/readers (Multiple Threads with single socket)
Nginx is an example of this pattern( used to be the default configuration)

client app -> os -> single listener -> multiple acceptor/reader threads -> multiple worker threads ready to process requests

All the acceptor/reader threads are reading from the same socket. There is locking and unlocking to make sure that only one thread is reading from the socket at a time.


# Multiple Listeners on the same port 

Socket sharding with `so_reuseport`

client app -> os -> multiple listeners/acceptor/reader threads

Linux is scare of port hijacking so it does not allow multiple listeners on the same port. But with `so_reuseport` we can have multiple listeners on the same port. This is useful for load balancing.

