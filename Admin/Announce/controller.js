import {EMAIL, EMAIL_PASSWORD} from "../../config"

import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Announce from "../../views/admin/announce.jsx"
import multer from "multer"
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
        content: attachments
    }
    return message
}

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<Announce/>);
    res.render("./admin/announce", {reactApp: reactComp});
})

router.post('/', upload.any('attachments'), async (req, res, next) => {
    console.log("AaA")
    console.log(req.files)
    console.log(req.body['subject'])
    const email = await createMail(emailid, req.body['message'], req.body['subject'], req.files)
    await EmailSender(email)
    res.redirect('/admin/announce')
})

module.exports = router;