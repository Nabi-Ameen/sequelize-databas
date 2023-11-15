// const { flightGroup, Passanger, Flight } = require("../models");
const flightGroup = require("../models/flight_group");
const passanger = require("../models/passanger");
const flight = require("../models/flight");

const getALLFlightGroup = async (req, res) => {
  try {
    const forms = await flightGroup.findAll({
      include: [{ model: passanger }, { model: flight }],
    });

    res.status(200).json({ data: forms });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

const createFlightGroup = async (req, res) => {
  try {
    const { total_seats, select_Supp, group_type, pnr, passanger, flight } =
      req.body;

    // Create OneToManyForm
    const createdForm = await flightGroup.create({
      total_seats,
      select_Supp,
      group_type,
      pnr,
    });

    await passanger.map(async (pass) => {
      await Passanger.create({
        passangerType: pass.passangerType,
        price_passanger: pass.price_passanger,
        supp_pay_bill: pass.supp_pay_bill,
        OneToManyFormId: createdForm.id, // Associate passanger with the form
      });
    });

    await flight.map(async (flt) => {
      await Flight.create({
        flight: flt.flight,
        flt_number: flt.flt_number,
        origin: flt.origin,
        destination: flt.destination,
        bag_info: flt.bag_info,
        OneToManyFormId: createdForm.id, // Associate flight with the form
      });
    });
    res.status(201).json({
      message: "flight created successfully",
      data: createdForm,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createFlightGroup, getALLFlightGroup };
