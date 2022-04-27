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

router.get('/register/otpvalidation', (req, res) => {
    res.render('otpvalidation')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('login/forget-password', (req, res) => {
    res.render('')
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

router.post('/register/otpvalidation', (req, res, next) => {

    userServices.authenticateUser(req.body).then(
        res.redirect('/users/login')
    )
    .catch(err=> next(err))
})

router.post('/login/forget-password', (req, res) =>{
    validateUser.sendOTPtoemail(req.body.email);
    res.redirect('/users/login/setpassword');
});

router.post('/login/setpassword', (req, res) =>{
    
    userServices.setNewPassword(req.body).then(
        res.send("Password Updated !!")
    )
})

router.post('/login', (req, res, next) => {
    const { email, password} = req.body;
    userServices.login({email, password}).then(user => {
        console.log(user.token)
        res.cookie('token', user.token, { httpOnly: true });
        res.redirect('/student/BT18CSE031')
        // next();
        console.log(user);
    }
    ).catch(err => next(err))
})


router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

module.exports = router;