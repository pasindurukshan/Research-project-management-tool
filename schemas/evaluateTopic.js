const mongoose = require("mongoose");

const evaluateTopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  topic: { type: String, required: true },
  grp: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model("evaluateTopic", evaluateTopicSchema);
