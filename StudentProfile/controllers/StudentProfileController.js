import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import StudentProfile from "../../views/home.jsx"
import StudentProfileEdit from "../../views/studentedit"
import StudentProfileModel from "../models/StudentProfile.js"

const router = express.Router();

router.get('/:id', (req, res, next) => {
    const enrollmentNumber = req.params.id;
    StudentProfileModel.find({enrollmentNumber: enrollmentNumber}).lean()
    .then(response => {
        if(response.length > 0){
            const reactComp = renderToString(<StudentProfile record={response[0]}/>);
            res.render("./home", {reactApp: reactComp});
        }
        else{
            res.status(404);
        }
    })
    .catch(err => console.error(err));
})

router.post('/:id', (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id);

    StudentProfileModel.findOneAndUpdate({enrollmentNumber: req.params.id}, { $set: {
        // achievements: req.body['achievements'],
        // publications: req.body['publications'],
        'studentInfo.name': req.body['full name'],
        'studentInfo.mobile': req.body['mobile number'],
        'studentInfo.cgpa': req.body['cgpa'],
        'studentInfo.address': req.body['address'],
        'studentInfo.personalMail': req.body['email'],
        'studentSocial.linkedin.name': req.body['linkedin'],
        'studentSocial.github.name': req.body['github'],
        'studentSocial.website.name': req.body['website']
    }}, {new: true}).lean()
    .then(response => {

            console.log(response);
            const reactComp = renderToString(<StudentProfile record={response}/>);
            res.render("./home", {reactApp: reactComp});

        })
        .catch(err => console.error(err));
})


router.get('/:id/edit', (req, res, next) => {
    const enrollmentNumber = req.params.id;
    StudentProfileModel.find({enrollmentNumber: enrollmentNumber}).lean()
    .then(response => {
        if(response.length > 0){
            const reactComp = renderToString(<StudentProfileEdit record={response[0]}/>);
            res.render("./home", {reactApp: reactComp});
        }
        else{
            res.status(404);
        }
    })
    .catch(err => console.error(err));
})

module.exports = router;