Is used when many microserveses needs to talk to eachother
- Microservices are small, independent services that work together


Pros:
- Scalability  
Cons:   
- Bad for multiple receievers
- High coupling
- Client/Server have to be online
- Chaining, circuit breaking


Pub/Sub
Pros
- Scales
- loose coupling
- works while clients not running
Cons
- Message Delievery issues
- Complexity
- Network Saturation

Kafka polling
RabbitMQ pushing