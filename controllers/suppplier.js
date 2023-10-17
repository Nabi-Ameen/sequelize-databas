const supplierModel = require("../models/supplier")

const postSupplier = async(req, res)=>{
    console.log(req.body)
    try {
        const {supData} = req.body;
    await supplierModel.create(supData)
    .then((createdata)=>{
        res.status(200).send({success:true , message:"Data Created successfully"})

    }).catch((err)=>{
        res.status(400).send({success:false , message:"something went wrong.please try again!"})
    }) 
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false , message:"internal server error"})
    }
    
}

exports.models = {postSupplier}