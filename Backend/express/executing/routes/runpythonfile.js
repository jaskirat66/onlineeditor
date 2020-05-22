let {PythonShell} = require('python-shell')
 

export default function runpythonfile(path){

    PythonShell.run(path, null, function (err) {
    if (err) throw err;
    console.log('finished');
    });
}