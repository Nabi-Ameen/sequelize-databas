const express = require("express");
const router = express.Router();
const { suppRuls } = require("../controllers");

router.post("/suplierpost", async (req, res) => {
  return suppRuls.createSupplierRules(req, res);
});

module.exports = router;
