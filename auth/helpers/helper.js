
const UserOtpVerification = require('../models/otpModel')
const EmailHandler = require('./emailSender')

const sendOTPtoemail = async(email) => {

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const optMessage = await EmailHandler.otpMessage(email, otp)
    await EmailHandler.EmailSender(optMessage)
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
    sendOTPtoemail
}
