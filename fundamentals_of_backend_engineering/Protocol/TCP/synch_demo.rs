use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};

fn handle_client(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).expect("read failed");

    let request = String::from_utf8_lossy(&buffer[..]);
    println!("request: {}", request);

    let response = format!("HTTP/1.1 200 OK\r\n\r\nHello, world!");
    stream.write(response.as_bytes()).expect("write failed");

}

fn main() -> std::io::Result<()> {
    let url = "127.0.0.1:8080";
    let listener = TcpListener::bind(&url).expect("bind failed");
    println!("listening on {}", url);

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                println!("new connection: {}", stream.peer_addr().unwrap());
                std::thread::spawn(move || {
                    handle_client(stream)
                });
            }
            Err(e) => {
                println!("connection failed: {}", e);
            }
        }
    }
    Ok(())
}