import {EMAIL, EMAIL_PASSWORD} from "../../config"

import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Announce from "../../views/admin/announce.jsx"
import multer from "multer"
import {EmailSender, testEmailiiiTNvalid} from '../../auth/helpers/emailSender.js'
const getRecipientsFromYear = require("./helper")

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage});

const emailid = 'bt18cse030@iiitn.ac.in'

const createMail = (emailid, subject, body, attachments) => {

    const message = {
        from: EMAIL,
        to: emailid,
        subject: subject,
        html: body,
        attachments: attachments
    }
    console.log(message)
    return message
}

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<Announce/>);
    res.render("./admin/announce", {reactApp: reactComp});
})


router.post('/', upload.any('attachments'), async (req, res, next) => {

    try{

        var recipients = []
        if(typeof(req.body.year) == "string"){
            recipients = recipients.concat(await getRecipientsFromYear(req.body.year))
        }
        else{
            const years = req.body.year
            for(const year of years) {
                recipients = recipients.concat(await getRecipientsFromYear(year))
            }
        }
        
        console.log(recipients)

        let attachments = []
        for(let i=0; i<req.files.length; i++){
            attachments.push({filename:req.files[i].originalname, content: req.files[i].buffer})
        }
        console.log(attachments)
        console.log(req.body)
        const email = await createMail(recipients, req.body['message'], req.body['subject'], attachments)
        await EmailSender(email)
        res.redirect('/admin/announce')
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router;