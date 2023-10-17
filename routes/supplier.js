
const express = require('express')
const router = express.Router();
const {suppCtrl} = require("../controllers")



router.post("/post", async(req , res)=>{
    return suppCtrl.postSupplier(req , res)
})

module.exports = router