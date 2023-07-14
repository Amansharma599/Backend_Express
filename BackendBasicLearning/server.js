// Step1: create a folder.
// step2: move into that folder.
// step3: npm init -y.
// step4: open folder using vscode.
// step5: npm i express.
// step6: create server.js.

// Server Instantiate
const express = require('express');
const app = express();


// Used to parse req.body in express.  --> put or post
const bodyParser = require('body-parser')

// Specifically Parse jJSON data and added to the request. body object
app.use(bodyParser.json());


// Activating the server on 3000 port.. 
app.listen(3000, () =>{
    console.log('server started at port no. 3000')
})


// Routes..
app.get('/', (req,res) => {
    res.send('Hello ji , Kesay ho Saray')
})


app.post('/api/cars',(req,res) => {
     const {name,brand} = req.body;
     console.log(name);
     console.log(brand);
     res.send('Car Submitted Succesfully')
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/carDatabase', {     // we can also use intent of localhost or 127.0.0.1..
useNewurlParser: true,
useUnifiedTopology: true
})

.then(() => {console.log("Connection successful")})
.catch((error) =>{console.log("Received an error")})