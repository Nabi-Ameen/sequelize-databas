const express = require("express");
const router = express.Router();
const multer = require("multer"); // Import Multer
const supplier = require("./supplier");
const supplierRule = require("./supplierRuls");
const {upload} = require('../modules/multer_uploads');

router.use("/supplier", supplier);
router.use("/supplierRuls", upload.single('image'), supplierRule); // Use Multer middleware for file upload

module.exports = router;
