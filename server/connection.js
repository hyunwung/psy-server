const data = require('../config/bin')
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = () => {
	mongoose.connect(data.MONGO_URI)
	.then(()=>console.log('MongoDB connect ...'))
	.catch(err=>{
		console.log(err)
	})
}

module.exports = connectDB