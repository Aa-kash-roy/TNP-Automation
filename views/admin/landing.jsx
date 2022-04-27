import React from "react"

function buttonRow(text){
    return(
        <div className="admin-landing-page-container05">
        <button type="button" className="admin-landing-page-button1 button">
            {text}
        </button>
        </div>
    )
}

{/* <div>
            <a href="/admin/year/1">Year 1</a><br/>
            <a href="/admin/year/2">Year 2</a><br/>
            <a href="/admin/year/3">Year 3</a><br/>
            <a href="/admin/year/4">Year 4</a><br/>
            <a href="/admin/placementreports">Past reports</a><br/>
            <a href="/admin/newplacement">New application</a><br/>
            <a href="/admin/announce">Announce something</a><br/>
            <a href="/admin/companysearch">Company Details</a><br/>
            <form method="POST" encType="multipart/form-data">
                Update Database<br/>
                <input
                    type="file"
                    placeholder="placeholder"
                    id="myfile"
                    name="newdb"                  />
                <input type="submit"/> <br/>

            </form>
            
        </div> */}
export default function AdminLanding(){
    return (
        <div>

      <div className="admin-landing-page-container">
        <header data-role="Header" className="admin-landing-page-header">
          <div className="admin-landing-page-container01">
            <img
              alt="image"
              src="/img/iiitn_logo_transperent_back-200h.png"
              className="admin-landing-page-image"
            />
            <div className="admin-landing-page-nav">
              <nav
                className="navigation-links-nav navigation-links-root-class-name20"
              >
                <span className="navigation-links-text"><span><a href="/">Home</a></span></span>
                <span className="navigation-links-text1"><span><a href="/company/search">Company</a></span></span>
                <span className="navigation-links-text2">
                  <span><a href="/placements">Placements</a></span>
                </span>
              </nav>
            </div>
          </div>
          <div className="admin-landing-page-btn-group">
            <button className="admin-landing-page-button button">LOGOUT</button>
          </div>
          <div data-type="BurgerMenu" className="admin-landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="admin-landing-page-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="admin-landing-page-mobile-menu">
            <nav className="admin-landing-page-nav1">
              <div className="admin-landing-page-container02">

                <div
                  data-type="CloseMobileMenu"
                  className="admin-landing-page-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="admin-landing-page-icon02"
                  >
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    ></path>
                  </svg>
                </div>
              </div>
              <nav
                className="navigation-links-nav navigation-links-root-class-name20"
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
                className="admin-landing-page-icon04"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg><svg
                viewBox="0 0 877.7142857142857 1024"
                className="admin-landing-page-icon06"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg><svg
                viewBox="0 0 602.2582857142856 1024"
                className="admin-landing-page-icon08"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="admin-landing-page-container03"></div>
        <div className="admin-landing-page-container04">
          <span className="admin-landing-page-text">Welcome Admin..!!</span>
          <div className="admin-landing-page-container05">
            <a href="/admin/year/1">

            <button type="button" className="admin-landing-page-button2 button">
              1st Year
            </button>
            </a>

          </div>
          
          <div className="admin-landing-page-container06">
            <a href="/admin/year/2">
            <button type="button" className="admin-landing-page-button2 button">
              2nd Year
            </button>
            </a>

          </div>
          <div className="admin-landing-page-container07">
            <a href="/admin/year/3">

            <button type="button" className="admin-landing-page-button3 button">
              3rd Year
            </button>
            </a>
          </div>
          
          <div className="admin-landing-page-container08">
            <a href="/admin/year/4">
            <button type="button" className="admin-landing-page-button4 button">
              4th Year
            </button>
            </a>
          </div>
          <div className="admin-landing-page-container09">
            <a href="/admin/newplacement">

            <button type="button" className="admin-landing-page-button5 button">
              New Application
            </button>
            </a>
          </div>
          <div className="admin-landing-page-container10">
            <a href="/admin/announce">
            <button type="button" className="admin-landing-page-button6 button">
              Announcement
            </button>
            </a>
          </div>
          <form className="admin-landing-page-form" method="POST" encType="multipart/form-data">
            <div className="admin-landing-page-container11">
              <button type="submit" className="admin-landing-page-button7 button">
                Update Database
              </button>
              <input
                type="file"
                placeholder="placeholder"
                className="admin-landing-page-textinput input"
                id="myfile"
                name="newdb"
              />
            </div>
          </form>
          <div className="admin-landing-page-container12">
          <a href="/admin/companysearch">
            <button type="submit" className="admin-landing-page-button8 button">
              Company Contact
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

