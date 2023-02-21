const express = require('express');
const app = express();
const port = 8080;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ward:dkalclsgozld12!@psy-server.q1l8dfq.mongodb.net/?retryWrites=true&w=majority',{
	useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB connect ...'))
	.catch(err=>console.log(err))

app.get('/',(req,res) => res.send('Hello World'))

app.listen(port,()=> console.log(`example ${port}`))

