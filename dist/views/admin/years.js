"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = YearDisplay;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _span, _div, _header, _div2;

function resultRow(record, index) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, index, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.enrollmentNumber, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.studentInfo.name, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.studentInfo.cgpa, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.studentInfo.mobile, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.backlogs, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, record.studentInfo.branch, "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: '/internship/' + record.enrollmentNumber
  }, void 0, " Completed", record.internship.internshipCompleted), "   "), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: '/placement/' + record.enrollmentNumber
  }, void 0, " Placed", record.placement.isPlaced), "   "), _span || (_span = /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Profile")));
}

function detailsRow(record, index) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container10"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text46"
  }, void 0, index), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text47"
  }, void 0, record.enrollmentNumber), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text48"
  }, void 0, record.studentInfo.name), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text49"
  }, void 0, record.studentInfo.cgpa, " "), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text50"
  }, void 0, record.backlogs), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text51"
  }, void 0, record.studentInfo.branch), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text52"
  }, void 0, record.internship.internshipCompleted), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text53"
  }, void 0, record.placement.isPlaced), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text54"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: "/student/" + record.enrollmentNumber
  }, void 0, "Profile")));
}

function YearDisplay(props) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container"
  }, void 0, _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container01"
  })), _header || (_header = /*#__PURE__*/(0, _jsx2.default)("header", {
    "data-role": "Header",
    className: "student-details-header"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/iiitn_logo_transperent_back-200h.png",
    className: "student-details-image"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-nav"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name22"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Home")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements"))))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-btn-group"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "student-details-button button"
  }, void 0, "LOGOUT")), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "BurgerMenu",
    className: "student-details-burger-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "student-details-icon"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "MobileMenu",
    className: "student-details-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "student-details-nav1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container03"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
    className: "student-details-image1"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "CloseMobileMenu",
    className: "student-details-close-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "student-details-icon02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
  })))), /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name22"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Home")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements")))), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 950.8571428571428 1024",
    className: "student-details-icon04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 877.7142857142857 1024",
    className: "student-details-icon06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 602.2582857142856 1024",
    className: "student-details-icon08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
  })))))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text"
  }, void 0, "Year " + props.year + " Details"), _div2 || (_div2 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-details-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text01"
  }, void 0, "Sr No."), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text02"
  }, void 0, "Roll No."), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text03"
  }, void 0, "Name"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text04"
  }, void 0, "CGPA"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text05"
  }, void 0, "Backlog"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text06"
  }, void 0, "Branch"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text07"
  }, void 0, "Internship Status"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text08"
  }, void 0, "Placement Status"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-details-text09"
  }, void 0, "Profile"))), props.records.map((item, index) => detailsRow(item, index + 1)))));
}

{
  /* <div>
             Year 3 details
             <br/>
             SrNo. RollNo. Name CGPA Mobile Backlogs Branch InternshipStatus PlacementStatus Profile
             <br/>
             {props?.records?.map((item, index) => resultRow(item, index+1))}
         </div> */
}