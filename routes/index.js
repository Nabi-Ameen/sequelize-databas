const express = require("express");
const router = express.Router();
const supplier = require("./supplier");
const supplierRule = require("./supplierRuls");
const flight_Group_Route = require("./flight_Group_Route");

router.use("/supplier", supplier);
router.use("/supplierRuls", supplierRule); // Use Multer middleware for file upload
router.use("/fltgroup", flight_Group_Route);

module.exports = router;
