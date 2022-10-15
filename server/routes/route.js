const express = require("express");
const router = express.Router();
const Image = require('../models/controller');

router.post('/',async(req,res)=>{
    console.log(req.body);
     try {
        var image = new Image(req.body);
       image.save(function(){})
        res.status(201).send({data:image,message:"success"})
     } catch (err) {
        console.log(err)
        res.status(500).send({message:"Internal server error"})
     }
})

router.get('/',async(req,res)=>{
    try {
       const image=await Image.find();
       res.status(201).send({data:image,message:"success showed"})
    } catch (err) {
       res.status(500).send({message:"Internal server error"})
    }
})

module.exports = router;
