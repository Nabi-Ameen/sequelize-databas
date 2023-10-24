const express = require("express");
const router = express.Router();
const supplier = require("./supplier");
const supplierRule = require("./supplierRuls");

router.use("/supplier", supplier);
router.use("/supplierRuls", supplierRule);

module.exports = router;
