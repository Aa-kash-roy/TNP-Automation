import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"

import TestFun from "./views/portal.jsx"


import { testStudentProfileData } from "./dummydata/students.js"
import { companyProfileData } from "./dummydata/companies.js"
import { coreStudentProfileData } from "./dummydata/corestudents.js"


import bodyParser from "body-parser"
import mongoose from "mongoose"
import {PORT, MONGO_URL} from "./config"


//user views
const users = require('./auth/controllers/UserController.js')
const student = require('./StudentProfile/controllers/StudentProfileController.js')
const company = require('./CompanyProfile/controllers/CompanyProfileController.js')
const practice = require('./CodingPractice/controller/codingHandler.js')
const test = require('./views/test.js')


//admin views
const adminlanding = require("./Admin/Landing/controller.js")
const yeardisplay = require("./Admin/Years/controller.js")
const adminannounce = require("./Admin/Announce/controller.js")
const newplacement = require("./Admin/NewPlacement/controller.js")
const admincompanysearch = require("./Admin/CompanySearch/controller.js")
const placementreports = require("./Admin/PlacementReports/controller.js")




const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) 

console.log(__dirname);
app.use(express.static(__dirname + "/public"));


//user views
app.use('/users', users) 
app.use('/student', student)
app.use('/company', company)
app.use('/practice', practice)
app.use('/', test)


//admin views
app.use('/admin', adminlanding)
app.use('/admin/year', yeardisplay)
app.use('/admin/announce', adminannounce)
app.use('/admin/newplacement', newplacement)
app.use('/', yeardisplay)
app.use('/admin/companysearch', admincompanysearch)
app.use('/admin/placementreports', placementreports)

// connect to the database

const mongoDbConnect = () =>{
    return mongoose.connect(MONGO_URL);
}


//initialize dummy data
testStudentProfileData()
companyProfileData()
coreStudentProfileData()



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


const start = async() =>{

    await mongoDbConnect()
    console.log("Database connected !!")
    app.listen(3001, function () {
        console.log('Server is running at port 3001')
    })
}
 
start()