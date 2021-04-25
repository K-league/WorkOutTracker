const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workOutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "enter a name"
        },
        duration: {
            type: Number,
            required: "enter a duration"
        },
        weight: {
            type: Number
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
})
const Workout = mongoose.model("workout", workOutSchema)
module.exports = Workout;