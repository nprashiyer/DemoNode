const express = require('express');

const app = express();
const port = process.env.PORT||3000;

app.get("/", function(req,res){
    res.sendFile(__dirname + "/main.html");
});

var m ;

//Dummy comment

app.listen(port, () => {
  console.log('Server directory is  ' + __dirname  + " --> running at port" + port);
});
