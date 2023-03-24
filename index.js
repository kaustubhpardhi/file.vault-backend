const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8081;

app.use(cors());

app.use("/", (req, res, next) => {
  res.send("file.vault's server");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
