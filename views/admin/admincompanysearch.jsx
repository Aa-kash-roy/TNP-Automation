import React from "react"
import ReactDOM from "react-dom"
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SearchHeader from '../../components/SearchHeader'

function noResult(){
    return(
        <div className="no-results">
            No Companies found :(
        </div>
    )
}

function resultRow(data, number){
    let image = "/img/companies/" + data.name.toLowerCase() + ".png";
    let alternate = "/img/companies/" + "linkedin" + ".png";
    return (
      <div className="admin-search-page-container05">
        <div className="admin-search-page-container07">
            <span className="search-page-text01">{number}</span>
            <img
            src={image}
            className="admin-search-page-image2"
            />
            <span className="admin-search-page-text02">{data.name}</span>
            <span className="admin-search-page-text02">{data.website}</span>
            <span className="admin-search-page-text02">{data.email}</span>
            <span className="admin-search-page-text02">{data.phone}</span>
            <span className="search-page-text03"><a href={data.id}>Company Profile</a></span>
        </div>
        <button type="button" className="search-page-button1 button" onClick={test}>EDIT</button>
        <button type="button" className="search-page-button1 button" onClick={test}>DELETE</button>
      </div>
    )
}

function results(records){
    let count = 0;
    const rows = records.map((r, index) => {
        count += 1;
        return resultRow(r, count)})

        return rows;
    }

function test(){
  console.log("WORKING")
}


export default function AdminCompanySearch(props){
    
    console.log("AA");
    console.log(props);
    return(
        <div>

      <div className="search-page-container">

          <SearchHeader/>
        
          <form action="/admin/companysearch" method="GET">
        <div className="search-page-container03"></div>
        <div className="search-page-container04">
          <div className="search-page-container05">
            <input
              type="text"
              placeholder="Search Company"
              className="search-page-textinput input"
              name='name'
              autoComplete="off"
            />
            <button className="search-page-button1 button">
              <span className="search-page-text">SEARCH</span>
            </button>
            <button className="search-page-button1 button" type="button" onClick={test}>
            <span className="search-page-text">ADD COMPANY</span>
              </button>
          </div>
          <div className="search-page-container06">

          {props.searchParam && props.records.length == 0 && noResult()}
            {props.searchParam && props.records.length != 0 && results(props.records)}
        

          </div>
        </div>
        </form>



      </div>

    </div>
    )
}

