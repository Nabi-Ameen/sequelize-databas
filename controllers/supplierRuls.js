const SupplierModel = require("../models/supplierRulsModel");
const fs = require("fs");

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
    const validateImage = (req, res, next) => {
      if (req.file) {
        const allowedExtention = ["jpg", "png", "jpeg"];
        const fileExtenion = req.file.mimetype.split("/")[1];
        if (allowedExtention.includes(fileExtenion)) {
          return next();
        } else {
          return res.status(400).json({
            success: false,
            message: "Only PNG and JPG images are allowed.",
          });
        }
      }
      return next();
    };

    validateImage(req, res, async () => {
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

      res.status(201).json({
        success: true,
        message: "Supplier rule created successfully",
        data: createSupplierRule,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getSingleSupplierRule = async (req, res) => {
  try {
    const id = req.params.id;
    const singleSupplierRule = await SupplierModel.findByPk(id);
    if (singleSupplierRule) {
      res.status(200).json({ success: true, data: singleSupplierRule });
    } else {
      res.status(400).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "internal server err" + error });
  }
};

const updateSingleSupplierRule = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const oldimageurl = await SupplierModel.findOne({ where: { id: id } });
    if (req.file) {
      uploadimage = req.file.filename;
    } else {
      return res
        .status(400)
        .json({ success: false, message: "image is required" });
    }
    if (oldimageurl && oldimageurl != undefined) {
      const path = `../uploads/${oldimageurl}`;
      fs.unlink(path, (err) => {
        console.log("Error:", err);
      });
    }
    const rowsUpdated = await SupplierModel.update(
      { ...body, image: uploadimage },
      { where: { id: id } }
    );

    if (rowsUpdated) {
      res
        .status(200)
        .json({ success: true, message: "Record updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" + error });
  }
};

const deleteSupplierRule = async (req, res) => {
  try {
    const id = req.params.id;
    const supplierRule = await SupplierModel.destroy({ where: { id: id } });
    if (supplierRule) {
      res.status(200).json({ success: true, message: "record deleted" });
    } else {
      res.status(200).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error" + error });
  }
};

module.exports = {
  createSupplierRules,
  getSupplierRuls,
  getSingleSupplierRule,
  updateSingleSupplierRule,
  deleteSupplierRule,
};
