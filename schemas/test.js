const mongoose = require("mongoose");

const evaluateTestSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("evaluateTest", evaluateTestSchema);
