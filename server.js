/* eslint-disable quotes */
"use strict";
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const helmet = require('helmet');
const MOVIES = require('./movies.json');

const app = express();

//uses here
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

console.log(process.env.API_TOKEN);

// build handler functions here


// build gets here



//listening below

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});