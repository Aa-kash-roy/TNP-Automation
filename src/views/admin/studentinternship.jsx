import React from "react"

function removeOfferLetter() 
    { 
        var oldInput = document.getElementById("offerletter"); 
    
        var newInput = document.createElement("input"); 
    
        newInput.type = "file"; 
        newInput.id = oldInput.id; 
        newInput.name = oldInput.name; 
        oldInput.parentNode.replaceChild(newInput, oldInput); 
    }


function displayEmpty(field){
    console.log(field)
    
    

    return(
        <div>
            <input type="file" name={field} id="AA"/>
            <button type="button" onClick={removeFile(field)}>Remove</button>
        </div>
    )
}

function displayPDF(field, internship, key){
    return(
        <div>
            {field}
            {internship[key]?"AA":displayEmpty(field)}
        </div>
    )
}

export default function StudentInternship(props){
    console.log(props)

    return (
        <div>
            <form action={"/internship/"+props?.record?.enrollmentNumber} method="POST" encType="multipart/form-data">
                <span>{props?.record?.internship?.internshipCompleted}.</span>
                <br/>
                <span>{props?.record?.internship?.company}</span>
                <br/>
                <span>{props?.record?.internship?.designation}</span>
                <br/>
                <span>{props?.record?.internship?.semester}</span>
                <br/>

                <div>
                    <input type="file" id='offerletter' name="logo"/>
                    <button type="button" onClick={removeOfferLetter}>Remove</button>
                </div>

                {/* {displayPDF("Offer Letter", props.record.internship, "offerLetter")} */}
                {/* {displayPDF("Assessment Form", props?.record?.internship, "internshipCompetion")}
                {displayPDF("Completion Certificate", props?.record?.internship, "internshipAssessment")} */}
            </form>
            
        </div>
    )
}