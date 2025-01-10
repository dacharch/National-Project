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


app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', 'https://national-project-frontend.vercel.app'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

  next();

});

app.use(cookieParser());
app.use(express.json());  
app.use("/", authRoute);


app.get('/',(req,res)=>{
   res.send("Server is Running");
})

app.listen(8080, () => {
     console.log("Server is Running")
});


