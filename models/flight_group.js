const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const flightGroup = sequelize.define("flightGroup", {
  total_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  select_Supp: {
    type: DataTypes.STRING,
  },
  group_type: {
    type: DataTypes.STRING,
  },
  pnr: {
    type: DataTypes.STRING,
  },
});

module.exports = flightGroup;
