/* Client side code
const sse = new EventSource("http://localhost:8080/stream");
sse.onmessage = message => console.log(message.data);

*/



const app = require('express')();


app.get("/", (req, res) => { res.send("Hello World!")});

app.get("/stream", (req, res) => {
    // text/event-stream is required for server sent events
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
});

const port = process.env.PORT || 8080;


function send(res, i = 0){
    if( i > 10){
        res.end();
        return;}
    res.write(`data: ${i}\n\n`);
    setTimeout(() => {
        send(res, i+1);
    }, 1000);
}

app.listen(port, () => { console.log(`Listening on port ${port}...`)});
