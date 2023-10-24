const express = require("express");
const router = express.Router();
const createSupplierRules = require("../controllers/supplierRuls");

router.post("/post", async (req, res) => {
  return createSupplierRules(req, res);
});
