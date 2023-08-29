const app = require('express')();
const jobs = {}

app.post("/submit", (req, res) => {
    const jobId = `job:${Date.now()}`;
    jobs[jobId] = 0;
    updateJob(jobId);
    res.end("\n\n" + jobId + "\n\n");
});


// app.get("/status", (req, res) => {
//     let jobId = req.query.jobId;

app.get("/status/:jobId", (req, res) => {
    console.log(jobs[req.params.jobId]);
    res.end("\n\nJobStatus: " + jobs[req.params.jobId] + "\n\n");
});

app.listen(8080, () => { console.log("Listening on port 8080...")});

function updateJob(jobId){
    jobs[jobId] += 1;
    if (jobs[jobId] < 100){
        setTimeout(() => {
            updateJob(jobId);
        }, 1000);
    }
}

// curl -X POST localhost:8080/submit
// curl localhost:8080/status/{}
