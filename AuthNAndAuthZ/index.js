const express = require('express');
const app = express();

// Load config from  env file..

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


// Import routes for Blog API..
const user = require("./routes/user") 

// mount the Blog api routes.
app.use("/api/v1", user);

// Start Server
app.listen(PORT,() => {
    console.log(` App is Listening at ${PORT}`);
})

// connect to the database.
 require("./config/dataBase").connect();


// default Route
app.use("/", (req,res)=> {
    res.send('<h1> This is My HomePage Baby</h1>');
})


