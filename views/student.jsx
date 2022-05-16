import React, {useState, useEffect} from "react"
import StudentHeader from "../components/StudentHeader.jsx"


function experienceRow(item){
  const logo = "/img/companies/" + item.company.toLowerCase() + ".png"
  return(
    <div className="student-profile-container13">
      <img
        alt="image"
        src={logo}
        className="student-profile-image06"
      />
      <span className="student-profile-text16">{item.company}</span>
      <span className="student-profile-text17">{item.designation}</span>
    </div>
  )
}

function achievementsRow(item){
  return (
    <div className="student-profile-container25">
      <span className="student-profile-text32">
        {item.name}
      </span>
    </div>
  )
}

function publicationsRow(item){
  return (
    <div className="student-profile-container25">
      <span className="student-profile-text32">
        {item.name}
      </span>
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
      <span className="student-profile-text11">
        {fieldValue}
      </span>
    </div>
  )
}

function studentDetailsRow(fieldName, fieldValue){
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

function edit(){
  return(
    <a href={"/student/edit"}>

              <button className="student-profile-button1 button" type="button">
                  <span className="student-profile-text42">
                    EDIT PROFILE
                  </span>
              </button>
              </a>
  )
}

export default function StudentProfile(props){

  return (
    <div>
      

      <div className="student-profile-container">
        <StudentHeader/>
        
        <div className="student-profile-container04">
          <form className="student-profile-form" action={"/student/resume/" + props.record.enrollmentNumber} method="POST">
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
                {props?.record?.internships.map(item => {return experienceRow(item)})}
              </div>
            </div>
            <div className="student-profile-container16">
              <div className="student-profile-container17">
                {studentDetailsRow("Full Name", props?.record?.studentInfo.name)}
                {studentDetailsRow("Email", props?.record?.studentInfo.personalMail)}
                {studentDetailsRow("CGPA", props?.record?.studentInfo.cgpa)}
                {studentDetailsRow("Mobile Number", props?.record?.studentInfo.mobile)}
                {studentDetailsRow("Address", props?.record?.studentInfo.address)}
              </div>


              <div className="student-profile-container23">
                <div className="student-profile-container24">
                  {props?.record?.achievements.map(item => {return achievementsRow(item)})}
                </div>
                <div className="student-profile-container30">
                  {props?.record?.publications.map(item => {return publicationsRow(item)})}
                </div>
              </div>

              {props.linkid == props.cookieid && edit()}


              

              <button className="student-profile-button2 button">
                  <span className="student-profile-text43">DOWNLOAD RESUME</span>
              </button>
          
            </div>
          </form>

          
          
        </div>
      </div>
    </div>
  )
}

