const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "must select exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "please select exercise name"
        },
        duration: {
            type: Number,
            required: "enter exercise duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

workoutSchema.methods.totalDuration = function(cb) {
    let sum = 0;
    for(let i=0; i<this.exercises.length; i++){
        sum += this.exercises[i].duration;
    }
    cb(sum);
};

workoutSchema.methods.numExercises = function() {
    return this.exercises.length;
};



const Transaction = mongoose.model("Workout",workoutSchema);

module.exports = Transaction;