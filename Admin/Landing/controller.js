import React from "react"
import express from "express"
import {renderToString} from "react-dom/server.js"
import AdminLanding from "../../views/admin/landing.jsx"
import multer from "multer"
import xlsx from "xlsx"
import corestudentprofiles from "../Years/models.js"
import chartjs from "chartjs"
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
import fs from "fs"
import { Chart } from "chart.js"
import JSZip from "jszip"
import { saveAs } from 'file-saver'
import b64ToBlob from "b64-to-blob"
import { Blob } from 'buffer'

const width = 1024; //px
const height = 800; //px
const canvasRenderService = new ChartJSNodeCanvas({width, height});



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

function chart1(data, labels){
    
    const configuration = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Students',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Student CTC for Placement"
                },
                legend: {
                    display: false
                }
            }
        }
    };
    return configuration
}

function chart2(data, labels){
    // Chart.defaults.global.defaultFontSize = 10
    const configuration = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Students',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        },
        options: {
            xAxes: {
                ticks: {
                    autoSkip: false
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Placement Companies"
                },
                legend: {
                    display: false
                }
            }
        }
    };
    return configuration
}

function chart3(data, labels){
    const configuration = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Status',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                xAxes: {
                    ticks: {
                        autoSkip: false
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Placement/Internship Status"
                },
                legend: {
                    display: false
                }
            }
        }
    };
    return configuration
}

router.get('/report', async (req, res, next) => {
    try{
        let labels = [], data = []
        labels.push('<5LPA')
        let value = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'placement.compensation': {$lt: 5*100000}}
            ]
        })
        data.push(value.length)
        for(var i = 5; i<=19; i++){
            labels.push(i.toString() + 'LPA')
            const value = await corestudentprofiles.find({
                $and: [
                {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
                {'placement.compensation': {$gte: i*100000, $lt: (i+1)*100000}}
                ]
            })
            data.push(value.length)
        }
        labels.push('>20LPA')
        let value2 = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'placement.compensation': {$gte: 20*100000}}
            ]
        })
        data.push(value2.length)


        let labels2=[], data2=[]
        let value3 = await corestudentprofiles.aggregate([

            {
                $match:
                {
                    $or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]
                } 
            },
          
            // Group and count the total of each occurrence for each word
            { $group: { 
              _id: "$placement.company" , 
              count: { "$sum": 1 }
            }}
            
          ]);
        
        for(var i=0; i<value3.length; i++){
            labels2.push(value3[i]._id)
            data2.push(value3[i].count)
        }

        const internPending = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'internship.internshipCompleted': "Pending"}
            ]
        })
        const internCompleted = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'internship.internshipCompleted': "Completed"}
            ]
        })
        const placementPending = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'placement.isPlaced': "Pending"}
            ]
        })
        const placementPlaced = await corestudentprofiles.find({
            $and: [
            {$or: [{'studentInfo.semester': 7,}, {'studentInfo.semester': 8}]},
            {'placement.isPlaced': "Placed"}
            ]
        })
        let data3 = [internPending.length, internCompleted.length, placementPending.length, placementPlaced.length]
        let labels3 = ["Pending Internship", "Completed Internship", "Pending Placement", "Placed"] 

        // console.log(labels)
        // console.log(data)
        // console.log(value3)
        
        const configuration = chart1(data, labels)
        const configuration2 = chart2(data2, labels2)
        const configuration3 = chart3(data3, labels3)

        const imageBuffer = await canvasRenderService.renderToBuffer(configuration);
        const imageBuffer2 = await canvasRenderService.renderToBuffer(configuration2);
        const imageBuffer3 = await canvasRenderService.renderToBuffer(configuration3);

        // fs.writeFileSync('/tmp/mychart.png', imageBuffer);
        // fs.writeFileSync('/tmp/mychart2.png', imageBuffer2);
        // fs.writeFileSync('/tmp/mychart3.png', imageBuffer3);

        var zip = new JSZip();
        zip.file("Package.png", imageBuffer);
        zip.file("Companies.png", imageBuffer2);
        zip.file("Status.png", imageBuffer3)
        const content = await zip.generateAsync({type:"nodebuffer"})
        fs.writeFileSync('/tmp/Charts.zip', content)
        res.download('/tmp/Charts.zip')
    }
    catch (e){

        console.log("ADDA")
        console.log(e);
    }
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
                console.log(file.SheetNames[i])
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
                            compensation: temp[j]["Placement Package"]?parseInt(temp[j]["Placement Package"]):0,
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