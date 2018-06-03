const express = require('express')
const router = express.Router()
const GameHistory = require('../../model/GameHistory/gameHistory.model').GameHistory

router.get('/', (req, res) => {
    res.json({ response: 'GET all questions' });
  });

  router.post('/', (req, res) => {
    res.json({
      response: 'Save a game records',
      body: req.body
    });
  });

module.exports = router;
