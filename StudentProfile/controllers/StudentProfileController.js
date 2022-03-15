import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import StudentProfile from "../../views/home.jsx"

const router = express.Router();

router.get('/:id', (req, res, next) => {
    // try{
    const reactComp = renderToString(<StudentProfile enrollmentNumber={req.params.id}/>);
    // console.log(reactComp)
    res.render("./home", {reactApp: reactComp});
    // } catch (e){
    //     console.log(e)
    // }
})

module.exports = router;