var express = require('express');
var router = express();
var fileWriter = require('fs');

router.post('/add', function(req, res) {
    //storing data into variable
    var data ="--------------------------------------------\n";
    data+="Date:\t"+new Date().toUTCString()+"\n";
    data+="Email Id:\t"+req.body.emailId+"\n"
    data+="Message:\t"+req.body.message+"\n";
    data+="--------------------------------------------";
    //storing data into file
    var filePath = "./data/contacts.txt";
    fileWriter.appendFile(filePath, data, function(err){
        console.log(err+" "+filePath);
    });
    
    //responding to client
    res.send(JSON.stringify({"done":true}));
});

module.exports = router;
