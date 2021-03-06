const mongoose = require('mongoose');

// book schema
const bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  pages:{
    type: Number,
    required: true
  },
  image_url:{
    type: String,
    required: true
  },
  buy_url:{
    type: String,
    required: true
  }
});

const books = mongoose.model('Books', bookSchema);

const getBooks = (callback) => {
  books.find(callback);
};

const getBookById = (id, callback) => {
  books.findById(id, callback);
};

const addBook = (book, callback) => {
  books.create(book, callback);
};

module.exports = {
  addBook,
  getBooks,
  getBookById
};