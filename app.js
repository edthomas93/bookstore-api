const express = require('express');
const app = express();
const mongoose = require('mongoose');

const genreModel = require('./models/genre');
const bookModel = require('./models/book');

// DB Config
const db = require('./config/key').mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
  });

// routes

app.get('/', (req, res) => {
  res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req, res) => {
  genreModel.getGenres((err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

app.get('/api/books', (req, res) => {
  bookModel.getBooks((err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

// run server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));