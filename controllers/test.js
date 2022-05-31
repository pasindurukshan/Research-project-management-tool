const asyncHandler = require("express-async-handler");
const Test = require("../schemas/test");

const addTest = asyncHandler(async (req, res) => {
  console.log("Add a Test");

  const { name } = req.body;

  const test = await Test.create({
    name,
  });
});

const getTest = asyncHandler(async (req, res) => {
  const tests = await Test.find({});
  res.json(tests);
});

exports.addTest = addTest;
exports.getTest = getTest;
