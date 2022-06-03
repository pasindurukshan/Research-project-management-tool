const express = require("express");
const router = express.Router();

const {
  evaluateTopic,
  getEvaluateTopics,
  updateEvaluateTopic,
  deleteEvaluateTopic,
  getEvaluateTopicById,
} = require("../controllers/evaluateTopic.js");

const {
  evaluatePresentation,
  getEvaluatePresentation,
  updateEvaluatePresentation,
  getEvaluatePresentationById,
} = require("../controllers/evaluatePresentation.js");

const { addTest, getTest, delTest } = require("../controllers/test.js");

router.route("/topic").post(evaluateTopic);
router.route("/topics").get(getEvaluateTopics);
router.route("/topic/:id").get(getEvaluateTopicById);
router.route("/topic/:id").put(updateEvaluateTopic);
router.route("/topic/:id").delete(deleteEvaluateTopic);
router.route("/presentation").post(evaluatePresentation);
router.route("/presentations").get(getEvaluatePresentation);
router.route("/presentation/:id").get(getEvaluatePresentationById);

router.route("/presentation/:id").put(updateEvaluatePresentation);

router.route("/test").post(addTest);
router.route("/tests").get(getTest);
router.route("/test/:id").delete(delTest);

module.exports = router;
