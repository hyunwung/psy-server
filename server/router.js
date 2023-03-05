const express = require('express')
const route = express.Router()

const controller = require('../server/controller')
const services = require('./render')

// get 요청
//route.get('/',services.homeRoutes)

// route.post('/test',(req,res) => {
// 	// 필요한 정보를 가져오면 데이터베이서에 넣는다.
// 	const choice = new Data(req.body)
// 	choice.save((err, res) => {
// 		if(err) return res.json({ success:false , err})
// 		return res.status(200).json({
// 			success:true
// 		})
// 	})
// })

// API
route.post('/api/result',controller.create)
route.post('/api/datas',controller.find) // 특정 값 가져오기
route.get('/api',controller.show)	// 모든 데이터 가져오기
route.put('/api/users',controller.update)
route.delete('/api/users',controller.delete)

module.exports = route