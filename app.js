const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { compare } = require('bcryptjs');

const db = require('./config/keys').mongoURI;
mongoose
    .connect( db,{ useNewUrlParser: true })
    .then( () => console.log("connected to MongoDB successfully"))
    .catch( err => console.log(err));


app.get('/', ( req, res) => res.send("hello wold"));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running in port ${port}`));