import React from "react"
import ReactDOM from "react-dom"
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function noResult(){
    return(
        <div className="no-results">
            No Companies found :(
        </div>
    )
}

function resultRow(data, number){
    return (
        <div className="row" style={{cursor: "pointer"}}>
            <div className="number-column">{number}</div>
            <div className="company-column">{data.name}</div>
            <div className="logo-column">
                <img src={"/img/companies/" + data.name.toLowerCase() + ".png"} className="logo"/>
            </div>
            <div className="id-column">
                <a  href={data.id}>{data.id}</a>
            </div>
        </div> 
    )
}

function results(records){
    let count = 0;
    const rows = records.map(r => {
        count += 1;
        return <li key={r.id}>{resultRow(r, count)}</li>
    })

    // console.log(rows)
    return(
        <div>
            <ul className="unordered-list">
                {rows}
            </ul>
        </div>
    )
}


export default function CompanySearch(props){
    
    console.log("AA");
    console.log(props);
    return(
        <div>
            <form action="/company/search" method="GET">
                <div id="name" className="search-wrapper">
                    <input className="search-bar" type="search" name="name" placeholder="Search for a Company" autoComplete="off"/>
                </div>
                <br/>
            </form>
            {props.searchParam && props.records.length == 0 && noResult()}
            {props.searchParam && props.records.length != 0 && results(props.records)}
        </div>
    )
}

