import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import CompanyEdit from "../../views/admin/companyedit.jsx"
import companyprofiles from "../../CompanyProfile/models/CompanyProfile.js"
import multer from "multer"
import fs from "fs"

const router = express.Router();
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "../../public/img/companies")
    },
    filename: function(req, file, cb){
        cb(null, req.params.id+".png")
    }
})
const upload = multer({ storage: storage});


router.get('/company/:id', async (req, res, next) => {
    try{
        console.log("ZZ")
        const companyid = req.params.id
        const companydata = await companyprofiles.findOne({id: companyid})
        const reactComp = renderToString(<CompanyEdit record={companydata}/>);
        res.render("./admin/companyedit", {reactApp: reactComp});
    }
    catch (e){
        console.log(e)
    }
})

router.post('/company/:id', upload.single('resume'), async (req, res, next) => {
    try{
        
        const companyid = req.params.id
        const companydata = await companyprofiles.findOne({id: companyid})

        let newplacementData = companydata['placementData'];
        newplacementData.push({
            year: parseInt(req.body['newyear']), 
            students: parseInt(req.body['newnumber']), 
            ctc: parseInt(req.body['newctc'])
        })

        console.log(newplacementData)

        const newcompanydata = await companyprofiles.findOneAndUpdate({id: companyid}, { $set: {
            placementData: newplacementData,
            website: req.body['companywebsite'],
            'companySocial.website.name': req.body['companywebsite'],
            'companySocial.linkedin.name': req.body['companylinkedin'],
            name: req.body['newname'],
            email: req.body['companymail']
        }}, {new: true})
       
        console.log(newcompanydata)
        console.log(companyid)
        res.redirect("/admin/companysearch")
        // const companyid = req.params.id
        // const companydata = await companyprofiles.findOne({id: companyid})
        // const reactComp = renderToString(<CompanyEdit record={companydata}/>);
        // res.render("./admin/companyedit", {reactApp: reactComp});
    }
    catch (e){
        console.log(e)
    }
})

router.get('/delete/:id', async (req, res, next) => {
    try{
        console.log("XX")
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
        console.log("AFAFAFAFF")
        const maxid = await companyprofiles.find().sort({id:-1}).limit(1)
        var newid
        if(maxid.length == 0)
            newid = "10001"
        else
            newid = (parseInt(maxid[0].id) + 1).toString()
        
        console.log(newid)

        const companyProfile = await companyprofiles.create({
            name: "NewCompany",
            id: newid,
            logo: "",
            companySocial:{
                linkedin: {
                    name: "NewCompany",
                    link: "NewCompany"
                },
                website: {
                    name: "NewCompany.com"
                }
            },
            placementData: [],
            email: "Company@gmail.com",
            website: "NewCompany.com",
            phone: "00000000000"
        })
        
        res.redirect("/admin/edit/company/" + newid);
    }
    catch (e){
        console.log(e)
    }
})

module.exports = router;