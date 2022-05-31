const express = require("express");
const router = express.Router();

const {
  evaluateTopic,
  getEvaluateTopics,
} = require("../controllers/evaluateTopic.js");

const {
  evaluatePresentation,
} = require("../controllers/evaluatePresentation.js");

const { addTest, getTest } = require("../controllers/test.js");

router.route("/topic").post(evaluateTopic);
router.route("/topics").get(getEvaluateTopics);
router.route("/presentation").post(evaluatePresentation);
router.route("/test").post(addTest);
router.route("/tests").get(getTest);

module.exports = router;
