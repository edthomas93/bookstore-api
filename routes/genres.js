const express = require('express');
const router = express.Router();
const genreModel = require('../models/genre');

router.get('/', (req, res) => {
  genreModel.getGenres((err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

router.post('/', (req, res) => {
  const genre = req.body;  
  genreModel.addGenre(genre, (err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

module.exports = router;