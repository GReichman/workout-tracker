const router = require("express").Router();
const db = require("./models");

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
});

router.get("/exercise", function (req, res) {
    res.sendFile(__dirname + "/public/html/exercise.html");
});

router.get("/stats", function (req, res) {
    res.sendFile(__dirname + "/public/html/stats.html");
});

router.get("/api/workouts", function (req, res) {
    db.Workout.find().then(results => {
        res.json(results);
    })
});

router.post("/api/workouts", function (req, res) {
  db.Workout.create(req.body).then(results => {
    console.log(results);
  });
});

router.put("/api/workouts/:id", function(req, res) {

    db.Workout.findOneAndUpdate({_id: req.params.id},{$push:{exercises:req.body}}, (err,results) => {
        if(err){
            res.send(err);
        }
        console.log(results);
        res.json(results);
    });
});

module.exports = router;