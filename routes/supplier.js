const express = require("express");
const router = express.Router();
const { suppCtrl } = require("../controllers");

router.get("/get", async (req, res) => {
  return suppCtrl.getSupplier(req, res);
});

router.post("/post", async (req, res) => {
  return suppCtrl.postSupplier(req, res);
});

router.get("/get/:id", async (req, res) => {
  return suppCtrl.getSingleSupplier(req, res);
});

router.patch("/update/:id", async (req, res) => {
  return suppCtrl.updataSingleSupplier(req, res);
});

module.exports = router;
