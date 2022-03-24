import React from "react"



function attachmentComp(number, remove){
    console.log(number);
    return(
        <div>
            <input type="file" id={number} name="attachments"/>
            <button type="button" onClick={remove}>Remove</button>
        </div>
    )
}

function createComp(number, remove){
    let rows = []
    for(let i=0; i<number; i++){
        rows.push(attachmentComp(i, remove))
    }
    return rows
}

export default function NewPlacement(){
    let [attachNo, setAttachNo] = React.useState(0);
    let [attachments, setAttachments] = React.useState([])

    function addAttachment(){
        setAttachNo(attach => attach+1)
    }

    function remove(number){
        setAttachments(attach => attach.splice(number, 1))
        setAttachNo(attach => attach-1)
    }

    function removeLogo() 
    { 
        var oldInput = document.getElementById('logo'); 

        var newInput = document.createElement("input"); 

        newInput.type = "file"; 
        newInput.id = oldInput.id; 
        newInput.name = oldInput.name; 
        oldInput.parentNode.replaceChild(newInput, oldInput); 
    }

    return (
        <div>
            <form action="/admin/newplacement" method="POST" encType="multipart/form-data">


                CompanyName
                <input type="text"/>
                <br/>

                Website
                <input type="text"/>
                <br/>

                Compensation/CTC
                <input type="text"/>
                <br/>

                Phone Number
                <input type="text"/>
                <br/>

                Logo
                <div>
                    <input type="file" id='logo' name="logo"/>
                    <button type="button" onClick={removeLogo}>Remove</button>
                </div>

                Subject
                <br/>
                <input type="text" name="subject"/>
                <br/>
                Insert text
                <br/>
                <textarea name="message">
                </textarea>
                <br/>
            
                Attachments
                <br/>
                {createComp(attachNo, remove)}
                <button onClick={addAttachment} type="button">Add attachment</button>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}