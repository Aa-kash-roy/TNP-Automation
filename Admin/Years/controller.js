import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import YearDisplay from "../../../views/admin/years.js"
import StudentInternship from "../../../views/admin/studentinternship.js"
import StudentPlacement from "../../../views/admin/studentplacement.js"
import corestudentprofiles from "./models.js"
import multer from "multer"


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/:id', (req, res, next) => {
    const year = req.params.id
    console.log(year);
    const even = 2*year
    const odd = 2*year-1
    corestudentprofiles.find({
        $or : [
            { 'studentInfo.semester': even},
            { 'studentInfo.semester': odd}
        ]
    })
    .then( resp => {
        console.log(resp);
        const reactComp = renderToString(<YearDisplay year={year} records={resp}/>);
        res.render("./admin/years", {reactApp: reactComp});
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/internship/:roll', (req, res, next) => {
    const enrollmentNumber = req.params.roll
    corestudentprofiles.findOne({ enrollmentNumber: enrollmentNumber})
    .then( resp => {
        console.log(resp);
        const reactComp = renderToString(<StudentInternship record={resp}/>);
        res.render("./admin/studentinternship", {reactApp: reactComp});
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/internship/:roll', upload.any('attachments'), (req, res, next) => {
    console.log(req.file)
    res.redirect("/internship/"+req.params.roll)
})

router.get('/placement/:roll', (req, res, next) => {
    const enrollmentNumber = req.params.roll
    corestudentprofiles.findOne({ enrollmentNumber: enrollmentNumber})
    .then( resp => {
        console.log(resp);
        const reactComp = renderToString(<StudentPlacement record={resp}/>);
        res.render("./admin/studentplacement", {reactApp: reactComp});
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;