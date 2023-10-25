const sequelize = require("../db/db_config");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const SupplierModel = sequelize.define(
  "supplierRules",
  {
    supplierType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    header: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SupplierModel;
