const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title of the workout is needed"]
    },
    reps:{
        type: Number,
        required: [true, "Number of reps is required"]
    },
    load:{
        type: Number,
        required: [true, "Load is required"]
    }
}, { timestamps: true})

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;