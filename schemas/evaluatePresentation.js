const mongoose = require("mongoose");

const evaluatePresentationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stp1: { type: Number, required: true },
  stp2: { type: Number, required: true },
  stp3: { type: Number, required: true },
  stp4: { type: Number, required: true },
  total: { type: Number },
  date: { type: String, required: true },
});

module.exports = mongoose.model(
  "evaluatePresentation",
  evaluatePresentationSchema
);
