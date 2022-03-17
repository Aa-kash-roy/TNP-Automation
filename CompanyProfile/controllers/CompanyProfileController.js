import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import CompanyProfile from "../../views/company.jsx"
import companyprofiles from "../models/CompanyProfile.js"

const router = express.Router();

router.get('/:id', (req, res, next) => {
    const companyId = req.params.id;
    console.log(companyId);
    companyprofiles.find({id: companyId}).lean()
    .then(response => {
        console.log(response)
        const reactComp = renderToString(<CompanyProfile record={response[0]}/>);
        res.render("./company", {reactApp: reactComp});
    })
    .catch(err => console.error(err));
})

module.exports = router;