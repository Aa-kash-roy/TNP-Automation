import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import YearDisplay from "../../views/admin/years.jsx"
import corestudentprofiles from "./models.js"

const router = express.Router();

router.get('/:id', (req, res, next) => {
    const year = req.params.id
    console.log(year);
    corestudentprofiles.find({
        $or : [
            { 'studentInfo.semester': 2*year},
            { 'studentInfo.semester': 2*year-1}
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

module.exports = router;