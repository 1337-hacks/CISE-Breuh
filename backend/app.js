// app.js

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 7000;

mongoose = require("mongoose");
mongoose.connect("mongodb+srv://elijah2:mongodbcoolpassword@seper-db.f19fc.mongodb.net/seper_database?retryWrites=true&w=majority", {useNewUrlParser: true});

//import articleModel from "./models/articleModel";

app.use(cors());
app.use(express.json());
app.use(require("./routes/articles"));

//get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {

  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});