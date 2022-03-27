import React from "react"
// import DateTimePicker from 'react-datetime-picker';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


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

export default function NewPlacement(){
    let [attachNo, setAttachNo] = React.useState(0);
    const [selectedDate, handleDateChange] = React.useState(new Date())


    function addAttachment(){
        setAttachNo(attach => attach+1)
    }

    function remove(number){
        setAttachNo(attach => Math.max(0, attach-1))
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

    function sumbit(){
        let date=document.getElementById('datetime')
        console.log(date)
    }

    return (
        <div>
            
            <form action="/admin/newplacement" method="POST" encType="multipart/form-data">


                CompanyName
                <input type="text" name="companyname"/>
                <br/>

                Compensation/CTC
                <input type="text" name="compensation"/>
                <br/>

                Logo
                <div>
                    <input type="file" id='logo' name="logo"/>
                    <button type="button" onClick={removeLogo}>Remove</button>
                </div>

                <div>
                    Application Criteria
                    <br/>
                    Minimum required CGPA <input type="number" name="cgpa" min="0" max="10" step=".01" defaultValue="0"/>
                    <br/>
                    Maximum allowable backlogs <input type="number" name="backlogs" min="0" defaultValue="0"/>
                    <br/>
                    Gender
                    <input type="checkbox" id="gender" name="gender" value="male" defaultChecked/>
                    <label> Male </label>
                    <input type="checkbox" id="gender" name="gender" value="female" defaultChecked/>
                    <label> Female </label>
                    <br/>
                    Allow all students
                    <input type="radio" id="allowall" name="allowall" value="yes" defaultChecked/>
                    <label >Yes</label>
                    <input type="radio" id="allowall" name="allowall" value="no"/>
                    <label >No</label>
                    <br/>
                    Role
                    <input type="checkbox" id="role" name="role" value="intern" defaultChecked/>
                    <label> Intern </label>
                    <input type="checkbox" id="role" name="role" value="fulltime" defaultChecked/>
                    <label> Full Time </label>
                    <br/>
                    Eligible Years
                    <input type="checkbox" id="year" name="year" value="third" defaultChecked/>
                    <label> 3rd Years </label>
                    <input type="checkbox" id="year" name="year" value="fourth" defaultChecked/>
                    <label> 4th Years </label>
                    <br/>
                    Application End Time
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker value={selectedDate} onChange={handleDateChange} id='datetime' name='datetime'/>
                    </MuiPickersUtilsProvider>
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
                <button type="button" onClick={remove}>Remove attachment</button>
                <br/>
                <input type="submit"/>
                {/* <DateTimePicker onChange={onDateChange} value={dateValue} /> */}
            </form>
        </div>
    )
}