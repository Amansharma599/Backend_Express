const express = require('express');
const app = express();

// Load config from  env file..

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


// Import routes for TODO API..
const todoRoutes = require("./routes/todos")

// mount the todo api routes.
app.use("/api/v1", todoRoutes);

// Start Server
app.listen(PORT,() => {
    console.log('Server Started Successfully at $(PORT)');
})

// connect to the database.
const dbConnect = require("./config/dataBase")
dbConnect();

// default Route
app.use("/", (req,res)=> {
    res.send('<h1> This is HomePage Baby</h1>');
})


