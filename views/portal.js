import React from "react"
import ReactDOM from "react-dom"
// import { renderToStaticMarkup } from "react-dom/server.js";

export default function TestFun(){
    return(
        // <p> HI </p>
        React.createElement('p', null, "HI")
    )
}

// ReactDOM.render(TestFun, document.getElementById("body"));

// process.stdout.write(renderToStaticMarkup(TestFun);
