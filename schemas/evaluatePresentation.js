const mongoose = require("mongoose");

const evaluatePresentationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model(
  "evaluatePresentation",
  evaluatePresentationSchema
);
