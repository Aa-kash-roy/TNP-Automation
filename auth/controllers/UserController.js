const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js')
const validateUser = require('../helpers/helper.js')

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/register/otpvalidation', (req, res) => {
    res.render('otpvalidation')
})

router.post('/register', async(req, res, next) => {
    console.log(req.body)
    const {password} = req.body
    
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body)
        .catch(err => next(err))
    validateUser.sendOTPtoemail(req.body.email);
    res.redirect('/users/register/otpvalidation')
})

router.post('/register/otpvalidation', (req, res, next) => {

    userServices.authenticateUser(req.body).then(
        res.redirect('/users/login')
    )
    .catch(err=> next(err))
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('login/forget-password', (req, res) => {
    res.render('')
})

router.post('/login/forget-password', (req, res) =>{
    validateUser.sendOTPtoemail(req.body.email);
    res.redirect('/users/login/setpassword');
});

router.get('/login/setpassword', (req, res) =>{
    res.render();
})

router.post('/login/setpassword', (req, res) =>{
    
    userServices.setNewPassword(req.body).then(
        res.send("Password Updated !!")
    )
})

router.post('/login', (req, res, next) => {
    const { email, password} = req.body;
    userServices.login({email, password}).then(user => {
            user ? res.json(user) : res.json({ error: 'Username or password is incorrect' });
        }
    ).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

module.exports = router;