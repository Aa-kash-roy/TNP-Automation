import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import CompanyProfile from "../../views/company.jsx"
import companyprofiles from "../models/CompanyProfile.js"

import CompanySearch from "../../views/companysearch.jsx"

const router = express.Router();

router.get('/search', (req, res, next) => {
    const companyName = req.query
    if('name' in companyName){
        companyprofiles.find({name: {"$regex": companyName.name, "$options": "i"}}).lean()
        .then(response => {
            // console.log(response)
            const reactComp = renderToString(<CompanySearch records={response} searchParam={true}/>);
            res.render("./companysearch", {reactApp: reactComp});
        })
        .catch(err => console.error(err));
    }
    else{
        const reactComp = renderToString(<CompanySearch records={[]} searchParam={false}/>)
        res.render("./companysearch", {reactApp: reactComp})
    }  
})

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