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
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bag_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = flight;
