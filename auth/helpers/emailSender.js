import {EMAIL, EMAIL_PASSWORD} from "../../config"
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

const testEmailiiiTNvalid = (email) => {

    if(validator.validate(email)){
        if(email.includes("iiitn.ac.in"))
            return true;
    }
    return false;
}

const otpMessage = (email, otp) => {

    const message = {
        from: EMAIL,
        to: email,
        subject: "OTP for TNP Account",
        html: `<p> You need to authenticate with the ${otp} !! </p>
            <p> It will expire in 15 min !! </p>`
    }
    return message
}

const EmailSender = async(message) => {

        console.log(message)
        await transporter.sendMail(message, function(err, info){
        if(err){
            console.log("ERRor occured while senting email")
            console.log(err)
            return
        }
        else{
            console.log("Email Sent !!")
        }
    })
}

module.exports = {
    otpMessage,
    EmailSender,
    testEmailiiiTNvalid
}