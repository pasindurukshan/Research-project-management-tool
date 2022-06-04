const asyncHandler = require("express-async-handler");
const Topic = require("../schemas/evaluateTopic");

const evaluateTopic = asyncHandler(async (req, res) => {
  console.log("Add a Evaluate");

  const { name, topic, grp, reason, date, status, state } = req.body;

  const topix = await Topic.create({
    name,
    topic,
    grp,
    reason,
    date,
    status,
    state,
  });
});

const getEvaluateTopicById = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (topic) {
    res.json(topic);
  } else {
    res.status(404);
    throw new Error("Topic not found");
  }
});

const getEvaluateTopics = asyncHandler(async (req, res) => {
  const topics = await Topic.find({});
  res.json(topics);
});

const updateEvaluateTopic = asyncHandler(async (req, res) => {
  const { reason, date, status } = req.body;

  const topic = await Topic.findById(req.params.id);

  if (topic) {
    topic.reason = reason;
    topic.date = date;
    topic.status = status;

    const updatedEvaluateTopic = await topic.save();
    res.json(updatedEvaluateTopic);
  } else {
    res.status(404);
    throw new Error("Evaluate not found");
  }
});

const deleteEvaluateTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (topic) {
    await topic.remove();
    res.json({ message: "Evaluate removed" });
  } else {
    res.status(404);
    throw new Error("Evaluate not found");
  }
});

exports.evaluateTopic = evaluateTopic;
exports.getEvaluateTopics = getEvaluateTopics;
exports.updateEvaluateTopic = updateEvaluateTopic;
exports.deleteEvaluateTopic = deleteEvaluateTopic;
exports.getEvaluateTopicById = getEvaluateTopicById;
