import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import TestFun from "./views/portal.jsx"
import bodyParser from "body-parser"

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })) //not sure if this will cause runtime errors
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.render("home");
})

app.get('/user', function(req, res){
    res.render('user');
})

app.get('/portal', function(req, res){
    let reactComp = renderToString(<TestFun/>);
    res.render('portal', {reactApp: reactComp});
})

app.get('/company', function(req, res){
    res.render('company')
})

app.listen(3000, function () {
    console.log('Server is running at port 3000')
})

