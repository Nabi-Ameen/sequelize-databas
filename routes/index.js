const express = require("express");
const router = express.Router();
const multer = require("multer"); // Import Multer
const supplier = require("./supplier");
const supplierRule = require("./supplierRuls");


router.use("/supplier", supplier);
router.use("/supplierRuls", supplierRule); // Use Multer middleware for file upload

module.exports = router;
