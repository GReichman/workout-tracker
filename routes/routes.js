const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

router.get("/", function(req,res){
    res.send("hello");
});

module.exports=router;