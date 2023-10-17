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
    const data = await Supplier.findAll()
    res.status(200).send(data)
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
    res.status(500).send({ success: false, message: "internal server error" + error });
  }
};

module.exports = { postSupplier, getSupplier };
