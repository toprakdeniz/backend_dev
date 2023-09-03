//client for todo.proto

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('C:/Dev/Courses/backend_dev/fundamentals_of_backend_engineering/Protocol/gRPC/example/todo.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo('localhost:8080', grpc.credentials.createInsecure());

const text = process.argv[2];
client.createTodo({
    "id": -1,
    "text": text
}, (err, response) => {
    console.log('Received from server: ' + JSON.stringify(response));
}
);

client.readTodos({}, (err, response) => {
    if (err) {
        console.error(err);
    }

    console.log('Read Todos from server: ' + JSON.stringify(response));
    if (!response.items) {
        console.log("no items");
        return;
    }
    response.items.forEach(item => {
        console.log(item.text);
    });
}  
);

const call = client.readTodosStream();
call.on('data', item => {
    console.log('received item from server stream: ' + JSON.stringify(item));
});

call.on('end', e => { console.log("server stream ended") });