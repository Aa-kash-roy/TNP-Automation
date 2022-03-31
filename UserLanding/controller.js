import React from "react"
import express from "express"
import UserLanding from "../views/landing-page.jsx"
import {renderToString} from "react-dom/server.js"

const router = express.Router();

router.get('/', async (req, res, next) => {
    const reactComp = renderToString(<UserLanding/>);
    res.render("./landing-page", {reactApp: reactComp});
})

module.exports = router;