const asyncHandler = require("express-async-handler");
const Test = require("../schemas/test");

const addTest = asyncHandler(async (req, res) => {
  console.log("Add a Test");

  const { topic, grp } = req.body;

  const test = await Test.create({
    topic,
    grp,
  });
});
const getTestById = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id);

  if (test) {
    res.json(test);
  } else {
    res.status(404);
    throw new Error("Presentation not found");
  }
});
const getTest = asyncHandler(async (req, res) => {
  const tests = await Test.find({});
  res.json(tests);
});

const delTest = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id);

  if (test) {
    await test.remove();
    res.json({ message: "Test removed" });
  } else {
    res.status(404);
    throw new Error("Test not found");
  }
});

exports.addTest = addTest;
exports.getTest = getTest;
exports.delTest = delTest;
exports.getTestById = getTestById;
