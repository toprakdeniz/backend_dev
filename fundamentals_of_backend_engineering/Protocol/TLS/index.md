TLS
- TLS might live in session layer


how we can have the same key for encryption and decryption without the other party knowing it?
- Diffie Hellman key exchange
- RSA key exchange


How it works?
- app1 sends rsa public key to app2
- app 2 creates a symmetric key and encrypts it with the public key of app1
- app1 has a secret key that can decrypt the symmetric key


Diffie Hellman

private x

public g^x  = Symmetric key

private y


TLS 1.3
(g^x%n)^y = g^xy%n
(g^y%n)^x = g^xy%n
Dont ask just send the first key
