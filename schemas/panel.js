const mongoose = require("mongoose");

const Panel = new mongoose.Schema({
  name: { type: String, required: true },
  topic: { type: String, required: true },
  grp: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Panel", Panel);
