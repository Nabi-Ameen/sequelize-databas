const express = require("express");
const router = express.Router();
const { suppCtrl } = require("../controllers");

router.get("/get", async (req, res) => {
  return suppCtrl.getSuppliers(req, res);
});

router.post("/post", async (req, res) => {
  return suppCtrl.createSupplier(req, res);
});

router.get("/get/:id", async (req, res) => {
  return suppCtrl.getSingleSupplier(req, res);
});

router.patch("/update/:id", async (req, res) => {
  return suppCtrl.updataSupplier(req, res);
});

router.delete("/delete/:id", async (req, res) => {
  return suppCtrl.deleteSupplier(req, res);
});

module.exports = router;
