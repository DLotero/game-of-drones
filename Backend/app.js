const express = require('express');
//const routes = require('./routes');
const app = express();

const jsonParser = require('body-parser').json;
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/GAME_OF_DRONES'

mongoose.connect(url);
const db = mongoose.connection;

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});

app.use(jsonParser());

const port = process.env.port ||42000;

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});