const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user");

app.use(express.json());
app.use(cors());

User.sync({ force: true });
app.listen(3000, () => {
  console.log("server runing on 3000 port");
});
