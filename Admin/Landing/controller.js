import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminLanding from "../../views/admin/landing.jsx"

const router = express.Router();

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<AdminLanding/>);
    res.render("./admin/landing", {reactApp: reactComp});
})

module.exports = router;