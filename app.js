const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const mainRouter = require("./routes/main");
const gamesRouter = require("./routes/games");
const app = express();

app.listen(3000, () => {
  console.log("3000 port has been started");
});
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRouter, gamesRouter);
