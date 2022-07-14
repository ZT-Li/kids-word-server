const express = require("express");
const mongoose = require("mongoose");
const postRoute = require('./routes/postRoute');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv/config");


const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("server has connected!");
})

server.use('/api', postRoute);

mongoose.connect(process.env.DB_CONNECTION,
    () => console.log("connected!"));

server.listen(process.env.PORT || 5000);
