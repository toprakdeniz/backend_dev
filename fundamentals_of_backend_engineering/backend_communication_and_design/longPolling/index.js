const app = require('express')();
const jobs = {}

app.post("/submit", (req, res) => {
    const jobId = `job:${Date.now()}`;
    jobs[jobId] = 0;
    updateJob(jobId);
    res.end("\n\n" + jobId + "\n\n");
});

app.get("/status", async (req, res) => {
    
    console.log(jobs[req.query.jobId]);
    while(await checkJobComplete(req.query.jobId) == false);
    res.end("\n\nJobStatus: " + jobs[req.query.jobId] + "\n\n");
});


function updateJob(jobId){
    jobs[jobId] += 1;
    if (jobs[jobId] < 100){
        setTimeout(() => {
            updateJob(jobId);
        }, 1000); 
    }
}

function checkJobComplete(jobId){
    return new Promise((resolve, reject) => {
       if (jobs[jobId] < 100)
              this.setTimeout(() => resolve(false), 300);
         else
              resolve(true);
    });
}


app.listen(8080, () => { console.log("Listening on port 8080...")});