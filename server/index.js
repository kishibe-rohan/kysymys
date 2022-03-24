const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

//Middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());

//Start Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
