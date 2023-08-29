use std::net::{TcpStream};
use std::io::{Read, Write};
use std::str::from_utf8;

fn main(){

    match TcpStream::connect("localhost:8080"){
        Ok(mut stream) => {
            println!("Successfully connected to server in port 8080");
            let msg = b"Hello!";
            stream.write(msg).unwrap();
            println!("Sent Hello, awaiting reply...");
            
            let mut buffer = [0 as u8; 1024];
            match stream.read(&mut buffer) {
                Ok(_) => {
                    println!("Reply: {}", from_utf8(&buffer).unwrap());
                }
                Err(e) => {
                    println!("Failed to receive data: {}", e);
                }
            }
        },
        Err(e) => {
            println!("Failed to connect: {}", e);
        }
    }
    println!("Terminated.");
}