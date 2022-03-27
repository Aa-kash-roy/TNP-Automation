import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import NewPlacement from "../../views/admin/newplacement.jsx"
import {EMAIL, EMAIL_PASSWORD} from "../../config"
import multer from "multer"
import newplacements from "./models.js"
import {EmailSender, testEmailiiiTNvalid} from '../../auth/helpers/emailSender.js'


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const emailid = 'bt18cse030@iiitn.ac.in'

const createMail = (emailid, subject, body, attachments) => {

    const message = {
        from: EMAIL,
        to: emailid,
        subject: subject,
        html: body,
        attachments: attachments
    }
    return message
}

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<NewPlacement/>);
    res.render("./admin/newplacement", {reactApp: reactComp});
})

router.post('/', upload.any('attachments'), async (req, res, next) => {
    console.log("AaA")
    console.log(req.files)
    console.log(req.body)
    // let gender;
    // if ('gender' in)
    // const placement = await newplacements.create({
    //     name: req.body.name
    // })

    let attachments = []
    for(let i=0; i<req.files.length; i++){
        attachments.push({filename:req.files[i].originalname, content: req.files[i].buffer})
    }

    const email = await createMail(emailid, req.body['message'], req.body['subject'], attachments)
    await EmailSender(email)

    res.redirect('/admin/newplacement')
})

module.exports = router;