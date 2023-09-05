What is a process
- A set of instructions that are executed sequentially
- Has an isolated memory space
- Has a PID (process identifier)
- Has a parent process
- Scheduled by the OS scheduler



On cases such as read writes the process kicks out of the cpu and the OS scheduler decides which process to run next


What is a Thread?
- Light weight process
- A set of instructions that are executed sequentially
- Shares the memory space of parent process
- Has a ID (PID in linux, TID in windows)


Multi-Proccessing
Examples: NGINX/POSTGRES, does have shared memory between processes


Redis has asynchronius snapshat: It writes to disk asynchronously.
    if something changes while writing to disk, it will be lost.
    COW - Copy on write: Write disk only when something changes
    The change alse send to the writer process. 


Multi-Threading
- one process can have multiple threads
- shared memory
- take advantage of multi-cores
- requires less memory than multi-processing
- Race conditions
- locks and latches


 (SQL Server)
 Concept called Primary Cluster Key
 The all table is in the leaf level of the B+ tree
 