import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Test from "./test.jsx"

const router = express.Router();

router.get('/test', (req, res, next) => {
    const reactComp = renderToString(<Test/>);
    res.render("./test", {reactApp: reactComp});
})

module.exports = router;