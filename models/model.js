const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	result:{
		type:Number,
		maxlength:10,
        required:true
	}
})

const mongodb = mongoose.model("result",userSchema)

module.exports = mongodb