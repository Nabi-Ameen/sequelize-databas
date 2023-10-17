const express = require('express')
const router = express.Router();
const supplier = require("./supplier")

router.use("/supplier", supplier)

module.exports = router