const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  license: {
    type: String
  },
  name: {
    type: String
  },
  gender:{
    type: String
  }
});

module.exports = mongoose.model("detail", detail);