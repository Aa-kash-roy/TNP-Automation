"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewPlacement;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _div, _header, _span, _div2, _div3, _div4, _div5, _div6, _div7, _div8, _div9, _div10, _div11, _div12, _span2, _input, _div13;

function NewPlacement() {
  function removeAttachments() {
    var oldInput = document.getElementById('myfile');
    var newInput = document.createElement("input");
    newInput.type = "file";
    newInput.id = oldInput.id;
    newInput.name = oldInput.name;
    newInput.className = oldInput.className;
    newInput.placeholder = oldInput.placeholder;
    newInput.multiple = oldInput.multiple;
    oldInput.parentNode.replaceChild(newInput, oldInput);
  }

  function sumbit() {
    let date = document.getElementById('datetime');
    console.log(date);
  }

  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container"
  }, void 0, _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container01"
  })), _header || (_header = /*#__PURE__*/(0, _jsx2.default)("header", {
    "data-role": "Header",
    className: "admin-company-header"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/iiitn_logo_transperent_back-200h.png",
    className: "admin-company-image"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-nav"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name16"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Profile")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements"))))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-btn-group"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "admin-company-button button"
  }, void 0, "LOGOUT")), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "BurgerMenu",
    className: "admin-company-burger-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "admin-company-icon"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "MobileMenu",
    className: "admin-company-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "admin-company-nav1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container03"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
    className: "admin-company-image1"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "CloseMobileMenu",
    className: "admin-company-close-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "admin-company-icon02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
  })))), /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name16"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Profile")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements")))), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 950.8571428571428 1024",
    className: "admin-company-icon04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 877.7142857142857 1024",
    className: "admin-company-icon06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 602.2582857142856 1024",
    className: "admin-company-icon08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
  })))))), /*#__PURE__*/(0, _jsx2.default)("form", {
    className: "admin-company-form",
    method: "POST",
    encType: "multipart/form-data"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container04"
  }, void 0, _span || (_span = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text"
  }, void 0, "Add Company Details")), _div2 || (_div2 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text01"
  }, void 0, "Company Name :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "text",
    placeholder: "Name",
    className: "admin-company-textinput input",
    name: "companyname"
  }))), _div3 || (_div3 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text02"
  }, void 0, "Compensation / CTC :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "number",
    placeholder: "CTC",
    className: "admin-company-textinput1 input",
    name: "compensation",
    defaultValue: 0
  }))), _div4 || (_div4 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text03"
  }, void 0, "Minimum CGPA Required :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "number",
    placeholder: "CGPA",
    className: "admin-company-textinput2 input",
    name: "cgpa",
    step: "0.1",
    defaultValue: 0
  }))), _div5 || (_div5 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text04"
  }, void 0, "Maximum Backlogs Allowed"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "number",
    placeholder: "Backlog Number",
    className: "admin-company-textinput3 input",
    name: "backlogs",
    defaultValue: 0
  }))), _div6 || (_div6 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container09"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text05"
  }, void 0, "Gender :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    id: "male",
    name: "gender",
    value: "M",
    className: "admin-company-radiobutton"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text06"
  }, void 0, "Male"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    id: "female",
    name: "gender",
    value: "F",
    className: "admin-company-radiobutton1"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text07"
  }, void 0, "Female"))), _div7 || (_div7 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container10"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text08"
  }, void 0, "Allow all students :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "radio",
    id: "yes",
    name: "allowall",
    value: "yes",
    className: "admin-company-radiobutton2",
    defaultChecked: true
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text09"
  }, void 0, "Yes"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "radio",
    id: "no",
    name: "allowall",
    value: "no",
    className: "admin-company-radiobutton3"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text10"
  }, void 0, "No"))), _div8 || (_div8 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container11"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text11"
  }, void 0, "Role :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    id: "internship",
    name: "role",
    value: "Intern",
    className: "admin-company-checkbox"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text12"
  }, void 0, "Internship"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    name: "role",
    id: "full-time",
    value: "Full-time",
    className: "admin-company-checkbox1"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text13"
  }, void 0, "Full-Time"))), _div9 || (_div9 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container12"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text14"
  }, void 0, "Eligible :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    id: "3rdyear",
    name: "year",
    value: "3",
    className: "admin-company-checkbox2"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text15"
  }, void 0, "3rd Year"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    name: "year",
    id: "4thyear",
    value: "4",
    className: "admin-company-checkbox3"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text16"
  }, void 0, "4th Year"))), _div10 || (_div10 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container13"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text17"
  }, void 0, "Application End time :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "datetime-local",
    placeholder: "Backlog Number",
    className: "admin-company-textinput4 input",
    name: "datetime"
  }))), _div11 || (_div11 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container14"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text18"
  }, void 0, "Subject :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "text",
    placeholder: "Subject",
    className: "admin-company-textinput5 input",
    name: "subject"
  }))), _div12 || (_div12 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container15"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text19"
  }, void 0, "Insert Text :"), /*#__PURE__*/(0, _jsx2.default)("textarea", {
    placeholder: "Enter text",
    className: "admin-company-textarea textarea",
    name: "message"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container16"
  }, void 0, _span2 || (_span2 = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "admin-company-text20"
  }, void 0, "Attachments :")), _input || (_input = /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    placeholder: "placeholder",
    id: "myfile",
    name: "attachments",
    className: "admin-company-textinput6 input",
    multiple: true
  })), /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    className: "admin-company-button1 button",
    onClick: removeAttachments
  }, void 0, "Remove attachments")), _div13 || (_div13 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "admin-company-container17"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "submit",
    className: "admin-company-button2 button",
    value: "SUBMIT"
  })))))));
}