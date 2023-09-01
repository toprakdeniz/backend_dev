import dgram from 'dgram';

const socket = dgram.createSocket('udp4');
socket.bind(3000, "127.0.0.1");
socket.on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });

console.log("server is up");