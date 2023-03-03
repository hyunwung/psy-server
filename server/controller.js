const mongodb = require('../models/model')
'use strict';

// create something
exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Result cant empty !"})
    }
    const result = new mongodb({
        result:req.body.result
    })
    result
        .save(result)
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

}

//update a new idetified user id
exports.update = (req,res) => {

}

//delete a user with specified user request
exports.delete = (req,res) => {
    
}