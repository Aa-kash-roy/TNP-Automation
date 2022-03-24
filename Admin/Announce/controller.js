import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Announce from "../../views/admin/announce.jsx"

const router = express.Router();

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<Announce/>);
    res.render("./admin/announce", {reactApp: reactComp});
})

router.post('/', (req, res, next) => {
    console.log("AaA")
    console.log(req.body)
})

module.exports = router;