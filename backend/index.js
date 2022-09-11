const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());
const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

let detail = require("./model");
router.route("/getData").get(function(req, res) {
    detail.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });