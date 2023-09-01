// create udp client that gets messages

use std::net::UdpSocket;
use std::io;
use std::env;

fn main(){
    let serve_addr = env::args().nth(1).unwrap_or("127.0.0.1:8080".to_string());

    let socket = UdpSocket::bind("127.0.0.1:34254").expect("couldn't bind to address");
    let mut buf = [0; 10];
    let mut connection = socket.connect(serve_addr);

    // listen connection and print out the message
    loop {
        let (amt, src) = socket.recv_from(&mut buf).expect("didn't receive data");
        let buf = &mut buf[..amt];
        println!("Received message: {}", String::from_utf8_lossy(buf));
    }
}