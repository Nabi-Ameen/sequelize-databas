const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const Supplier = sequelize.define(
  "supplier",
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    supplier_Category: {
      type: DataTypes.STRING,
    },
    supplier_Name: {
      type: DataTypes.STRING,
    },
    contact_Number: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.STRING,
    },
    roe: {
      type: DataTypes.STRING,
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

module.exports = Supplier;
