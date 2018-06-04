const express = require('express');
const app = express();

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/GAME_OF_DRONES'
const jsonParser = require('body-parser').json;

mongoose.connect(url);
const db = mongoose.connection;


db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`)
});
db.once('open', () => {
  console.log('DB connected successfully!')
});

const routes = require('./API/routes/routes')
//TODO: move
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(jsonParser())
app.use('/api', routes)

const port = process.env.port ||4200

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`)
});