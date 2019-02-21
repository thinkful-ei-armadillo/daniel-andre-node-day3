'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const MOVIES = require('./movies.json');

const app = express();

console.log(process.env.API_TOKEN);

// uses here
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

// must validate API token from ENV and auth header

app.use( function validate(req, res, next) {
  const apiToken = process.env.API_TOKEN;

  // const authToken = req.get('Authorization');

  // !authToken || authToken.split(' ')[1] !== 

  if (!apiToken) {
    return res.status(401).json({error: 'UNAUTHORIZED'});
  }
  next();
});

// build handler functions here

// users must be able to search for movies by GENRE, COUNTRY, or AVG_VOTE
//  endpoint is GET /movie
//  search for name, genre, country are all standard query string parameters, should be case INsensitive
//  search for average vote must return all movies greater than or equal to the inputted number

function handleGetMovies(req,res) {
  let response = MOVIES.movies;
  const name = req.query.title;
  const genre = req.query.genre;
  const country = req.query.country;
  const rating = req.query.rating;

  if (name) {
    response = response.filter(film => {
      return film.film_title.toLowerCase().includes(name.toLowerCase());
    });
  }
  if (genre) {
    response = response.filter(film => {
      return film.genre.toLowerCase().includes(genre.toLowerCase());
    });
  }
  if (country) {
    response = response.filter(film => {
      return film.country.toLowerCase().includes(country.toLowerCase());
    });
  }
  if (rating) {
    response = response.filter(film => {
      return film.avg_vote >= parseInt(rating);
    });
  }

  res.send(response);
}

// build gets here

app.get('/movies', handleGetMovies);

//listening below

app.listen(8000, () => {
  console.log('Server listening at http://localhost:8000');
});
