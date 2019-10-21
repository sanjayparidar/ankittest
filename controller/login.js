var router=require("express").Router();

router.get("/",function(req,res){

   res.render('index',{'name':"sanjay"});
});

module.exports=router;