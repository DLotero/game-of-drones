const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameHistory = new Schema({
    roundsNum: Number,
    winner: String,
    otherPlayer: String,
    createdDate: { type:Date, default: Date.now}
})

module.exports.GameHistory = mongoose.model('GameHistory', GameHistory)
