import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import PlacementReports from "../../views/admin/placementreports.jsx"

const router = express.Router();


router.get('/', (req, res, next) => {
    const reactComp = renderToString(<PlacementReports/>);
    res.render("./admin/placementreports", {reactApp: reactComp});
})

module.exports = router;