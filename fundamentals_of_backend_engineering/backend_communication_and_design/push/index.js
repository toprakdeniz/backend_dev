const http = require('http');
const WebSocketServer = require('websocket').server;
let connections = [];

const httpServer = http.createServer()

const websocket = new WebSocketServer({"httpServer": httpServer});

httpServer.listen(8080, () => { console.log("Listening on port 8080...")});

websocket.on("request", request => {

    const connection = request.accept(null, request.origin);
    connection.on("message", message => {
        connections.forEach(element => {
        if (element.socket.remotePort != connection.socket.remotePort){
                element.send(`User ${connection.socket.remotePort} said: ${message.utf8Data}`);
            }
        });
    });
    connections.push(connection);
    connections.forEach(element => { 
            element.send("New user connected")
        });
});

// on browser console:
// let ws = new WebSocket("ws://localhost:8080");
// ws.onmessage = message => console.log(message.data);
// ws.send("Hello from the browser!");
// ws.send("Hello from the browser again!");