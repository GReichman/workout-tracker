const router = require("express").Router();
const Transaction = require("./models/transaction.js");

router.get("/", function(req,res){
    res.sendFile(__dirname+"/public/html/index.html");
});

router.get("/exercise", function(req,res){
    res.sendFile(__dirname+"/public/html/exercise.html");
});

router.get("/stats", function(req,res){
    res.sendFile(__dirname+"/public/html/stats.html");
});

module.exports=router;