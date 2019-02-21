'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const MOVIES = require('./movies.json');

const app = express();

console.log(process.env.API_TOKEN);

//uses here
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

// validate API token from ENV and auth header
app.use(function validateBearerToken(req, res, next) {

  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');

  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }

  // move to the next middleware
  next();
});

// build handler functions here


// build gets here



//listening below

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
