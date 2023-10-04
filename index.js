const express = require("express");
const app = express();
const cors = require("cors");
require("./models");

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("server runing on 3000 port");
});
