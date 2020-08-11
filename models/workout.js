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
      required: "Enter a type of exercise"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for exercise"
    },
    duration: {
      type: Number,
      required: "Enter a duration for the exercise"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;