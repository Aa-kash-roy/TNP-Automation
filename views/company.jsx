import React, {useState, useEffect} from "react"

export default function CompanyProfile(props){
  const [temp, setTemp] = React.useState(0)

  function changeTemp(){
    console.log(temp);
      setTemp(temp => temp+1)
  }

    return(
        <div className="container">
          <button onClick={changeTemp}>{temp} CLICK</button>
    <div className="main-body">
    
          <div className="header">
        <img src="img/iiitnlogo.jpeg"/>
        <a className="active" href="#home">Placement</a>
        <div className="header-right" style={{margin: "10px 0px 0px 0px"}}>
          <a href="#about" className="active">Placement</a>
          <a href="#about" className="active">Profile</a>
          <a href="#contact" className="active">Discussion Forum</a>
          <a href="#logout" className="passive" >Logout</a>
        </div>
      </div>
    
          <div className="row gutters-sm" style={{margin: "20px 0px 0px 0px"}}>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="img/microsoft.png" width="150"/>
                    <div className="mt-3">
                      <h4>{props?.record?.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">https://www.microsoft.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><img src="img/linkedin.png" width="23" height="23" style={{margin: "0px 10px 0px 0px"}}/>Linkedin</h6>
                    <span className="text-secondary">Microsoft</span>
                  </li>
                </ul>
              </div>

            </div>
            <div className="col-md-8">
              <div className="card mb-2">
                <div className="card-body">
                  <div className="row">

                    <div className="col-sm-2" style={{textAlign: "center"}}>
                      <h6 className="mb-0">Year</h6>
                    </div>
                    <div className="col-sm-5" style={{textAlign: "center"}}>
                      Number of Students Placed
                    </div>
                    <div className="col-sm-4" style={{textAlign: "center"}}>
                      Average CTC offered
                    </div>

                  </div>
                  <hr/>

                  <div className="row">
                    <div className="col-sm-2 text-secondary" style={{textAlign: "center"}}>
                      <h6 className="mb-0">2018</h6>
                    </div>
                    <div className="col-sm-5 text-secondary" style={{textAlign: "center"}}>
                      12
                    </div>
                    <div className="col-sm-4 text-secondary" style={{textAlign: "center"}}>
                      Rs 6,00,000 LPA
                    </div>
                  </div>

                  <hr/>
                  <div className="row">
                    <div className="col-sm-2 text-secondary" style={{textAlign: "center"}}>
                      <h6 className="mb-0">2019</h6>
                    </div>
                    <div className="col-sm-5 text-secondary" style={{textAlign: "center"}}>
                      13
                    </div>
                    <div className="col-sm-4 text-secondary" style={{textAlign: "center"}}>
                      Rs 7,00,000 LPA
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-2 text-secondary" style={{textAlign: "center"}}>
                      <h6 className="mb-0">2020</h6>
                    </div>
                    <div className="col-sm-5 text-secondary" style={{textAlign: "center"}}>
                      14
                    </div>
                    <div className="col-sm-4 text-secondary" style={{textAlign: "center"}}>
                      Rs 8,00,000 LPA
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-2 text-secondary" style={{textAlign: "center"}}>
                      <h6 className="mb-0">2021</h6>
                    </div>
                    <div className="col-sm-5 text-secondary" style={{textAlign: "center"}}>
                      15
                    </div>
                    <div className="col-sm-4 text-secondary" style={{textAlign: "center"}}>
                      Rs 9,00,000 LPA
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-2 text-secondary" style={{textAlign: "center"}}>
                      <h6 className="mb-0">2022</h6>
                    </div>
                    <div className="col-sm-5 text-secondary" style={{textAlign: "center"}}>
                      16
                    </div>
                    <div className="col-sm-4 text-secondary" style={{textAlign: "center"}}>
                      Rs 10,00,000 LPA
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
    </div>
    )
}