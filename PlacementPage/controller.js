import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import Placement from "../views/placementpage.jsx"
import newplacements from "../Admin/NewPlacement/models.js"

const router = express.Router();

router.get('/', (req, res, next) => {
    newplacements.find({}).lean()
    .then(response => {
        const reactComp = renderToString(<Placement records={response}/>);
        res.render("./placementpage", {reactApp: reactComp});
    })
    .catch(err => console.error(err));
})

module.exports = router