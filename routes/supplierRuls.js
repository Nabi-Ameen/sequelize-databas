const express = require("express");
const router = express.Router();
const { suppRuls } = require("../controllers");
const {upload} = require('../modules/multer_uploads');

router.get("/suplierget", async(req, res)=>{
  return suppRuls.getSupplierRuls(req, res)
})

router.post("/suplierpost",upload.single('image'), async (req, res) => {
  return suppRuls.createSupplierRules(req, res);
});



module.exports = router;
