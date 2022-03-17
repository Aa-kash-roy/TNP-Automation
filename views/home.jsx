import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import mongoose from "mongoose"
import StudentProfileModel from "../StudentProfile/models/StudentProfile.js"


export default function StudentProfile(props){
  // try{

    // const [a, b] = useState([])


    // useEffect(() => {
    //   console.log("RAAA")
    //   getRecord()
    //   let record = 
    //   b(record);
    //   console.log(a);
    //   console.log(props.enrollmentNumber);
    // }, [])

    // console.log("AA")
    // console.log(a)
    return(
        <div className="container">
        <div className="main-body">
        
              <nav aria-label="breadcrumb" className="main-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
        
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                        <div className="mt-3">
                          <h4>{props.record.enrollmentNumber}</h4>
                          <p className="text-secondary mb-1">4th Year</p>
                          <p className="text-muted font-size-sm">Computer Science Engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                        <span className="text-secondary">https://akashkumar.com</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                        <span className="text-secondary">akshkmr</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><img src="../../public/img/linkedin.png" width="23" height="23" style={{marginRight: 10+'px'}}/>Linkedin</h6>
                        <span className="text-secondary">Akash Kumar</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"> <img src="../../public/img/microsoft.png" width="23" height="23" style={{marginRight: 10+'px'}}/>Microsoft</h6>
                        <span className="text-secondary">Research Intern</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><img src="../../public/img/google.png" width="23" height="23" style={{marginRight: 10+'px'}}/>Google</h6>
                        <span className="text-secondary">Software Engineer Intern</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary">You have not been placed yet.</span>
                      </li>
                    </ul>
                  </div>

                </div>




                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Akash Kumar
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          akashkumar@gmail.com
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">CGPA</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          7.2
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          9998889999
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Nagpur, Maharashtra
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-12">
                          <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gutters-sm">

                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">

                          <ul className="list-group list-group-flush">

                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                              <span className="text-secondary">ACM-ICPC 2020 World Finalist</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                              <span className="text-secondary">Runner up at Smart India Hackathon</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                              <span className="text-secondary">Google Summer of Code 2020</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Enhancing Privacy Preservation in Speech Data Publishing</a></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Touch Sensing for a Projected Screen Using Slope Disparity Gating</a></span>
                      </li>

                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">

                          <ul className="list-group list-group-flush">

                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Handwritten Character Recognition Using Neural Networks</a></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Codeforces Virtual Contest Creator</a></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Rainfall Prediction using K-Neighbours classNameification</a></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">News-App using Django</a></span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <span className="text-secondary"> <a href="www.google.com">Inventory Management System</a></span>
                      </li>


                          </ul>

                          
                        </div>
                      </div>
                    </div>
                  </div>



                </div>
              </div>

            </div>
        </div>
    )
    // } catch (e){
    //   return "LL"
      // console.log(e.message)
    // }
}









