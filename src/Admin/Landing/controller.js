import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminLanding from "../../views/admin/landing.jsx"
import multer from "multer"
import xlsx from "xlsx"
import corestudentprofiles from "../Years/models.js"



function getPassingYear(semester){
    const d = new Date();
    let year = d.getFullYear();
    if(semester == 1) return year+4
    else if (semester == 2) return year+3
    else if(semester == 3) return year+3
    else if(semester == 4) return year+2
    else if(semester == 5) return year+2
    else if(semester == 6) return year+1
    else if(semester == 7) return year+1
    else return year
}

const storage = multer.memoryStorage();

const upload = multer({ storage: storage});
const router = express.Router();

router.get('/', (req, res, next) => {
    const reactComp = renderToString(<AdminLanding/>);
    res.render("./admin/landing", {reactApp: reactComp});
})

router.post('/', upload.single('newdb'), async (req, res, next) => {
    try{
        console.log(req.file)
        if(!req.file){
            res.redirect('/admin')
        }
        else{
            const file = xlsx.read(req.file.buffer)
            
            const del = await corestudentprofiles.deleteMany({})

            const sheets = file.SheetNames
            for(let i = 0; i < sheets.length; i++)
            {
                const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
                const semester = parseInt(file.SheetNames[i].charAt(9))
                for(let j=0; j<temp.length; j++){
                    const cr = await corestudentprofiles.create({
                        enrollmentNumber: temp[j]['Roll. No.'],
            
                        studentInfo:{
                            name: temp[j]['Name'],
                            cgpa: temp[j]["CGPA"],
                            semester: semester,
                            branch: temp[j]["Branch"],
                            passingYear: getPassingYear(semester),
                            gender: temp[j]["Gender"],
                            email: temp[j]["Email"]
                        },

                        backlogs: temp[j]["Number of Backlogs"],

                        internship: {
                            company: temp[j]["Internship Company"],
                            designation: temp[j]["Internship Designation"],
                            internshipCompleted: temp[j]["Internship Status"],
                            semester: temp[j]["Internship Semester"]
                        },

                        placement: {
                            company: temp[j]["Placement Company"], 
                            designation: temp[j]["Placement Designation"], 
                            compensation: temp[j]["Placement Package"],
                            isPlaced: temp[j]["Placement Status"]
                        }
                    })
                }
            }
            res.redirect('/admin')
        }
    }
    catch(e){
        console.log(e)
    }

})

module.exports = router;