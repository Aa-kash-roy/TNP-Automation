const mongoose = require("mongoose");
const { Schema } = mongoose;

//TODO: LOOK INTO APPLICATION END TIME
const NewPlacement = new Schema({
    name: {
        type: String,
        required: true
    },
    ctc:{
        type: String,
        required: true
    },
    minCGPA:{
        type: Number,
        required: true
    },
    maxBacklogs:{
        type: Number,
        required: true
    },
    gender:{
        type: [String],
        required: true
    },
    role:{
        type: [String],
        required: true
    },
    eligibleYears:{
        type: [String],
        required: true
    },
    allowAll:{
        type: Boolean,
        required: true
    },
    applicationEndTime: {
        type: Date,
    }
})

module.exports = mongoose.model("newplacements", NewPlacement);
