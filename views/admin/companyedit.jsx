import React, {useState, useEffect} from "react"
import CompanyHeader from "../../components/CompanyHeader.jsx"

function yearDataRow(item){
  return (
    <div className="company-profile-container14">
      <span className="company-profile-text08">{item.year}</span>
      <span className="company-profile-text09">{item.students}</span>
      <span className="company-profile-text10">{item.ctc}</span>
    </div>
  )
}

function newRow(item){
    return (
      <div className="company-profile-container14">
          <span className="company-profile-text08">
            <input size="10" name="newyear"/>
          </span>
        <span className="company-profile-text09">
            <input size="10" name="newnumber"/>
        </span>
        <span className="company-profile-text10">
            <input size="10" name="newctc"/>
        </span>
      </div>
    )
  }

export default function CompanyEdit(props){
    console.log("BB")
    console.log(props)
    return(
            
      <div className="company-profile-container">
        <CompanyHeader/>
 
        <div className="company-profile-container04">
          <form className="company-profile-form" action={"/admin/edit/company/" + props.record.id} method="POST" encType="multipart/form-data">
            <div className="company-profile-container05">
              <div className="company-profile-profile-container">
                <div className="company-profile-container06">
                  <img
                    src={"/img/companies/" + props.record.name.toLowerCase() + ".png"}
                    alt=""
                    className="company-profile-image2"
                  />
                </div>
                <div className="company-profile-container07">
                  <span className="company-profile-text">
                    <input defaultValue={props.record.name} size="10" name="newname"/>
                  </span>
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
                    <input defaultValue={props.record.companySocial.website.name} size="10" name="companywebsite"/>
                  </span>
                </div>
                <div className="company-profile-container10">
                  <img
                    alt="image"
                    src="/img/company_social/linkedin.png"
                    className="company-profile-image4"
                  />
                  <span className="company-profile-text03">Linkedin</span>
                  <span className="company-profile-text04">
                      <input defaultValue={props.record.companySocial.linkedin.name} size="10" name="companylinkedin"/></span>
                </div>
                <div className="company-profile-container09">
                  <img
                    alt="image"
                    src="/img/company_social/mail.png"
                    className="company-profile-image3"
                  />
                  <span className="company-profile-text01">Mail</span>
                  <span className="company-profile-text02">
                    <input defaultValue={props.record.email} size="10" name="companymail"/>
                  </span>
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
                {newRow()}
              </div>

              <div className="company-profile-container20">
              <button className="company-profile-button1 button">
                <span className="company-profile-text23">FINISH EDIT</span>
              </button>
              <input
                type="file"
                id="myfile"
                name="logo"
                placeholder="placeholder"
                className="company-profile-textinput input"
              />
            </div>
              
            </div>
          </form>
        </div>
      </div>
    )
}