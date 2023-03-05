const mongodb = require('../models/model')

// create something
exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Result cant empty !"})
    }
    const result = new mongodb({
        result:req.body.result
    })
    result.save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured !"
        })
    })
}

 //retrieve and return all users
exports.find = (req,res) => {   
    let resultID = req.body.resultID
    mongodb.findById(resultID)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured !"
        })
    })
}

exports.show = (req,res) => {   
    mongodb.find()    
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured !"
        })
    })
}

//update a new idetified user id
exports.update = (req,res) => {

}

//delete a user with specified user request
exports.delete = (req,res) => {
    
}