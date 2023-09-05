HTTPS over tcp with TLS 1.2

client  ------------------------ server
            syn -> 
            <- syn, ack
            ack ->
            message ->
            <- message
            fin ->
            <- fin, ack
            ack ->
            GET ->
            <- 200 OK

            