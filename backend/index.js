const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

// db connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, () => console.log("MongoDb has been connected successfully"));

//server connection
app.listen(process.env.PORT, () => console.log("server has been started successfully"));