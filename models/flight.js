const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const flight = sequelize.define("flight", {
  flight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flt_number: {
    type: DataTypes.STRING,
  },
  origin: {
    type: DataTypes.STRING,
  },
  destination: {
    type: DataTypes.STRING,
  },
  bag_info: {
    type: DataTypes.STRING,
  },
});

module.exports = flight;
