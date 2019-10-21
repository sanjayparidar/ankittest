var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(__dirname)
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyparser())


app.use(require("./controller/default"));
app.listen(2000,function(){
    console.log("server start")
})