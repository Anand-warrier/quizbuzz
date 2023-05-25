const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");

const app = new express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://liyafrancis:Liya2003@cluster0.acxsvrm.mongodb.net/SampleDB?retryWrites=true&w=majority');
const connection = mongoose.connection

connection.once('open',()=>{
    console.log('MongoDB connection established successfully')
})
app.listen(8000,()=>{
  console.log("started server on 8000")
});

let Details = require("./tag.model");

// app.get('/api', (req, res) => {
//   res.send('Hello, World!');
// });
// Define the API route

app.post('/tags',async (req, res) => {
  let person = await new Details(req.body)
  person.save().then((_)=>{res.json('data saved');
})
.catch((_)=>{
  res.json('not saved');
});

  
});

