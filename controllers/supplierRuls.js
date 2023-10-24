const { SupplierModel } = require("../models");

const createSupplierRules = async (req, res) => {
  try {
    const body = req.body;
    const createSupplierRule = await SupplierModel.create(body);
    res.status(201).send({ success: true, data: createSupplierRule });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error" + error });
  }
};

module.exports = { createSupplierRules };
