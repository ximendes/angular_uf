var express = require("express");
var app = express();
var path = require("path");

var port = process.env.PORT || 2222;
app.listen(port);
console.log("Running on ",port);

app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');



app.use("/",express.static("app")); // WebApp Frame
app.get(['/','/*','/**'],function(req,res){
    res.sendFile(path.join(__dirname, '/app/index.html'));
})
