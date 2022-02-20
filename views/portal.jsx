import React from "react"
import ReactDOM from "react-dom"

export default function TestFun(){
    return(
        <div>
            <h1>Login</h1>
            <form action="/portal" method="post">
                <div id="input_name">
                    <input name="name_input" type="text" placeholder="Enrollment Number"/>
                </div>
                <br/>
                <div id="input_password">
                    <input name="password_input" type="password" placeholder="Password"/>
                </div>
                <br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

