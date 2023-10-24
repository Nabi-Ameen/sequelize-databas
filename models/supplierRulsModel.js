const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const SupplierModel = sequelize.define(
  "supplierRules",
  {
    supplierType: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    header: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SupplierModel;
