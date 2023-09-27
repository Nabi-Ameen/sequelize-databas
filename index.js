const express = require("express");
const app = express();
app.use(express.json());
const db = require("./models");

//Routes
const postRoute = require("./routes/Posts");
app.use("/post", postRoute);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("server runing on 3000 port");
  });
});
