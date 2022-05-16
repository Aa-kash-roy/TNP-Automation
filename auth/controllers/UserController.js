const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js')
const validate = require('../helpers/helper.js')

router.get('/register', (req, res) => {
    res.render('register',{
        errors: ""
    })
})

router.post('/register', async(req, res, next) => {

    const {password} = req.body
    const confirm_password = req.body.confirm_password

    if(password != confirm_password){
        const error_message= "Provided password and confirm password is not same"
        res.render('register', {
            errors: error_message
        })
    }

    if(!validate.validateUser(req.body)){
        const error_message= "Provided Email is not from IIITN !!"
        res.render('register', {
            errors: error_message
        })
    }
    else if(!validate.validatePassword(req.body)){
        const error_message= "Provided password is not Appropriate!!"
        res.render('register', {
            errors: error_message
        })
    }
    else{
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(password, salt);

        userServices.register(req.body)
            .catch(err => next(err))
        validate.sendOTPtoemail(req.body.email);
        res.redirect('/users/register/otpvalidation')
    }
})

router.get('/register/otpvalidation', (req, res) => {
    res.render('otpValidation')
})

router.post('/register/otpvalidation', (req, res, next) => {

    userServices.authenticateUser(req.body).then(
        res.redirect('/users/login')
    )
    .catch(err=> next(err))
})

router.get('/login', (req, res) => {
    res.render('login', {errors: ""})
})

router.post('/login', (req, res, next) => {
    const { email, password} = req.body;
    console.log("VVVVVVV")
    console.log(req.body)
    if('forgotpassword' in req.body){
        res.redirect("/users/forgot-password")
    }
    userServices.login({email, password}).then(user => {

        if(!user){
            const error_message = "Incorrect Credentials"
            res.render("login", {errors: error_message})
        }
        else{
            // console.log(user.token)
            res.cookie('token', user.token, { httpOnly: true });
            // console.log(user)

            var enrollmentNumber = user.email.split('@')[0]
            enrollmentNumber = enrollmentNumber.toUpperCase();
            res.redirect('/student/' + enrollmentNumber)
            // next();
            // console.log(user);
        }
        
    }
    ).catch(err => next(err))
})

router.get('/forgot-password', (req, res) => {
    // text field to take input for email !!
    res.render('forgetpassword')
})

router.post('/forgot-password', (req, res) =>{

    console.log("Im in forgot password !!")
    validate.sendOTPtoemail(req.body.email);
    res.redirect('/users/setpassword');
});

router.get('/setpassword', (req, res) =>{
    res.render('setpassword')    
})

router.post('/setpassword', (req, res) =>{
    
    userServices.setNewPassword(req.body).then(
        res.redirect("/users/login")
    )
})


router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

module.exports = router;