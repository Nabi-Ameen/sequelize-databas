const express = require("express");
const app = express();
const cors = require("cors");
require("./models");
const userCtrl = require("./controllers/userController");

app.use(express.json());
app.use(cors());

app.get("/users", userCtrl.getAllUser);
app.get("/user:id", userCtrl.getUser);
app.post("/user", userCtrl.postUser);
app.delete("/user:id", userCtrl.deleteUser);
app.patch("/user:id", userCtrl.updateUser);

app.listen(5000, () => {
  console.log("server runing on 5000 port");
});
