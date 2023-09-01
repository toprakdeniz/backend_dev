import net from "net";

const server = net.createServer((socket) => {

    console.log("TCP handshake is successful with " + socket.remoteAddress + ":" + socket.remotePort);
    socket.write("Hello, client!");
    socket.on("data", (data) => {
        console.log("Received from client: " + data.toString());
    }
    );});

server.listen(3000, "localhost");