const User = require('../models/UserModels')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')
const UserOtpVerification = require('../models/otpModel')

async function login({ email, password }) {
    const user = await User.findOne({email});
    if(!user || user.validated == false)
        return "User doesn't exist !!"
    // synchronously compare user entered password with hashed password
    if(user && bcrypt.compareSync(password, user.password)){
        const token = auth.generateAccessToken(email);

        // call toJSON method applied during model instantiation
        return {...user.toJSON(), token}
    }
}

async function register(params){
    // instantiate a user modal and save to mongoDB
    const email = params.email
    await User.deleteMany({email})
    const user = new User(params)
    await user.save()
}

async function updateUser(email, password){

    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    await User.updateOne({email: email}, {password: password})
}

async function authenticateUser(params){

    const email = params.email
    const UserOtpRecords = await UserOtpVerification.find({
        email
    });

    console.log(UserOtpRecords)
    if(UserOtpRecords.length <= 0)
        throw new Error("Account result don't exist !!")
    else{
        const {expiredAt} = UserOtpRecords[0];
        const otp = UserOtpRecords[0].otp;

        if(expiredAt < Date.now()){

            await UserOtpVerification.deleteMany({email});
            throw new Error("Code has expired !!");
        }
        else{
            if(otp == params.otp)
                await User.updateOne({email: params.email}, {validated: true}).then()
            await UserOtpVerification.deleteMany({email});
        }
    }
}

async function setNewPassword(params){

    const email = params.email
    const UserOtpRecords = await UserOtpVerification.find({
        email
    });


    const {expiredAt} = UserOtpRecords[0];
    const otp = UserOtpRecords[0].otp;

    if(expiredAt < Date.now()){

        await UserOtpVerification.deleteMany({email});
        throw new Error("Code has expired !!");
    }
    else{
        if(otp == params.otp){
            await updateUser(params.email, params.password)
            await UserOtpVerification.deleteMany({email});
        }
    }
}

async function getById(id) {

    const user = await User.findById(id);
    // call toJSON method applied during model instantiation
    return user.toJSON()
}

module.exports = {
    login,
    register,
    getById,
    authenticateUser,
    setNewPassword
};