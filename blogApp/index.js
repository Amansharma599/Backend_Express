const express = require('express');
const app = express();

// Load config from  env file..

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(express.json());


// Import routes for Blog API..
const blog = require("./routes/blog") 

// mount the Blog api routes.
app.use("/api/v1", blog);

// Start Server
app.listen(PORT,() => {
    console.log(`Blog App Started Successfully at ${PORT}`);
})

// connect to the database.
const connectWithDb = require("./config/dataBase")
connectWithDb();

// default Route
app.use("/", (req,res)=> {
    res.send('<h1> This is My HomePage Baby</h1>');
})


