const mongoose = require('mongoose');

// genre schema
const genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const genres = mongoose.model('Genres', genreSchema);

const getGenres = (callback) => {
  genres.find(callback);
};

const addGenre = (genre, callback) => {
  genres.create(genre, callback);
};

module.exports = {
  getGenres,
  addGenre
};