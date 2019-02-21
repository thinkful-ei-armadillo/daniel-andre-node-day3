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


// build handler functions here

//users must be able to search for movies by GENRE, COUNTRY, or AVG_VOTE
//endpoint is GET /movie
// search for name, genre, country are all standard query string parameters, should be case INsensitive
// search for average vote must return all movies greater than or equal to the inputted number

// build gets here



//listening below

app.listen(8000, () => {
  console.log('Server listening at http://localhost:8000');
});
