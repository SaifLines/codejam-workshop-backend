const express = require("express");
const {
  createGameRecord,
  getGameRecords,
} = require("../controllers/GameRecord");

const gameRecordRoutes = express.Router();

gameRecordRoutes.post("/", createGameRecord);
gameRecordRoutes.get("/", getGameRecords);

module.exports = gameRecordRoutes;
