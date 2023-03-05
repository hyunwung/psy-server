const express = require('express');
const app = express();
const data = require('./config/bin')
const bodyParser = require('body-parser');
const morgan = require("morgan");
const path = require('path');
const connectDB = require("./server/connection")
const userRoute = require("./server/router")
connectDB();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.set("view",path.resolve(__dirname,"views/ejs"))

// load routers
app.use('/', userRoute)

app.listen(data.PORT,()=> console.log(`server is running on ${data.PORT} !`))


