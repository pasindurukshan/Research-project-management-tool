const asyncHandler = require("express-async-handler");
const Presentation = require("../schemas/evaluatePresentation");

const evaluatePresentation = asyncHandler(async (req, res) => {
  console.log("Add a Evaluate");

  const { name, reason, date, status, rating } = req.body;

  const presentation = await Presentation.create({
    name,
    reason,
    date,
    status,
    rating,
  });
});

exports.evaluatePresentation = evaluatePresentation;
