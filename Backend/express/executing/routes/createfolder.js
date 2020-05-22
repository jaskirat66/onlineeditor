var express = require('express');
var router = express();
const bodyparser=require('body-parser');
const cors  = require("cors");
router.use(cors());



router.post('/',(req,res) =>{
    console.log(req.body.username)
    createdir(req.body.username);
});
module.exports = router;
function createdir(username){
    const fs = require('fs')

    var folderName = '/Users/jaskiratsingh/Downloads/';
    folderName=folderName.concat(username)

    try {
    if (!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
    }
    } catch (err) {
        if (!fs.existsSync(folderName)){
            fs.mkdirSync(folderName)
        }
    console.error(folderName)
    }
}
