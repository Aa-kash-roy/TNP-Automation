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
        const upd = await StudentProfileModel.findOneAndUpdate({enrollmentNumber: enrollmentNumber}, { $push: {
            applications: req.body['applicationId']
        }}, {new: true}
        )

        const coreDetails = await corestudentprofiles.findOne({enrollmentNumber: enrollmentNumber}).lean()

        const jobDetails = await newplacements.findOneAndUpdate({_id: req.body['applicationId']}, { $inc: {
            numberOfApplications: 1
        }}, {new: true}).lean()
        console.log(jobDetails)
        console.log(coreDetails)

        const resumeSourcePath = "./StudentProfile/resumes/" + enrollmentNumber + ".pdf" 
        const resumeDestPath = './Applications/' + jobDetails.name + " " + jobDetails.role + " " + jobDetails._id.toString() + "/resumes/" + enrollmentNumber + ".pdf"
 
        let cond1 = coreDetails.studentInfo.cgpa >= jobDetails.minCGPA
        let cond2 = coreDetails.backlogs <= jobDetails.maxBacklogs
        let cond3 = jobDetails.gender.includes(coreDetails.studentInfo.gender)

        

        

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
    catch(e){
        console.log(e)
    }
})

module.exports = router