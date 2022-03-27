import React from "react"



function attachmentComp(number, remove){
    console.log(number);
    return(
        <div>
            <input type="file" id={number} name="attachments"/>
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
        setAttachNo(attach => Math.max(0, attach-1))
    }

    return (
        <div>
            <form action="/admin/announce" method="POST" encType="multipart/form-data">
                Send To
                <br/>
                <div>
                    <input type="checkbox" id="year" name="year" value="1" defaultChecked/>
                    <label> 1st Year </label>
                    <input type="checkbox" id="year" name="year" value="2" defaultChecked/>
                    <label> 2nd Year </label>
                    <input type="checkbox" id="year" name="year" value="3" defaultChecked/>
                    <label> 3rd Year </label>
                    <input type="checkbox" id="year" name="year" value="4" defaultChecked/>
                    <label> 4th Year </label>
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
                <button onClick={addAttachment} type="button" name='add' id="add">Add attachment</button>
                <button type="button" onClick={remove} id="remove" name='remove'>Remove attachment</button>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}