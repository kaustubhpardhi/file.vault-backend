const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connection to mongodb
const uri =
  "mongodb://kaustubh:kaustubh786@ac-5xhog3b-shard-00-00.1ct2btc.mongodb.net:27017,ac-5xhog3b-shard-00-01.1ct2btc.mongodb.net:27017,ac-5xhog3b-shard-00-02.1ct2btc.mongodb.net:27017/?ssl=true&replicaSet=atlas-ove0jr-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to db");
  }
);
app.use("/", (req, res, next) => {
  res.send("file.vault's server");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
