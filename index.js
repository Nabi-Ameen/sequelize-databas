const express = require("express");
const cors = require("cors");
const mainRoutes = require("./routes/index");
var app = express();
var http = require("http").Server(app);
app.use(express.json());
app.use(cors());
// app.options("*",cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// supplier routes
app.use("", express.static("uploads"));
app.use("/supplierRuls/suplierget", express.static("uploads"));
app.use(mainRoutes);
const port = 5000 || process.env.port;
http.listen(port, () => {
  console.log("server runing on 5000 port");
});
