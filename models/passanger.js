const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const flightGroup = require("./flight_group")
const Passanger = sequelize.define("passanger", {
  id:
  {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  flight_id:
  {
    type:DataTypes.INTEGER
  },
  passangerType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price_passanger: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  supp_pay_bill: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
flightGroup.hasMany(Passanger, { foreignKey: "flight_id" });
Passanger.belongsTo(flightGroup, { foreignKey: "flight_id" });


module.exports = Passanger;
