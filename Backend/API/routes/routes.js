const express = require('express')
const router = express.Router()
const gameHistory = require('./GameHistory/gameHistory.routes')

router.use('/gameOfDrones', gameHistory)

module.exports = router