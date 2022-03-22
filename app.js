import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"

import TestFun from "./views/portal.jsx"
import StudentProfile from "./views/home.jsx"

import StudentProfileModel from "./StudentProfile/models/StudentProfile.js"

import bodyParser from "body-parser"
import mongoose from "mongoose"
import {PORT, MONGO_URL} from "./config"

const users = require('./auth/controllers/UserController.js')
const student = require('./StudentProfile/controllers/StudentProfileController.js')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(express.static(__dirname + "/public"))

app.use('/users', users) 
app.use('/student', student)

// connect to the database
mongoose.connect(MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
});


testStudentProfileData()
async function testStudentProfileData(){
    const refresh = await StudentProfileModel.deleteMany({}) //refresh the table on each restart

    const studentProfile = await StudentProfileModel.create({
        enrollmentNumber: "BTBT",
        
        studentInfo:{
            name: "AAA",
            mobile: "1234567890",
            cgpa: 9.4,
            address: "11 street",
            year: 1,
            branch: "BRANCH"
        },

        studentSocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            github: {
                name: "GITHUB"
            },
            website: {
                name: "WEBSITE"
            }
        },

        achievements: [{name: "ACH1"}, {name: "ACH2", link:"ACH2 LINK"}],

        publications: [{name: "PUB1", link: "PUB1 link"}, {name: "PUB2"}, {name: "PUB3", link: "PUB3LINK"}],

        internships: [
            {company: "COMPANY1", designation: "DESGN1"},
            {company: "COMPANY2", designation: "DESGN2"}
        ],

        isPlaced: false
    })
}


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

