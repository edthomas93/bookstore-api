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

const updateGenre = (id, genre, options, callback) => {
  const query = {_id: id};
  const update = {
    name: genre.name
  };
  genres.findOneAndUpdate(query, update, options, callback);
}

module.exports = {
  addGenre,
  getGenres,
  updateGenre
};