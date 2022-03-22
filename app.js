import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import compression from "compression"

import TestFun from "./views/portal.jsx"


import { testStudentProfileData } from "./dummydata/students.js"
import { companyProfileData } from "./dummydata/companies.js"


import bodyParser from "body-parser"
import mongoose from "mongoose"
import {PORT, MONGO_URL} from "./config"

const users = require('./auth/controllers/UserController.js')
const student = require('./StudentProfile/controllers/StudentProfileController.js')
const company = require('./CompanyProfile/controllers/CompanyProfileController.js')
const test = require('./views/test.js')



const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) 

console.log(__dirname);
app.use(express.static(__dirname + "/public"));

app.use('/users', users) 
app.use('/student', student)
app.use('/company', company)
app.use('/', test)

// connect to the database
mongoose.connect(MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
});


testStudentProfileData()
companyProfileData()




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


app.listen(3001, function () {
    console.log('Server is running at port 3001')
})


