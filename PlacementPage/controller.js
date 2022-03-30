import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Placement from "../views/placementpage.jsx"
import newplacements, { findOne } from "../Admin/NewPlacement/models.js"
import StudentProfileModel from "../StudentProfile/models/StudentProfile.js"
import xlsx from "xlsx"
import corestudentprofiles from "../Admin/Years/models.js"
import fs from "fs"

const router = express.Router();

router.get('/', async (req, res, next) => {

    try{
        const enrollmentNumber = "BT18CSE031" //change this to get actual roll or find if user is admin
        const student = await StudentProfileModel.findOne({enrollmentNumber:enrollmentNumber}).lean()
        const response = await newplacements.find({}).lean()
        const reactComp = renderToString(<Placement records={response} applications={student['applications']}/>);
        res.render("./placementpage", {reactApp: reactComp});
    }
    catch(e){
        console.log(e)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const enrollmentNumber = "BT18CSE031" //change this to get actual roll number

        const coreDetails = await corestudentprofiles.findOne({enrollmentNumber: enrollmentNumber}).lean()

        const jobDetails = await newplacements.findOneAndUpdate({_id: req.body['applicationId']}, { $inc: {
            numberOfApplications: 1
        }}, {new: true}).lean()
        console.log(jobDetails)
        console.log(coreDetails)

        const resumeSourcePath = "./StudentProfile/resumes/" + enrollmentNumber + ".pdf" 
        const resumeDestPath = './Applications/' + jobDetails.name + " " + jobDetails.role + " " + jobDetails._id.toString() + "/resumes/" + enrollmentNumber + ".pdf"
        const studentYear = parseInt((coreDetails.studentInfo.semester+1)/2).toString()

        let cond1 = coreDetails.studentInfo.cgpa >= jobDetails.minCGPA
        let cond2 = coreDetails.backlogs <= jobDetails.maxBacklogs
        let cond3 = jobDetails.gender.includes(coreDetails.studentInfo.gender)
        let cond4 = jobDetails.eligibleYears.includes(studentYear)

        let cond5;
        if(jobDetails.role == "Full-time"){
            if('compensation' in coreDetails.placement && coreDetails.placement.compensation*1.5 <= jobDetails.ctc)
                cond5 = true
            else
                cond5 = false
        }
        else{
            if(coreDetails.internship.internshipCompleted == "Pending")
                cond5 = true
            else
                cond5 = false
        }

        if(jobDetails.allowAll) cond5 = true

        let cond6 = fs.existsSync(resumeSourcePath)


        console.log("CGPA" + cond1)
        console.log("BACKLOG" + cond2)
        console.log("GENDER" + cond3)
        console.log("YEAR" + cond4)
        console.log("ALLOW" + cond5)
        console.log("RESUME" + cond6)

        if(cond1 && cond2 && cond3 && cond4 && cond5 && cond6){     
            
            const upd = await StudentProfileModel.findOneAndUpdate({enrollmentNumber: enrollmentNumber}, { $push: {
                applications: req.body['applicationId']
            }}, {new: true}
            )

            const path = './Applications/' + jobDetails.name + " " + jobDetails.role + " " + jobDetails._id.toString() + "/details.xlsx"
            const file = xlsx.readFile(path)
            let sheet = file.Sheets[file.SheetNames[0]]
            xlsx.utils.sheet_add_aoa(sheet, [[
                coreDetails.enrollmentNumber,
                coreDetails.studentInfo.name,
                coreDetails.studentInfo.cgpa,
                coreDetails.backlogs,
                coreDetails.studentInfo.branch,
                coreDetails.studentInfo.semester,
                coreDetails.studentInfo.gender,
                coreDetails.internship.internshipCompleted,
                coreDetails.placement.isPlaced
            ]], {origin: "A"+(jobDetails.numberOfApplications+1)})
            file.Sheets[file.SheetNames[0]] = sheet;
            xlsx.writeFile(file, path);

            fs.copyFile(resumeSourcePath, resumeDestPath, (err) => {
                if (err) throw err;
                console.log('source.txt was copied to destination.txt');
            });

            res.redirect("/placements")
        }
        else{
            res.redirect("/placements")
        }
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router