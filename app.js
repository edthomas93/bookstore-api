const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

// run server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));