const express = require("express");
const router = express.Router();

const {
  addPanel,
  getPanel,
  delPanel,
  getPanelById,
} = require("../controllers/panel.js");
const {
  addPPanel,
  getPPanel,
  delPPanel,
  getPPanelById,
} = require("../controllers/panelPresent.js");

router.route("/panel").post(addPanel);
router.route("/panels").get(getPanel);
router.route("/panel/:id").delete(delPanel);
router.route("/panel/:id").get(getPanelById);

router.route("/panelp").post(addPPanel);
router.route("/panelps").get(getPPanel);
router.route("/panelp/:id").delete(delPPanel);
router.route("/panelp/:id").get(getPPanelById);

module.exports = router;
