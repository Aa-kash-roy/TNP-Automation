"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Announce;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _header, _div, _span, _div2, _div3, _div4, _span2, _input, _div5;

function attachmentComp(number, remove) {
  console.log(number);
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    id: number,
    name: "attachments"
  }));
}

function createComp(number, remove) {
  let rows = [];

  for (let i = 0; i < number; i++) {
    rows.push(attachmentComp(i, remove));
  }

  return rows;
}

function Announce() {
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

  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container"
  }, void 0, _header || (_header = /*#__PURE__*/(0, _jsx2.default)("header", {
    "data-role": "Header",
    className: "announcement-page-header"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container01"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/iiitn_logo_transperent_back-200h.png",
    className: "announcement-page-image"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-nav"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name18"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Profile")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements"))))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-btn-group"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "announcement-page-button button"
  }, void 0, "LOGOUT")), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "BurgerMenu",
    className: "announcement-page-burger-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "announcement-page-icon"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "MobileMenu",
    className: "announcement-page-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "announcement-page-nav1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
    className: "announcement-page-image1"
  }), /*#__PURE__*/(0, _jsx2.default)("div", {
    "data-type": "CloseMobileMenu",
    className: "announcement-page-close-mobile-menu"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 1024 1024",
    className: "announcement-page-icon02"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
  })))), /*#__PURE__*/(0, _jsx2.default)("nav", {
    className: "navigation-links-nav navigation-links-root-class-name18"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Profile")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text1"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Company")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "navigation-links-text2"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, "Placements")))), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 950.8571428571428 1024",
    className: "announcement-page-icon04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 877.7142857142857 1024",
    className: "announcement-page-icon06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
  })), /*#__PURE__*/(0, _jsx2.default)("svg", {
    viewBox: "0 0 602.2582857142856 1024",
    className: "announcement-page-icon08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("path", {
    d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
  })))))), _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container03"
  })), /*#__PURE__*/(0, _jsx2.default)("form", {
    className: "announcement-page-form",
    method: "POST",
    encType: "multipart/form-data"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container04"
  }, void 0, _span || (_span = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text"
  }, void 0, "Enter Mail Contents")), _div2 || (_div2 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text1"
  }, void 0, "Send to :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    id: "1styear",
    name: "year",
    value: "1styear",
    className: "announcement-page-checkbox"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text2"
  }, void 0, "1st Year"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    name: "year",
    id: "2ndyear",
    value: "2ndyear",
    className: "announcement-page-checkbox1"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text3"
  }, void 0, "2nd Year"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    name: "year",
    id: "3rdyear",
    value: "3rdyear",
    className: "announcement-page-checkbox2"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text4"
  }, void 0, "3rd Year"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "checkbox",
    name: "year",
    id: "4thyear",
    value: "4thyear",
    className: "announcement-page-checkbox3"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text5"
  }, void 0, "4th Year"))), _div3 || (_div3 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text6"
  }, void 0, "Subject :"), /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "text",
    placeholder: "Subject",
    className: "announcement-page-textinput input",
    name: "subject"
  }))), _div4 || (_div4 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text7"
  }, void 0, "Insert Text :"), /*#__PURE__*/(0, _jsx2.default)("textarea", {
    placeholder: "Enter text",
    className: "announcement-page-textarea textarea",
    name: "message"
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container08"
  }, void 0, _span2 || (_span2 = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "announcement-page-text8"
  }, void 0, "Attachments :")), _input || (_input = /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    placeholder: "placeholder",
    id: "myfile",
    name: "attachments",
    className: "announcement-page-textinput1 input",
    multiple: true
  })), /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    className: "announcement-page-button1 button",
    onClick: removeAttachments
  }, void 0, "Remove attachment")), _div5 || (_div5 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "announcement-page-container09"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "submit",
    className: "announcement-page-button2 button"
  }, void 0, "SUBMIT")))))));
}