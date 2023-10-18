const Supplier = require("../models/supplier");

const createSupplier = async (req, res) => {
  try {
    const supplierData = req.body;
    const createdSupplier = await Supplier.create(supplierData);
    res.status(201).json({ success: true, data: createdSupplier });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error" + error });
  }
};

const getSingleSupplier = async (req, res) => {
  try {
    const id = req.params.id;
    const supplier = await Supplier.findByPk(id);
    if (supplier) {
      res.status(200).json({ success: true, data: supplier });
    } else {
      res.status(404).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "internal server error" + error });
  }
};

const updataSupplier = async (req, res) => {
  try {
    const id = req.params.id; // Assuming you have the ID of the record to update
    const updatedData = req.body; // The data you want to update

    // Use the `update` method to update the record based on the ID
    const rowsUpdated = await Supplier.update(updatedData, {
      where: { id: id },
    });

    if (rowsUpdated > 0) {
      // If at least one record was updated, it was successful
      res
        .status(200)
        .json({ success: true, message: "Record updated successfully" });
    } else {
      // If no records were updated (ID not found), send a not found response
      res.status(404).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" + error });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const id = req.params.id;
    const supplier = await Supplier.destroy({ where: { id: id } });
    if (supplier) {
      res.status(200).json({ success: true, message: "record deleted" });
    } else {
      res.status(404).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "internal server error" + error });
  }
};

module.exports = {
  createSupplier,
  getSuppliers,
  getSingleSupplier,
  updataSupplier,
  deleteSupplier,
};
