import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminCompanySearch from "../../views/admin/admincompanysearch.jsx"
import companyprofiles from "../../CompanyProfile/models/CompanyProfile.js"


const router = express.Router();


router.get('/', async (req, res, next) => {
    const companyName = req.query
    if('name' in companyName){
        try{
            const response = await companyprofiles.find({name: {"$regex": companyName.name, "$options": "i"}}).lean()
            const reactComp = renderToString(<AdminCompanySearch records={response} searchParam={true}/>);
            res.render("./admin/admincompanysearch", {reactApp: reactComp});
        }
        catch(e){
            console.log(e)
        }
    }
    else{
        const reactComp = renderToString(<AdminCompanySearch records={[]} searchParam={false}/>)
        res.render("./admin/admincompanysearch", {reactApp: reactComp})
    }  
})

module.exports = router;