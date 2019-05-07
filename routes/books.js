const express = require('express');
const router = express.Router();
const bookModel = require('../models/book');

router.get('/', (req, res) => {
  bookModel.getBooks((err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

router.get('/:_id', (req, res) => {
  bookModel.getBookById(req.params._id, (err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

router.post('/', (req, res) => {
  const book = req.body;  
  bookModel.addBook(book, (err, response) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    } else {
      res.status(200).json(response);
    };
  });
});

module.exports = router;