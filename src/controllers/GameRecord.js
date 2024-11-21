const GameRecord = require("../models/GameRecordModel");

async function createGameRecord(request, response) {
  const { score } = request.body;

  GameRecord.create({
    score: score,
    date: Date.now(),
  })
    .then((savedGameRecord) => response.status(201).send(savedGameRecord))
    .catch((error) => response.status(400).send(error.message));
}

async function getGameRecords(request, response) {
  GameRecord.find()
    .then((records) => response.status(200).json(records))
    .catch((err) => response.status(400).send(err.message));
}

module.exports = { createGameRecord, getGameRecords };
