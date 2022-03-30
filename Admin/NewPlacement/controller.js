import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import NewPlacement from "../../views/admin/newplacement.jsx"
import {EMAIL, EMAIL_PASSWORD} from "../../config"
import multer from "multer"
import newplacements from "./models.js"
import xlsx from "xlsx"
import fs from "fs"
import {EmailSender, testEmailiiiTNvalid} from '../../auth/helpers/emailSender.js'


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const emailid = 'bt18cse030@iiitn.ac.in'

const createMail = (emailid, subject, body, attachments) => {

    const message = {
        from: EMAIL,
        to: emailid,
        subject: subject,
        html: body,
        attachments: attachments
    }
    return message
}

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<NewPlacement/>);
    res.render("./admin/newplacement", {reactApp: reactComp});
})

router.post('/', upload.any('attachments'), async (req, res, next) => {
    console.log("AaA")
    console.log(req.body['gender'])
    console.log(req.body)
    console.log(req.files)
    
    //TODO: handle case when accidentally entered empty gender/role/year/name/ctc
    let gender, role, eligibleYears;

    console.log(typeof req.body.gender)
    console.log(typeof req.body.role)
    if(Array.isArray(req.body['gender']))
        gender = req.body['gender']
    else
        gender = [req.body['gender']]

    if(Array.isArray(req.body['role']))
        role = req.body['role']
    else
        role = [req.body['role']]

    if(Array.isArray(req.body['year']))
        eligibleYears = req.body['year']
    else
        eligibleYears = [req.body['year']]

    console.log(gender)
    console.log(role)
    console.log(eligibleYears)
    
    try{

        for(let i=0; i<role.length; i++){
            const appl = await newplacements.create({
                gender: gender,
                role: role[i],
                eligibleYears: eligibleYears,
                name: req.body.companyname,
                ctc: req.body.compensation,
                minCGPA: req.body.cgpa,
                maxBacklogs: req.body.backlogs,
                allowAll: req.body.allowall,
                numberOfApplications: 0
            })
            const folder = req.body.companyname + " " + appl.role + " " + appl._id.toString()
            fs.mkdirSync("./Applications/"+folder);
            fs.mkdirSync("./Applications/" + folder + "/resumes")

            const data = [{
                RollNo: "",
                Gender: "",
                CGPA: "",
                Backlogs: "",
                Branch: "",
                Semester: "",
                Gender: "",
                "Internship Status": "",
                "Placement Status": ""
            }]

            const ws = xlsx.utils.json_to_sheet(data)
            const wb = xlsx.utils.book_new()
            xlsx.utils.book_append_sheet(wb, ws, 'Responses')
            xlsx.writeFile(wb, "./Applications/" + folder + "/details.xlsx");

        }

        
        let attachments = []
        for(let i=0; i<req.files.length; i++){
            attachments.push({filename:req.files[i].originalname, content: req.files[i].buffer})
        }

        const email = await createMail(emailid, req.body['message'], req.body['subject'], attachments)
        // await EmailSender(email)
    }
    catch(e){
        console.log(e)
    }

    res.redirect('/placements')
})

module.exports = router;