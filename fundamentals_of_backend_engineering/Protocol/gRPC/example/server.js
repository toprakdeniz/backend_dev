// import grpc/grpc-js

const grpc = require('@grpc/grpc-js');
const { ServerUnaryCallImpl } = require('@grpc/grpc-js/build/src/server-call');
const protoLoader = require('@grpc/proto-loader');

// console.log(protoLoader)
// folder path is relative to the file that is importing it
const packageDef = protoLoader.loadSync('C:/Dev/Courses/backend_dev/fundamentals_of_backend_engineering/Protocol/gRPC/example/todo.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();


server.addService(todoPackage.Todo.service, { 
    "createTodo": createTodo,
    "readTodos": readTodos,
    "readTodosStream": readTodosStream
});

 // 

const todos = [];
function createTodo (call, callback) {
    const todoItem = { "id": todos.length + 1, "text": call.request.text };
    todos.push(todoItem);
    callback(null, todoItem);
}

function readTodos (call, callback) {
    const todoItems = { "items": todos };
    callback(null,  todoItems);
}

function readTodosStream(call, callback) {
    todos.forEach(todo => {
        call.write(todo);
    });
    call.end();
}

server.bindAsync('127.0.0.1:8080', 
    grpc.ServerCredentials.createInsecure() // http2 wants security but we can bypass it
    , (err, port) => {
        if (err) {
            console.error(err);
        } else {
            server.start();

            console.log("listening on port " + port);
        }
    }
    );



