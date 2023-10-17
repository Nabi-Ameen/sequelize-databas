const express = require("express");
const app = express();
const cors = require("cors");
const mainRoutes = require("./routes/index")

app.use(express.json());
app.use(cors);
app.options("*",cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// supplier routes
app.use(mainRoutes)


app.listen(5000, () => {
  console.log("server runing on 5000 port");
});
