const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const db = require("./config/mongoose");


app.use(express.json());//package used in server(middleware function)
app.use("/", require('./routes'));  //it by default looks for index.js file only in routes folder


//start server
app.listen(port, () => console.log("server started", port));