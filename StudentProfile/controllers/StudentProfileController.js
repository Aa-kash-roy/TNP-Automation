import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import StudentProfile from "../../views/student.jsx"
import StudentProfileEdit from "../../views/studentedit"
import StudentProfileModel from "../models/StudentProfile.js"
import multer from "multer"
import corestudentprofiles from "../../Admin/Years/models.js"

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage});

router.get('/:id', async (req, res, next) => {
    try{
        const enrollmentNumber = req.params.id;
        const coredb = await corestudentprofiles.findOne({enrollmentNumber: enrollmentNumber}).lean()
        const studentdb = await StudentProfileModel.findOne({enrollmentNumber: enrollmentNumber}).lean()
        console.log(coredb)
        console.log(studentdb)
        if(coredb){
            if(!studentdb){
                const createEntry = await StudentProfileModel.create({
                    enrollmentNumber: coredb.enrollmentNumber,
        
                    studentInfo:{
                        name: coredb.studentInfo.name,
                        mobile: coredb.studentInfo.mobile,
                        cgpa: coredb.studentInfo.cgpa,
                        address: "",
                        semester: coredb.studentInfo.semester,
                        branch: coredb.studentInfo.branch,
                        passingYear: coredb.studentInfo.passingYear,
                        personalMail: ""
                    },

                    studentSocial:{
                        linkedin: {
                            name: "",
                            link: ""
                        },
                        github: {
                            name: ""
                        },
                        website: {
                            name: ""
                        }
                    },
                    achievements: [
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
            
                    publications: [
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
            
                    internships: [
                        {company: "", designation: ""},
                        {company: "", designation: ""},
                    ],

                    isPlaced: false
                })
                const reactComp = renderToString(<StudentProfile record={createEntry} coredb={coredb}/>);
                res.render("./student", {reactApp: reactComp});
            }
            else{
                const reactComp = renderToString(<StudentProfile record={studentdb} coredb={coredb}/>);
                res.render("./student", {reactApp: reactComp});
            }
        }
        else{
            res.status(404);
        }
    }
    catch(e){
        console.log(e);
    }
})

router.post('/:id', upload.single('resume'), (req, res, next) => {
    console.log(req.file)

    let achievements = [];
    let publications = [];
    for(let i=0; i<5; i++){
        let newach = {name: req.body['achievements'][i], link:''}
        let newpub = {name: req.body['publications'][i], link:''}
        achievements.push(newach);
        publications.push(newpub);
    }

    let internships = [];
    for(let i=0; i<2; i++){
        let newexp = {company: req.body['company'][i], designation: req.body['designation'][i]}
        internships.push(newexp);
    }


    StudentProfileModel.findOneAndUpdate({enrollmentNumber: req.params.id}, { $set: {
        achievements: achievements,
        publications: publications,
        internships: internships,
        'studentInfo.name': req.body['full name'],
        'studentInfo.mobile': req.body['mobile number'],
        'studentInfo.cgpa': req.body['cgpa'],
        'studentInfo.address': req.body['address'],
        'studentInfo.personalMail': req.body['email'],
        'studentSocial.linkedin.name': req.body['linkedin'],
        'studentSocial.github.name': req.body['github'],
        'studentSocial.website.name': req.body['website'],
        resume: req.file
    }}, {new: true}).lean()
    .then(response => {

            // console.log(response);
            res.redirect('/student/'+req.params.id);

        })
        .catch(err => console.error(err));
})


router.get('/:id/edit', (req, res, next) => {
    const enrollmentNumber = req.params.id;
    StudentProfileModel.find({enrollmentNumber: enrollmentNumber}).lean()
    .then(response => {
        if(response.length > 0){
            const reactComp = renderToString(<StudentProfileEdit record={response[0]}/>);
            res.render("./student", {reactApp: reactComp});
        }
        else{
            res.redirect('/student/'+enrollmentNumber);
        }
    })
    .catch(err => console.error(err));
})

module.exports = router;