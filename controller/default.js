var router=require('express').Router();
  console.log("helllo")
router.use("/login",require('./login'));

module.exports=router;