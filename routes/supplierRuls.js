const express = require("express");
const router = express.Router();
const { suppRules } = require("../controllers");

router.post("/post", async (req, res) => {
  return suppRules.createSupplierRuls(req, res);
});
