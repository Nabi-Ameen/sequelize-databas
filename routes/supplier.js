
const express = require('express')
const router = express.Router();
const {suppCtrl} = require("../controllers")


router.get("/get", async(req, res)=>{
    return suppCtrl.getSupplier(req, res)
})

router.post("/post", async(req , res)=>{
    return suppCtrl.postSupplier(req , res)
})

module.exports = router