var express = require("express");
var app = express();
var serviceObj = require("./services");
app.set('views', './views')
app.set('view engine', 'pug')

app.get("/",function(req,res){
	serviceObj.readTailFunction({lines:10,filename:"../file_input"},function(err,data){
	res.render("index",{ title : "File List",fileList : data.split("\n")});
});
});

const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT,function () {
  console.info("Application is listening to port %s" ,PORT);
})
