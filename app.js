import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import TestFun from "./views/portal.jsx"
import StudentProfile from "./views/home.jsx"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import {PORT, MONGO_URL} from "./config"

const users = require('./auth/controllers/UserController.js')
const student = require('./StudentProfile/controllers/StudentProfileController.js')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(express.static("public"))

app.use('/users', users) 
app.use('/student', student)

// connect to the database
mongoose.connect(MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
});

app.get('/', function(req, res) {
    let reactComp = renderToString(<StudentProfile/>);
    res.render("home", {reactApp: reactComp});
})

app.get('/portal', function(req, res){
    let reactComp = renderToString(<TestFun/>);
    res.render('portal', {reactApp: reactComp});
})

app.post('/portal', function(req, res){
    let user = req.body.name_input
    let pass = req.body.password_input
    console.log(user)
    console.log(pass)
    res.redirect('/')
})

app.get('/company', function(req, res){
    res.render('company')
})


app.listen(3001, function () {
    console.log('Server is running at port 3001')
})

