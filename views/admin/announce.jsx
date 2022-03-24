import React from "react"



function attachmentComp(number, remove){
    console.log(number);
    return(
        <div>
            <input type="file" id={number} name="attachments"/>
            <button type="button" onClick={console.log("CLICKED")} id="SOMETHING" name='bb'>Remove</button>
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

export default function Announce(){
    let [attachNo, setAttachNo] = React.useState(0);
    let [attachments, setAttachments] = React.useState([])


    function addAttachment(){
        setAttachNo(attach => attach+1)
    }

    function remove(number){
        setAttachments(attach => attach.splice(number, 1))
        setAttachNo(attach => attach-1)
    }

    return (
        <div>
            <form action="/admin/announce" method="POST" encType="multipart/form-data">
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
                <button onClick={addAttachment} type="button" name='aa' id="SOMETHINGELSE">Add attachment</button>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}