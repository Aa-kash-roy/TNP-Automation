"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StudentProfileEdit;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireWildcard(require("react"));

var _StudentHeader2 = _interopRequireDefault(require("../components/StudentHeader.js"));

var _StudentHeader, _img, _div, _button, _input;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function experienceRow(item, index) {
  const logo = "/img/companies/" + item.company.toLowerCase() + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container13"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text16",
    defaultValue: item.company,
    name: "company",
    size: "10"
  }), /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text17",
    defaultValue: item.designation,
    size: "10",
    name: "designation"
  }));
}

function achievementsRow(item, index) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container25"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text32",
    defaultValue: item.name,
    size: "20",
    name: "achievements"
  }));
}

function publicationsRow(item, index) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container25"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text32",
    defaultValue: item.name,
    size: "20",
    name: "publications"
  }));
}

function studentSocialRow(fieldName, fieldValue) {
  const logo = "/img/student_social/" + fieldName.toLowerCase() + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container09"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: logo,
    className: "student-profile-image03"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text10"
  }, void 0, fieldName), /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text11",
    name: fieldName.toLowerCase(),
    defaultValue: fieldValue,
    size: "15"
  }));
}

function studentDetailsRowEditable(fieldName, fieldValue) {
  const image = "/img/student_details/" + fieldName.toLowerCase() + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container18"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: image,
    className: "student-profile-image09"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text22"
  }, void 0, fieldName), /*#__PURE__*/(0, _jsx2.default)("input", {
    className: "student-profile-text23",
    name: fieldName.toLowerCase(),
    defaultValue: fieldValue,
    size: "15"
  }));
}

function studentDetailsRowNonEditable(fieldName, fieldValue) {
  const image = "/img/student_details/" + fieldName.toLowerCase() + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container18"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: image,
    className: "student-profile-image09"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text22"
  }, void 0, fieldName), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text23"
  }, void 0, fieldValue));
}

function StudentProfileEdit(props) {
  var _props$record, _props$record$student, _props$record2, _props$record3, _props$record4, _props$record5, _props$record6, _props$record7, _props$record8, _props$record9, _props$record10, _props$record11, _props$record12, _props$record13, _props$record14, _props$record15, _props$record16;

  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container"
  }, void 0, _StudentHeader || (_StudentHeader = /*#__PURE__*/(0, _jsx2.default)(_StudentHeader2.default, {})), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("form", {
    className: "student-profile-form",
    action: "/student/" + props.record.enrollmentNumber,
    method: "POST",
    encType: "multipart/form-data"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-profile-container"
  }, void 0, _img || (_img = /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/clipart2935933-200w.png",
    className: "student-profile-image02"
  })), _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text"
  }, void 0, "Name:"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text01"
  }, void 0, "Enrolment no:"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text02"
  }, void 0, "Branch:"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text03"
  }, void 0, "Semester:"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text04"
  }, void 0, "Year of Passing:"))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text05"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record = props.record) === null || _props$record === void 0 ? void 0 : (_props$record$student = _props$record.studentInfo) === null || _props$record$student === void 0 ? void 0 : _props$record$student.name), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text06"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record2 = props.record) === null || _props$record2 === void 0 ? void 0 : _props$record2.enrollmentNumber), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text07"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record3 = props.record) === null || _props$record3 === void 0 ? void 0 : _props$record3.studentInfo.branch), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text08"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record4 = props.record) === null || _props$record4 === void 0 ? void 0 : _props$record4.studentInfo.semester), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text09"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record5 = props.record) === null || _props$record5 === void 0 ? void 0 : _props$record5.studentInfo.passingYear))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container08"
  }, void 0, studentSocialRow("Website", props === null || props === void 0 ? void 0 : (_props$record6 = props.record) === null || _props$record6 === void 0 ? void 0 : _props$record6.studentSocial.website.name), studentSocialRow("Github", props === null || props === void 0 ? void 0 : (_props$record7 = props.record) === null || _props$record7 === void 0 ? void 0 : _props$record7.studentSocial.github.name), studentSocialRow("Linkedin", props === null || props === void 0 ? void 0 : (_props$record8 = props.record) === null || _props$record8 === void 0 ? void 0 : _props$record8.studentSocial.linkedin.name)), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container12"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record9 = props.record) === null || _props$record9 === void 0 ? void 0 : _props$record9.internships.map((item, index) => {
    return experienceRow(item, index);
  }))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container16"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container17"
  }, void 0, studentDetailsRowNonEditable("Full Name", props === null || props === void 0 ? void 0 : (_props$record10 = props.record) === null || _props$record10 === void 0 ? void 0 : _props$record10.studentInfo.name), studentDetailsRowEditable("Email", props === null || props === void 0 ? void 0 : (_props$record11 = props.record) === null || _props$record11 === void 0 ? void 0 : _props$record11.studentInfo.personalMail), studentDetailsRowNonEditable("CGPA", props === null || props === void 0 ? void 0 : (_props$record12 = props.record) === null || _props$record12 === void 0 ? void 0 : _props$record12.studentInfo.cgpa), studentDetailsRowEditable("Mobile Number", props === null || props === void 0 ? void 0 : (_props$record13 = props.record) === null || _props$record13 === void 0 ? void 0 : _props$record13.studentInfo.mobile), studentDetailsRowEditable("Address", props === null || props === void 0 ? void 0 : (_props$record14 = props.record) === null || _props$record14 === void 0 ? void 0 : _props$record14.studentInfo.address)), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container23"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container24"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record15 = props.record) === null || _props$record15 === void 0 ? void 0 : _props$record15.achievements.map((item, index) => {
    return achievementsRow(item, index);
  })), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "student-profile-container30"
  }, void 0, props === null || props === void 0 ? void 0 : (_props$record16 = props.record) === null || _props$record16 === void 0 ? void 0 : _props$record16.publications.map((item, index) => {
    return publicationsRow(item, index);
  }))), _button || (_button = /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "student-profile-button1 button",
    type: "submit"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "student-profile-text42"
  }, void 0, "FINISH EDIT"))), _input || (_input = /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    placeholder: "placeholder",
    className: "student-profile-textinput input",
    name: "resume",
    accept: "application/pdf"
  })))))));
}