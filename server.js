const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8000;

const routes = require('./routes/index');
// JSON.stringify

// const dataLoad = {}
// const MovieLib = new Schema(dataLoad)

// MovieLib.save((err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Data is saved!!!")
// })

//HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);

dotenv.config({ path: './config/config.env' });
connectDB();


app.listen(PORT, console.log(`Server is starting at ${PORT}`));