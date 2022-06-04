const mongoose = require("mongoose");

const evaluateTestSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  grp: { type: String, required: true },
});

module.exports = mongoose.model("evaluateTest", evaluateTestSchema);
