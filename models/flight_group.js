const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const passanger = require("./passanger");
const flight = require("./flight");
const { DataTypes } = Sequelize;

const flightGroup = sequelize.define("flightGroup", {
  total_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  select_Supp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  group_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pnr: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations
flightGroup.hasMany(passanger);
flightGroup.hasMany(flight);

passanger.belongsTo(flightGroup);
flight.belongsTo(flightGroup);

module.exports = flightGroup;
