const express = require('express')
const route = express.Router()

const controller = require('../server/controller')

// get 요청
route.get('/',(req,res) => {
	res.send('Hello World !')
})

route.post('/test',(req,res) => {
	// 필요한 정보를 가져오면 데이터베이서에 넣는다.
	const choice = new Data(req.body)
	choice.save((err, res) => {
		if(err) return res.json({ success:false , err})
		return res.status(200).json({
			success:true
		})
	})
})

// API
route.post('/api/result',controller.create)
route.get('/api/datas',controller.find)
route.put('/api/users',controller.update)
route.delete('/api/users',controller.delete)

module.exports = route