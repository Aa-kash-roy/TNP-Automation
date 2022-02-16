import express from "express";
import ReactDOMServer from "react-dom/server.js"
import TestFun from "./views/portal.js"

// const bodyParser = require('body-parser')
// const ejs = require('ejs')
// const TestFun = require("./views/portal")
// const renderToString = require("react-dom/server")



const mongoose = require('mongoose')
const {PORT, MONGO_URL} = require('./config');

const app = express()

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// connect to the database
mongoose.connect(MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
});

app.get('/', function(req, res) {

    res.render("home");
    // console.log(posts);r
})

app.get('/user', function(req, res){
    res.render('user');
})

app.get('/portal', function(req, res){
    let reactComp = ReactDOMServer.renderToString(TestFun());
    res.render('portal', {reactApp: reactComp});
})

app.get('/company', function(req, res){
    res.render('company')
})


app.listen(3001, function () {
    console.log('Server is running at port 3001')
})

