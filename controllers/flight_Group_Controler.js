// const { flightGroup, Passanger, Flight } = require("../models");
const flightGroup = require("../models/flight_group");
const Passanger = require("../models/passanger");
const Flight = require("../models/flight");

const getALLFlightGroup = async (req, res) => {
  try {
    const forms = await flightGroup.findAll({
      include: [
        { model: Passanger, as: "passangers" },
        { model: Flight, as: "flights" },
      ],
    });

    res.status(200).json({ data: forms });
  } catch (error) {
    console.log(error);
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
        flight_id:createdForm.id, // Associate passanger with the form
      });
    });

    await flight.map(async (flt) => {
      await Flight.create({
        flight: flt.flight,
        flt_number: flt.flt_number,
        origin: flt.origin,
        destination: flt.destination,
        bag_info: flt.bag_info,
        flight_id: createdForm.id, // Associate flight with the form
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
