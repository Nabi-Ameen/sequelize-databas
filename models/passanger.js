const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const passanger = sequelize.define("passanger", {
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

module.exports = passanger;
