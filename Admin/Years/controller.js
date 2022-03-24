import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import YearDisplay from "../../views/admin/years.jsx"
import CoreStudentProfileModel from "./models.js"

const router = express.Router();

router.get('/:id', (req, res, next) => {

            const reactComp = renderToString(<YearDisplay year={req.params.id}/>);
            res.render("./student", {reactApp: reactComp});

})

module.exports = router;