
const express = require("express");
const mongoose = require("mongoose");
const resolver = require("./resolver");
const Job = require("../models/jobModel");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/dependency")
.then(()=>console.log("MongoDB Connected"));

app.post("/resolve", async(req,res)=>{

    const {tasks,dependencies}=req.body;

    const order = resolver.resolve(tasks,dependencies);

    const job = new Job({
        tasks,
        dependencies,
        executionOrder:order
    });

    await job.save();

    res.json({
        executionOrder:order
    });

});

app.get("/jobs", async (req,res)=>{
    
    const jobs = await Job.find()

    res.json(jobs)

})

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
