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
    }],
    numExercises: {
        type: Number,
        default: 0
    },
    totalDuration : {
        type:Number,
        default: 0
    }
});

// workoutSchema.methods.totalDuration = function() {
//     let sum = 0;
//     this.exercises.forEach(element => {
//         sum += element.duration
//     });
//     return sum;
// };

// workoutSchema.methods.numExercises = function() {
//     console.log("test");
//     return this.exercises.length;
// };

workoutSchema.pre("save", function(){
    this.numExercises = this.exercises.length;
})

const Transaction = mongoose.model("Workout",workoutSchema);

module.exports = Transaction;