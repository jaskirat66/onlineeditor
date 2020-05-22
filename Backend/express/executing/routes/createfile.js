let {PythonShell} = require('python-shell')
var express = require('express');
var router = express();
var fs = require('fs'); 
const bodyparser=require('body-parser');
const cors  = require("cors");
router.use(cors());



router.post('/',(req,res) =>{
    console.log("hi")
    createfile(req.body.blocks);
    //createfile(req.body.username);
});
module.exports = router;
function createfile(blocks){
    var filepath = '/Users/jaskiratsingh/Downloads/';
    const Str = require('@supercharge/strings')
    var random;
    var logger;
    const fs = require('fs')
    for (var i=0; i!=-1; i++){

        random = Str.random();
        random = random.concat('.py')
        filepath=filepath.concat(random)
        if(!fs.existsSync(filepath)){
                logger = fs.createWriteStream(filepath, {
                flags: 'a'
              });
              for (var j=0; j<Object.keys(blocks).length; j++){

                logger.write(blocks[j].text);
                logger.write('\n');
              }
              logger.end();
              runpythonfile(filepath);
            break;
        }
        else{
            continue;
        }
    }
}

function runpythonfile(path){
    console.log("inside run")
    PythonShell.run(path, null, function (err) {
    if (err) throw err;
    console.log('finished');
    });
}