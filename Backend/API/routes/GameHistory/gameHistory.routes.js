const express = require('express')
const router = express.Router()
const GameHistory = require('../../model/GameHistory/gameHistory.model').GameHistory


// need some error handling yo

router.get('/history', (req, res) => {
  GameHistory.find({}).then(record => {
    res.json(record)
  })
});

router.post('/history', (req, res) => {
  GameHistory.create({
    roundsNum: req.body.roundsNum,
    winner: req.body.winner,
    otherPlayer: req.body.otherPlayer,
    createdDate: req.body.createdDate
  }).then(record => {
    res.json(record)
  })
});

module.exports = router;
