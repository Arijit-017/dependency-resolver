
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({

tasks:[String],

dependencies:[[String]],

executionOrder:[String]

});

module.exports = mongoose.model("Job",JobSchema);
