const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const { Data } = require("./models/Data")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://hyun:1234asdf@psy-server.q1l8dfq.mongodb.net/?retryWrites=true&w=majority')
	.then(()=>console.log('MongoDB connect ...'))
	.catch(err=>console.log(err))

app.get('/',(req,res) => res.send('Hello World'))


app.post('/test',(req,res) => {
	// 필요한 정보를 가져오면 데이터베이서에 넣는다.
	const choice = new Data(req.body)

	choice.save((err, res) => {
		if(err) return res.json({ success:false , err})
		return res.status(200).json({
			success:true
		})
	})
})

app.listen(port,()=> console.log(`example ${port}`))

