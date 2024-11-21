const mongoose = require("mongoose");

// Define a schema and model
const gameRecordSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  date: { type: Date, required: true },
});

const GameRecord = mongoose.model("GameRecord", gameRecordSchema);

module.exports = GameRecord;
