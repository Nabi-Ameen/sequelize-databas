const SupplierModel = require("../models/supplierRulsModel");

const createSupplierRules = async (req, res) => {
  try {
    const suppBody = req.body
      const uploadimage =req.file?.filename
      console.log("testing",uploadimage)
    const createSupplierRule = await SupplierModel.create({...suppBody,image:uploadimage});
    res.status(201).json({ success: true, data: createSupplierRule });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error" + error });
  }
};

module.exports = { createSupplierRules };
