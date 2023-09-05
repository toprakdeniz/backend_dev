If there is a preshared key this can be used

client ---------------------- server
        syn ->
        <- syn, ack
        ack ->
        message ->
        GET ->
        <- message
        <- 200 OK
        fin ->
