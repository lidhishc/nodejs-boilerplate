const express = require("express");
const app = express();
var cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

module.exports = app;
