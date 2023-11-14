const express = require("express");
const router = express.Router();
const { suppRuls } = require("../controllers");
const { upload } = require("../modules/multer_uploads");

router.get("/suplierget", async (req, res) => {
  return suppRuls.getSupplierRuls(req, res);
});

router.post("/suplierpost", upload.single("image"), async (req, res) => {
  return suppRuls.createSupplierRules(req, res);
});

router.get("/suplierget/:id", async (req, res) => {
  return suppRuls.getSingleSupplierRule(req, res);
});
router.patch(
  "/updatesupplier/:id",
  upload.single("image"),
  async (req, res) => {
    return suppRuls.updateSingleSupplierRule(req, res);
  }
);

router.delete("/delete/:id", async (req, res) => {
  return suppRuls.deleteSupplierRule(req, res);
});

module.exports = router;
