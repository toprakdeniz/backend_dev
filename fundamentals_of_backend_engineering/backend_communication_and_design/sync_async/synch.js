const fs = require ('fs');

console.log ('start reading a file sync...');
const res = fs.readFileSync ('./file.md')
console.log (res);
console.log ('end of the file');

console.log("start reading a file async...");
fs.readFile('./file.md', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
        console.log(res.toString());
        }
    );

console.log('end of the file');