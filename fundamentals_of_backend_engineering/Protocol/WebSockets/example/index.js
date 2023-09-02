const http = require('http');
const WebSocketServer = require('websocket').server;

let connections = [];

const httpserver = http.createServer();

const wss = new WebSocketServer({"httpServer": httpserver });

httpserver.listen(8080, () => {
    console.log('Server listening on port 8080');
});

wss.on('request', (request) => {
    const connection = request.accept(null, request.origin);
    console.log('New connection');
    connection.on('message', (message) => {
        console.log(`Received message ${message.utf8Data}`);
        connections.forEach((dest) => dest.sendUTF(
            `User ${connection.remoteAddress} said: ${message.utf8Data}`));
    });
    connections.push(connection);
    connection.on('close', (reasonCode, description) => {
        console.log('Connection closed');
    });
});

// Path: fundamentals_of_backend_engineering/Protocol/WebSockets/example/index.js