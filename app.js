const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const genresRoutes = require('./routes/genres');
const booksRoutes = require('./routes/books');

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
app.use(bodyParser.json());
app.use('/api/genres', genresRoutes);
app.use('/api/books', booksRoutes);

app.get('/', (req, res) => {
  res.send('Please use /api/books or /api/genres');
});

// run server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));