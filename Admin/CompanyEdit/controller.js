import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import CompanyEdit from "../../views/admin/companyedit.jsx"
import companyprofiles from "../../CompanyProfile/models/CompanyProfile.js"


const router = express.Router();


router.get('/:id', async (req, res, next) => {
    try{
        const companyid = req.params.id
        const companydata = await companyprofiles.findOne({id: companyid})
        const reactComp = renderToString(<CompanyEdit record={companydata}/>);
        res.render("./admin/companyedit", {reactApp: reactComp});
    }
    catch (e){
        console.log(e)
    }
})

router.get('/delete/:id', async (req, res, next) => {
    try{
        const companyid = req.params.id
        const companydata = await companyprofiles.deleteOne({id: companyid})
        res.redirect("/admin/companysearch");
    }
    catch (e){
        console.log(e)
    }
})

router.get('/new', async (req, res, next) => {
    try{
        const maxid = await companyprofiles.find().sort({age:-1}).limit(1)
        console.log(maxid);
        res.redirect("/admin/companysearch");
    }
    catch (e){
        console.log(e)
    }
})

module.exports = router;