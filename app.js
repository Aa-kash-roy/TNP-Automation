import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import compression from "compression"

import TestFun from "./views/portal.jsx"

import StudentProfile from "./views/home.jsx"
import StudentProfileModel, { deleteMany } from "./StudentProfile/models/StudentProfile.js"

import CompanyProfile from "./views/company.jsx"
import companyprofiles from "./CompanyProfile/models/CompanyProfile.js"


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
app.use(express.static(__dirname + "/dist"));

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
async function testStudentProfileData(){
    const refresh = await StudentProfileModel.deleteMany({}) //refresh the table on each restart

    const studentProfile = await StudentProfileModel.create({
        enrollmentNumber: "BT18CSE031",
        
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

companyProfileData()
async function companyProfileData(){
    try{
    const refresh = await companyprofiles.deleteMany({})
    const companyProfile = await companyprofiles.create({
        name: "micro",
        id: "10222",
        logo: "BBB",
        companySocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "WEBSITE"
            }
        },
        placementData: [
            {year:1111, students:2222, ctc:1},
            {year:2222, students:3333, ctc:2}
        ]
    })

    const companyProfile2 = await companyprofiles.create({
        name: "micro",
        id: "10223",
        logo: "BBB",
        companySocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "WEBSITE"
            }
        },
        placementData: [
            {year:1111, students:2222, ctc:1},
            {year:2222, students:3333, ctc:2}
        ]
    })

    const companyProfile3 = await companyprofiles.create({
        name: "microsoft",
        id: "10224",
        logo: "BBB",
        companySocial:{
            linkedin: {
                name: "LINKEDIN",
                link: "LINKEDIN LINK"
            },
            website: {
                name: "WEBSITE"
            }
        },
        placementData: [
            {year:1111, students:2222, ctc:1},
            {year:2222, students:3333, ctc:2}
        ]
    })
}
catch (e){
    console.log(e)
}
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


app.listen(3001, function () {
    console.log('Server is running at port 3001')
})


