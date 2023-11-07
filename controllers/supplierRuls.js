const SupplierModel = require("../models/supplierRulsModel");

const getSupplierRuls = async (req, res) => {
  try {
    const supplierRules = await SupplierModel.findAll();
    res.status(201).json(supplierRules);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error" + error });
  }
};

const createSupplierRules = async (req, res) => {
  try {
    const suppBody = req.body;
    let uploadimage = null;
    if (req.file) {
      uploadimage = req.file.filename;
    } else {
      return res
        .status(400)
        .json({ success: false, message: "image is required" });
    }

    const createSupplierRule = await SupplierModel.create({
      ...suppBody,
      image: uploadimage,
    });

    res.status(201).json({ success: true, data: createSupplierRule });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { createSupplierRules, getSupplierRuls };
