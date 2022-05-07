import React from "react"


function placementRow(item, index){
    const img = "/img/companies/" + item.name.toLowerCase() + ".png";
    return(

        <div className="admin-company-placement-container08">
        <span className="admin-company-placement-text07">{index+1}</span>
        <img
            alt="image"
            src={img}
            className="admin-company-placement-image4"
        />
        <span className="admin-company-placement-text08">{item.name}</span>
        <span className="admin-company-placement-text09">{item.role}</span>
        <button className="admin-company-placement-button5 button" type="submit" name="downloadplacement" value={item._id}>
            DOWNLOAD
        </button>

        <button className="admin-company-placement-button6 button" type="submit" name="delete" value={item._id}>
            DELETE
        </button>
        </div>

    )
}


export default function AdminPlacements(props){
    return(
        <div>
      

        <div className="admin-company-placement-container">
          <header data-role="Header" className="admin-company-placement-header">
            <div className="admin-company-placement-container01">
              <img
                alt="image"
                src="fdd0d679-d542-44ec-bb1d-7aba8b363967"
                className="admin-company-placement-image"
              />
              <div className="admin-company-placement-nav">
                <nav
                  className="navigation-links-nav navigation-links-root-class-name26"
                >
                  <span className="navigation-links-text"><span>Home</span></span>
                  <span className="navigation-links-text1"><span>Company</span></span>
                  <span className="navigation-links-text2">
                    <span>Placements</span>
                  </span>
                </nav>
              </div>
            </div>
            <div className="admin-company-placement-btn-group">
              <button className="admin-company-placement-button button">
                LOGOUT
              </button>
            </div>
            <div
              data-type="BurgerMenu"
              className="admin-company-placement-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="admin-company-placement-icon">
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                ></path>
              </svg>
            </div>
            <div
              data-type="MobileMenu"
              className="admin-company-placement-mobile-menu"
            >
              <nav className="admin-company-placement-nav1">
                <div className="admin-company-placement-container02">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="admin-company-placement-image1"
                  />
                  <div
                    data-type="CloseMobileMenu"
                    className="admin-company-placement-close-mobile-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="admin-company-placement-icon02"
                    >
                      <path
                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav
                  className="navigation-links-nav navigation-links-root-class-name27"
                >
                  <span className="navigation-links-text"><span>Home</span></span>
                  <span className="navigation-links-text1"><span>Company</span></span>
                  <span className="navigation-links-text2">
                    <span>Placements</span>
                  </span>
                </nav>
              </nav>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="admin-company-placement-icon04"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path></svg><svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="admin-company-placement-icon06"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  ></path></svg><svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="admin-company-placement-icon08"
                >
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  ></path>
                </svg>
              </div>
            </div>
          </header>
          <div className="admin-company-placement-container03"></div>
          <div className="admin-company-placement-container04">
            <form className="admin-company-placement-container05" action="/admin/placements/action" method="POST">
              <span className="admin-company-placement-text">
                Placement &amp; Internship
              </span>

              {props.records.map((item, index) => placementRow(item, index))}

            </form>
          </div>
        </div>
      </div>
    )
}