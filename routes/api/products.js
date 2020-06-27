const Product=require('../../db').Product
const route=require('express').Router()

route.get('/',(req,res)=>{

    Product.findAll()
    .then((product)=>{
        res.status(200).send(product)
    })
    .catch((err)=>{
        res.status(500).send({
        error:"ERROR"    
        })
    })
})

route.post('/',(req,res)=>{
if(isNaN(req.body.price)){
    return res.status(403).send({
        error:"not valid price "
    })
}

Product.create({
    name:req.body.name,
    manufacturer:req.body.manufacturer,
    price:parseFloat(req.body.price)
}).then((product)=>{
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(501).send({
            error:"Error"
        })
    })
})

 module.exports={
    route
}