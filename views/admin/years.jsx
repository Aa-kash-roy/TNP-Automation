import React from "react"

function resultRow(record, index){
    return (
        <div>

            <span>{index}   </span>
            <span>{record.enrollmentNumber}   </span>
            <span>{record.studentInfo.name}   </span>
            <span>{record.studentInfo.cgpa}   </span>
            <span>{record.studentInfo.mobile}   </span>
            <span>{record.backlogs}   </span>
            <span>{record.studentInfo.branch}   </span>
            <span><a href={'/internship/' + record.enrollmentNumber}> Completed{record.internship.internshipCompleted}</a>   </span>
            <span><a href={'/placement/' + record.enrollmentNumber}> Placed{record.placement.isPlaced}</a>   </span>
            <span>Profile</span>
        </div>
    )
}

export default function YearDisplay(props){
    return (
        <div>
            Year 3 details
            <br/>
            SrNo. RollNo. Name CGPA Mobile Backlogs Branch InternshipStatus PlacementStatus Profile
            <br/>
            {props?.records?.map((item, index) => resultRow(item, index+1))}
        </div>
    )
}