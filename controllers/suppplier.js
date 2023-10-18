const Supplier = require("../models/supplier");

const postSupplier = async (req, res) => {
  try {
    const supData = req.body;
    await Supplier.create(supData)
      .then((createdata) => {
        res
          .status(200)
          .send({ success: true, message: "Data Created successfully" });
      })
      .catch((err) => {
        res.status(400).send({
          success: false,
          message: "something went wrong.please try again!",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

const getSupplier = async (req, res) => {
  try {
    const data = await Supplier.findAll();
    res.status(200).send(data);
    // .then((getData)=>{
    //     res.status(200).send(getData)
    // })
    // .catch(()=>{
    //     res.status(400).send({
    //         success: false,
    //         message: "something went wrong!"
    //     })
    // })
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "internal server error" + error });
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

const updataSingleSupplier = async (req, res) => {
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

module.exports = {
  postSupplier,
  getSupplier,
  getSingleSupplier,
  updataSingleSupplier,
};
