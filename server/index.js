const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const connectDB = require("./config/db");
const { MONGO_URL} = process.env;

dotenv.config();
connectDB();


app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());  
app.use("/", authRoute);



app.listen(8080, (req,res) => {

  res.send('Server is running');
});

// server is change
