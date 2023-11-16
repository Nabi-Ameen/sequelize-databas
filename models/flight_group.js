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
flightGroup.hasMany(passanger, { foreignKey: "id" });
flightGroup.hasMany(flight, { foreignKey: "id" });

passanger.belongsTo(flightGroup, { foreignKey: "id" });
flight.belongsTo(flightGroup, { foreignKey: "id" });

module.exports = flightGroup;
