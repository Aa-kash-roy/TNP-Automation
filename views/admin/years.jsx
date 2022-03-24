import React from "react"

function resultRow(record, index){
    return (
        <div>
            <span>{index}</span>
            <span>{record.enrollmentNumber}</span>
            <span>{record.studentInfo.name}</span>
            <span>{record.studentInfo.cgpa}</span>
            <span>{record.backlogs}</span>
            <span>Completed</span>
            <span>Placed</span>
            <span>Profile</span>
        </div>
    )
}

export default function YearDisplay(props){
    return (
        <div>
            {props?.records?.map((item, index) => resultRow(item, index+1))}
        </div>
    )
}