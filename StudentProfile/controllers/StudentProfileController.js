import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import StudentProfile from "../../views/home.jsx"

const router = express.Router();

router.get('/:id', (req, res, next) => {
    let reactComp = renderToString(<StudentProfile/>);
    res.render("home", {reactApp: reactComp});
})

module.exports = router;