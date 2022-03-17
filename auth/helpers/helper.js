const validator = require("email-validator");
const nodemailer = require("nodemailer");
const User = require('../models/UserModels')
const UserOtpVerification = require('../models/otpModel')
 
const testEmailvalid = async(email) => {

    if(validator.validate(email)){
        if(email.includes("iiitn.ac.in"))
            return true;
    }
    return false;
}

const sendOTPtoemail = async(email) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "bt18cse036@iiitn.ac.in",
            pass: "Akash$123"
        }
    });

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const message = {
        from: "bt18cse036@iiitn.ac.in",
        to: email,
        subject: "OTP for TNP account validation",
        html: `<p> You need to authenticate with the ${otp} !! </p> <p>Your OTP is {} </p>
            <p> It will expire in 15 min !! </p>`
    }

    await transporter.sendMail(message, function(err, info){
        if(err){
            console.log("Im error at:: sendEmail !!")
            console.log(err)
            return
        }
        else{
            console.log("Email Sent !!")
        }
    })
    const userotp = new UserOtpVerification({
        email: email,
        otp: otp,
        createdAt: Date.now(),
        expiredAt: Date.now() + 900000
    });  
    await userotp.save()
}

const validate = (params) =>{
    if(!testEmailvalid(params.email))
        console.log("Not a IIITN User !!");
}

module.exports = {
    validate,
    sendOTPtoemail
}
