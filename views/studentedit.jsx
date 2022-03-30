import React, {useState, useEffect} from "react"
import StudentHeader from "../components/StudentHeader.jsx"


function experienceRow(item, index){
  const logo = "/img/companies/" + item.company.toLowerCase() + ".png"
  return(
    <div className="student-profile-container13">
      <input className="student-profile-text16" defaultValue={item.company} name="company" size="10"/>
      <input className="student-profile-text17" defaultValue={item.designation} size="10" name="designation"/>
    </div>
  )
}

function achievementsRow(item, index){
  return (
    <div className="student-profile-container25">
      <input className="student-profile-text32" defaultValue={item.name} size="20" name="achievements"/>
    </div>
  )
}

function publicationsRow(item, index){
    return (
      <div className="student-profile-container25">
        <input className="student-profile-text32" defaultValue={item.name} size="20" name="publications"/>
      </div>
    )
  }

function studentSocialRow(fieldName, fieldValue){
  const logo = "/img/student_social/" + fieldName.toLowerCase() + ".png"
  return (
    <div className="student-profile-container09">
      <img
        alt="image"
        src={logo}
        className="student-profile-image03"
      />
      <span className="student-profile-text10">{fieldName}</span>
      <input className="student-profile-text11" name={fieldName.toLowerCase()} defaultValue={fieldValue} size="15"/>
    </div>
  )
}

function studentDetailsRowEditable(fieldName, fieldValue){
  const image = "/img/student_details/" + fieldName.toLowerCase() + ".png"
  return (
    <div className="student-profile-container18">
      <img
        alt="image"
        src={image}
        className="student-profile-image09"
      />
      <span className="student-profile-text22">{fieldName}</span>
      <input className="student-profile-text23" name={fieldName.toLowerCase()} defaultValue={fieldValue} size="15"/>
    </div>
  )
}

function studentDetailsRowNonEditable(fieldName, fieldValue){
  const image = "/img/student_details/" + fieldName.toLowerCase() + ".png"
  return (
    <div className="student-profile-container18">
      <img
        alt="image"
        src={image}
        className="student-profile-image09"
      />
      <span className="student-profile-text22">{fieldName}</span>
      <span className="student-profile-text23">{fieldValue}</span>
    </div>
  )
}


export default function StudentProfileEdit(props){

  return (
    <div>
      

      <div className="student-profile-container">
        <StudentHeader/>
        
        <div className="student-profile-container04">
          <form className="student-profile-form" action={"/student/" + props.record.enrollmentNumber} method="POST" encType="multipart/form-data">
            <div className="student-profile-container05">
              <div className="student-profile-profile-container">
                <img
                  alt="image"
                  src="/img/clipart2935933-200w.png"
                  className="student-profile-image02"
                />
                <div className="student-profile-container06">
                  <span className="student-profile-text">Name:</span>
                  <span className="student-profile-text01">Enrolment no:</span>
                  <span className="student-profile-text02">Branch:</span>
                  <span className="student-profile-text03">Semester:</span>
                  <span className="student-profile-text04">Year of Passing:</span>
                </div>
                <div className="student-profile-container07">
                  <span className="student-profile-text05">{props?.record?.studentInfo?.name}</span>
                  <span className="student-profile-text06">{props?.record?.enrollmentNumber}</span>
                  <span className="student-profile-text07">{props?.record?.studentInfo.branch}</span>
                  <span className="student-profile-text08">{props?.record?.studentInfo.semester}</span>
                  <span className="student-profile-text09">{props?.record?.studentInfo.passingYear}</span>
                </div>
              </div>
              <div className="student-profile-container08">
                
                {studentSocialRow("Website", props?.record?.studentSocial.website.name)}
                {studentSocialRow("Github", props?.record?.studentSocial.github.name)}
                {studentSocialRow("Linkedin", props?.record?.studentSocial.linkedin.name)}

              </div>
              <div className="student-profile-container12">
                {props?.record?.internships.map((item, index) => {return experienceRow(item, index)})}
              </div>
            </div>
            <div className="student-profile-container16">
              <div className="student-profile-container17">
                {studentDetailsRowNonEditable("Full Name", props?.record?.studentInfo.name)}
                {studentDetailsRowEditable("Email", props?.record?.studentInfo.personalMail)}
                {studentDetailsRowNonEditable("CGPA", props?.record?.studentInfo.cgpa)}
                {studentDetailsRowEditable("Mobile Number", props?.record?.studentInfo.mobile)}
                {studentDetailsRowEditable("Address", props?.record?.studentInfo.address)}
              </div>


              <div className="student-profile-container23">
                <div className="student-profile-container24">
                  {props?.record?.achievements.map((item, index) => {return achievementsRow(item, index)})}
                </div>
                <div className="student-profile-container30">
                  {props?.record?.publications.map((item, index) => {return publicationsRow(item, index)})}
                </div>
              </div>

              <button className="student-profile-button1 button" type="submit">
                <span className="student-profile-text42">
                  FINISH EDIT
                </span>
              </button>
              <input
                type="file"
                placeholder="placeholder"
                className="student-profile-textinput input"
                name="resume"
                accept="application/pdf"
              />

              


            </div>
          </form>

          
          
        </div>
      </div>
    </div>
  )
}

