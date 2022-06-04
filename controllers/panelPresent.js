const asyncHandler = require("express-async-handler");
const Panel = require("../schemas/panelPresent");

const addPPanel = asyncHandler(async (req, res) => {
  console.log("Add a PanelMember");

  const { name, topic, grp, date } = req.body;

  const panel = await Panel.create({
    name,
    topic,
    grp,
    date,
  });
});
const getPPanel = asyncHandler(async (req, res) => {
  const panels = await Panel.find({});
  res.json(panels);
});

const delPPanel = asyncHandler(async (req, res) => {
  const panel = await Panel.findById(req.params.id);

  if (panel) {
    await panel.remove();
    res.json({ message: "Panel removed" });
  } else {
    res.status(404);
    throw new Error("Panel not found");
  }
});

const getPPanelById = asyncHandler(async (req, res) => {
  const panel = await Panel.findById(req.params.id);

  if (panel) {
    res.json(panel);
  } else {
    res.status(404);
    throw new Error("Presentation not found");
  }
});

exports.addPPanel = addPPanel;
exports.getPPanel = getPPanel;
exports.delPPanel = delPPanel;
exports.getPPanelById = getPPanelById;
