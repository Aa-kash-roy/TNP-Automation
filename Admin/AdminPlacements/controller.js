import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminPlacements from "../../views/admin/adminplacements.jsx"
import newplacements, { findOne } from "../NewPlacement/models.js"
import JSZip from "jszip"
import fs from "fs"
import rimraf from "rimraf"
import AdmZip from "adm-zip"


const router = express.Router();


router.get('/', async (req, res, next) => {
    try{
        const response = await newplacements.find({}).lean()
        console.log(response)
        const reactComp = renderToString(<AdminPlacements records={response}/>);
        res.render("./admin/adminplacements", {reactApp: reactComp});
    }
    catch (e){
        console.log(e)
    }
})

router.post('/action', async (req, res, next) => {
    try{
        
        if(req.body.downloadplacement){
            const id = req.body.downloadplacement
            const details = await newplacements.findOne({_id: id})
            const path = "./Applications/" + details.name + " " + details.role + " " + id
            const zip = new AdmZip();
            const outputFile = "/tmp/placement.zip";
            zip.addLocalFolder(path);
            zip.writeZip(outputFile);
            console.log(`Created ${outputFile} successfully`);
            res.download('/tmp/placement.zip')
        }
        else{
            const id = req.body.delete
            const details = await newplacements.findOne({_id: id})
            const path = "./Applications/" + details.name + " " + details.role + " " + id
            rimraf.sync(path);
            const data = await newplacements.findOneAndDelete({_id: id})
            res.redirect("/admin/placements")
        }
        console.log(req.body)
        console.log("DOWNLOAD")
        
    }
    catch (e){
        console.log(e)
    }
})


module.exports = router;