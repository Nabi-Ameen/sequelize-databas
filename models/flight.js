const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const flightGroup = require("./flight_group")
const Flight = sequelize.define("flight", {
  flight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flight_id:
  {
    type:DataTypes.INTEGER
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
// Associations
flightGroup.hasMany(Flight, { foreignKey: "flight_id" });
Flight.belongsTo(flightGroup, { foreignKey: "flight_id" });
module.exports = Flight;
