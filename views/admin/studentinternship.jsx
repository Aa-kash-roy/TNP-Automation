import React from "react"


export default function StudentInternship(props){
    return (
        <div>
            <span>{props?.record?.internshipCompleted}.</span>
        </div>
    )
}