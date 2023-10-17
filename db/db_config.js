const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sequelize_database", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}



sequelize.sync().then((err)=>{
  console.log("table created")
},function(err){console.log('An error occured while creating table'+err)});
module.exports = sequelize;