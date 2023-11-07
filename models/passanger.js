const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const passanger = sequelize.define("passanger", {
  passangerType: {
    type: DataTypes.STRING,
  },
  price_passanger: {
    type: DataTypes.FLOAT,
  },
  supp_pay_bill: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = passanger;
