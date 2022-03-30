import React from "react"

export default function Test(props){
    const [number, setNumber] = React.useState(0);

    function add(){
        console.log(number)
        setNumber(number => number+1)
    }
    
    return(
        <div>
            {props.number} <br/>
            <button onClick={add}>Click Me</button>
            <p>{number}</p>
        </div>
    )
}