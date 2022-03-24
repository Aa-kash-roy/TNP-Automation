import React from "react"


function attachmentComp(number){
    return(
        <div>
            <input type="file" id={number} name="attachments"/>
            <button>Remove</button>
        </div>
    )
}

function createComp(number){
    let rows = []
    for(let i=0; i<number; i++){
        rows.push(attachmentComp(number))
    }
    return rows
}

export default function Announce(){
    let [attachNo, setAttachNo] = React.useState(0);
    let [attachments, setAttachments] = React.useState([])

    function addAttachment(){
        setAttachNo(attach => attach+1)
    }

    return (
        <div>
            <form action="/admin/announce" method="POST">
                Insert text
                <br/>
                <textarea name="message">
                </textarea>
                <br/>
            
                Attachments
                <br/>
                {createComp(attachNo)}
                <button onClick={addAttachment} type="button">Add attachment</button>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}