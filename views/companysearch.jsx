import React from "react"
import ReactDOM from "react-dom"

function noResult(){
    return(
        <div>
            No Companies found.
        </div>
    )
}

function results(records){
    console.log(records)
    const rows = records.map(r => { return <p key={r.id}>{r.name}</p>})
    console.log(rows)
    return(
        <div>
            {rows}
        </div>
    )
}

export default function CompanySearch(props){
    return(
        <div>
            <h1>Search</h1>
            <form action="/company/search" method="GET">
                <div id="name">
                    <input name="name" placeholder="Search"/>
                </div>
                <br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {props.searchParam && props.records.length == 0 && noResult()}
            {props.searchParam && props.records.length != 0 && results(props.records)}
        </div>
    )
}

