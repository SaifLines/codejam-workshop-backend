const express = require("express"); // Import Express
const mongoose = require("mongoose");
const gameRecordRoutes = require("./routes/GameRecord");
const cors = require("cors");

const app = express(); // Create an instance of Express
const port = 3000; // Define a port number

const db_user_password = "do2cx2Tuylr7ENhE";
const db_username = "saif2";
const db_name = "trivia4";
const MONGO_URI = `mongodb+srv://${db_username}:${db_user_password}@codejam.ojoe5.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=CodeJam`;

//CONNECT TO DB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    // LISTEN
    app.listen(port, () => {
      console.log(
        `connected to DB & Server is running on http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use("/api/GameRecord", gameRecordRoutes);

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
