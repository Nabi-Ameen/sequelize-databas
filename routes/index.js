const express = require('express')
const router = express.Router();
const supplier = require("./supplier")
// const baseUrl = 'localhost://'
router.use("/supplier", supplier)

module.exports = router