import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import NewPlacement from "../../views/admin/newplacement.jsx"

const router = express.Router();

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<NewPlacement/>);
    res.render("./admin/announce", {reactApp: reactComp});
})

module.exports = router;