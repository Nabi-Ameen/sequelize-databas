const express = require("express");
const router = express.Router();

router.post("/post", async (req, res) => {
  return fltCtrl.createflightGroup(req, res);
});
