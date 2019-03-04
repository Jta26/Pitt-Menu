//This File contains code that is responsible
//for callling the set of locally hosted Python Scripts
//that get new data from the Metz Website.

//Takes in nothing, Returns a promise when the script is finished.
function InvokePython() {
    console.log('invoking')
    return new Promise((res, rej) => {
        var { spawn } = require('child_process');
        var process = spawn('python3', ['../FileProcessor/FormatPdf.py']);
            process.stdout.on('data', (data) => { 
                res(data);
            });
            process.stderr.on('data', (data) => {
                rej(data)
        })
    });
}

// InvokeScript.then((data) => {
//     console.log(data.toString());
// })

module.exports = InvokePython;
