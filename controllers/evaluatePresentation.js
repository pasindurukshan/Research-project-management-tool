const asyncHandler = require("express-async-handler");
const Presentation = require("../schemas/evaluatePresentation");

const evaluatePresentation = asyncHandler(async (req, res) => {
  console.log("Add a Evaluate");

  const { name, topic, grp, stp1, stp3, stp2, stp4, total, date } = req.body;

  const presentation = await Presentation.create({
    name,
    topic,
    grp,
    stp1,
    stp2,
    stp3,
    stp4,
    total,
    date,
  });
});
const getEvaluatePresentationById = asyncHandler(async (req, res) => {
  const presentation = await Presentation.findById(req.params.id);

  if (presentation) {
    res.json(presentation);
  } else {
    res.status(404);
    throw new Error("Presentation not found");
  }
});
const getEvaluatePresentation = asyncHandler(async (req, res) => {
  const presentation = await Presentation.find({});
  res.json(presentation);
});

const updateEvaluatePresentation = asyncHandler(async (req, res) => {
  const { stp1, stp3, stp2, stp4, date } = req.body;

  const presentation = await Presentation.findById(req.params.id);

  if (presentation) {
    presentation.stp1 = stp1;
    presentation.stp2 = stp2;
    presentation.stp3 = stp3;
    presentation.stp4 = stp4;
    presentation.date = date;

    const updatedEvaluatePresentation = await presentation.save();
    res.json(updatedEvaluatePresentation);
  } else {
    res.status(404);
    throw new Error("Evaluate not found");
  }
});
exports.evaluatePresentation = evaluatePresentation;
exports.getEvaluatePresentation = getEvaluatePresentation;
exports.updateEvaluatePresentation = updateEvaluatePresentation;
exports.getEvaluatePresentationById = getEvaluatePresentationById;
