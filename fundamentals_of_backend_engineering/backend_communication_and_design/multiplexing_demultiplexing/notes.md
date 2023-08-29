multiplexing
--- |
--- | ---- 
--- |
Demultiplexing
    | ---
=-_ | ===
    | ___


Http 1.1 Chrome
--- | ---
--- | ---  Three connection is bad because of the limit 
--- | --- 

Http 2.0 Chrome
--- | 
=== | multiplexted
+++ | 



http 1       http 2
--- |       |             | Http 2
=== | Proxy | multiplexed | Server (there is a load on the server because it needs to demultiples the requests)
+++ | Envoy |             |




http 2       http 2
      |       |               | Http 2
=-=+  | Proxy | demultiplexed | Server 
      | Envoy |               |


# Connection Pooling

Backend uses the same connections to the database.




