const express = require("express");
const router = express.Router();
const supplier = require("./supplier");
const supplierRule = require("./supplierRuls");
const flight = require("./flight");

router.use("/supplier", supplier);
router.use("/supplierRuls", supplierRule); // Use Multer middleware for file upload
router.use("/flight", flight);

module.exports = router;
