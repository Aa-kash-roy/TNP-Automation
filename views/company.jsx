import React, {useState, useEffect} from "react"
import CompanyHeader from "../components/CompanyHeader.jsx"

function yearDataRow(item){
  return (
    <div className="company-profile-container14">
      <span className="company-profile-text08">{item.year}</span>
      <span className="company-profile-text09">{item.students}</span>
      <span className="company-profile-text10">{item.ctc} LPA</span>
    </div>
  )
}

export default function CompanyProfile(props){

    return(
            
      <div className="company-profile-container">
        <CompanyHeader/>
 
        <div className="company-profile-container04">
          <form className="company-profile-form">
            <div className="company-profile-container05">
              <div className="company-profile-profile-container">
                <div className="company-profile-container06">
                  <img
                    src={"/img/companies/" + props.record.name.toLowerCase() + ".png"}
                    alt="image"
                    className="company-profile-image2"
                  />
                </div>
                <div className="company-profile-container07">
                  <span className="company-profile-text">{props.record.name}</span>
                </div>
              </div>
              <div className="company-profile-container08">
                <div className="company-profile-container09">
                  <img
                    alt="image"
                    src="/img/company_social/website.png"
                    className="company-profile-image3"
                  />
                  <span className="company-profile-text01">Website</span>
                  <span className="company-profile-text02">
                    {props.record.companySocial.website.name}
                  </span>
                </div>
                <div className="company-profile-container10">
                  <img
                    alt="image"
                    src="/img/company_social/linkedin.png"
                    className="company-profile-image4"
                  />
                  <span className="company-profile-text03">Linkedin</span>
                  <span className="company-profile-text04">{props.record.companySocial.linkedin.name}</span>
                </div>
              </div>
            </div>
            <div className="company-profile-container11">
              <div className="company-profile-container12">
                <div className="company-profile-container13">
                  <span className="company-profile-text05">Year</span>
                  <span className="company-profile-text06">
                    Number of Students Placed
                  </span>
                  <span className="company-profile-text07">
                    Average CTC offered
                  </span>
                </div>
                
                {props.record.placementData.map(item => {return yearDataRow(item)})}

              </div>
            </div>
          </form>
        </div>
      </div>
    )
}