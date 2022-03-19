import React from "react"

export default function Test(){
    const [number, setNumber] = React.useState(0);

    function add(){
        console.log(number)
        setNumber(number => number+1)
    }
    
    return(
        <div>
            <button onClick={add}>Click Me</button>
            <p>{number}</p>
        </div>
    )
}