import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminLanding from "../../views/admin/landing.jsx"
import multer from "multer"
import xlsx from "xlsx"


// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './excel/')
//     },
//     filename: function(req, file, cb){
//         cb(null, 'newdb.xlsx')
//     }
// });
const storage = multer.memoryStorage();

const upload = multer({ storage: storage});
const router = express.Router();

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<AdminLanding/>);
    res.render("./admin/landing", {reactApp: reactComp});
})

router.post('/', upload.single('newdb'), (req, res, next) => {
    console.log(req.file)
    if(!req.file){
        res.redirect('/admin')
    }
    else{
        const file = xlsx.read(req.file.buffer)
        let data = []
  
        const sheets = file.SheetNames
        for(let i = 0; i < sheets.length; i++)
        {
            const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
            // console.log(temp)
            console.log(file.SheetNames[i])
        }
        res.redirect('/admin')
    }

})

module.exports = router;