# Epoll
asks periodically the kernel if there is something to do


# io_uring
https://kernel.dk/io_uring.pdf

What is io_uring? io_uring is an asynchronous I/O interface for the Linux kernel. An io_uring is a pair of ring buffers in shared memory that are used as queues between user space and the kernel: Submission queue (SQ): A user space process uses the submission queue to send asynchronous I/O requests to the kernel.

# Thread

Spawn a thread and wait for it to finish


# Asynch 
- (promises/futures)
- backend processing. 
- asynchronous commits in postgres. Wal of commits. recieves commits asynch and then writes them to disk.
- Asynchronous IO in Linux 
  - epoll, epoll does not work with files, only sockets. Tell me if this socket has something to read or write.
  - io_uring. There is something waiting for you to read or write.
- Asynchronous replication
  - Passes commit to graph of nodes, if all the majority of the nodes are commit then the transaction is committed.
- Asynchronous OS fsync (fs cache)
    - all writes are stacked in memory and then written to disk. we try to write in pages. 
    - it is good for defragmentation, ssd life
-  