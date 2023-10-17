const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const supplier = sequelize.define(
  "supplier",
  {
    supplier_Category: {
      type: DataTypes.STRING,
    },
    supplier_Name: {
      type: DataTypes.STRING,
    },
    contact_Number: {
      type: DataTypes.INTEGER,
    },
    currency: {
      type: DataTypes.STRING,
    },
    roe: {
      type: DataTypes.INTEGER,
    },
    commision: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = supplier;
