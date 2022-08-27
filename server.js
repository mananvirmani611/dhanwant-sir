const express = require("express");
const app = express();




app.get("/", function (req, res) {


  console.log(req.ip);

  res.send("home page");
})


app.get("/secrets", function(req, res) {
  if(req.ip === "::1"){
    res.send("bad request");
  }
  else{

  }
})


app.listen(3000, function(){
  console.log("server started at port 3000");
})
