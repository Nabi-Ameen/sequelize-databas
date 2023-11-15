const express = require("express");
const { flt_Group_Ctrl } = require("../controllers");
const router = express.Router();

router.get("/get", async (req, res) => {
  return flt_Group_Ctrl.getALLFlightGroup(req, res);
});

router.post("/post", async (req, res) => {
  return flt_Group_Ctrl.createFlightGroup(req, res);
});

module.exports = router;
