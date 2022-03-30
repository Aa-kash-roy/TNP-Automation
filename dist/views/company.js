"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CompanyProfile;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireWildcard(require("react"));

var _CompanyHeader2 = _interopRequireDefault(require("../components/CompanyHeader.js"));

var _CompanyHeader, _img, _span, _img2, _span2, _div;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function yearDataRow(item) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container14"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text08"
  }, void 0, item.year), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text09"
  }, void 0, item.students), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text10"
  }, void 0, item.ctc, " LPA"));
}

function CompanyProfile(props) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container"
  }, void 0, _CompanyHeader || (_CompanyHeader = /*#__PURE__*/(0, _jsx2.default)(_CompanyHeader2.default, {})), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container04"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("form", {
    className: "company-profile-form"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-profile-container"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container06"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("img", {
    src: "/img/companies/" + props.record.name.toLowerCase() + ".png",
    alt: "image",
    className: "company-profile-image2"
  })), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text"
  }, void 0, props.record.name))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container08"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container09"
  }, void 0, _img || (_img = /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/company_social/website.png",
    className: "company-profile-image3"
  })), _span || (_span = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text01"
  }, void 0, "Website")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text02"
  }, void 0, props.record.companySocial.website.name)), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container10"
  }, void 0, _img2 || (_img2 = /*#__PURE__*/(0, _jsx2.default)("img", {
    alt: "image",
    src: "/img/company_social/linkedin.png",
    className: "company-profile-image4"
  })), _span2 || (_span2 = /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text03"
  }, void 0, "Linkedin")), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text04"
  }, void 0, props.record.companySocial.linkedin.name)))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container11"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container12"
  }, void 0, _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "company-profile-container13"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text05"
  }, void 0, "Year"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text06"
  }, void 0, "Number of Students Placed"), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "company-profile-text07"
  }, void 0, "Average CTC offered"))), props.record.placementData.map(item => {
    return yearDataRow(item);
  }))))));
}