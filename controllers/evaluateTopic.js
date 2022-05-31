const asyncHandler = require("express-async-handler");
const Topic = require("../schemas/evaluateTopic");

const evaluateTopic = asyncHandler(async (req, res) => {
  console.log("Add a Evaluate");

  const { name, reason, date, status } = req.body;

  const topic = await Topic.create({
    name,
    reason,
    date,
    status,
  });
});

const getEvaluateTopics = asyncHandler(async (req, res) => {
  const topics = await Topic.find({});
  res.json(topics);
});

exports.evaluateTopic = evaluateTopic;
exports.getEvaluateTopics = getEvaluateTopics;
