module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "contacts",
    {
      // Model attributes are defined here
      permanent_Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_address: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      timestamps: false,
    }
  );
  return Contact;
};
