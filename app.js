const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', function(req, res) {

    res.render("home");
    // console.log(posts);r
})

app.get('/user', function(req, res){
    res.render('user');
})

app.get('/portal', function(req, res){
    res.render('portal')
})

app.get('/company', function(req, res){
    res.render('company')
})

app.listen(3001, function () {
    console.log('Server is running at port 3000')
})
