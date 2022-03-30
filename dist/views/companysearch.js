"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CompanySearch;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactFontawesome = _interopRequireDefault(require("@fortawesome/react-fontawesome"));

var _SearchHeader2 = _interopRequireDefault(require("../components/SearchHeader"));

var _div, _SearchHeader, _div2, _div3;

function noResult() {
  return _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "no-results"
  }, void 0, "No Companies found :("));
}

function resultRow(data, number) {
  let image = "/img/companies/" + data.name.toLowerCase() + ".png";
  let alternate = "/img/companies/" + "linkedin" + ".png";
  return /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container07"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text01"
  }, void 0, number), /*#__PURE__*/(0, _jsx2.default)("img", {
    src: image,
    className: "search-page-image2"
  }), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text02"
  }, void 0, data.name), /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text03"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("a", {
    href: data.id
  }, void 0, "Company Profile")));
}

function results(records) {
  let count = 0;
  const rows = records.map((r, index) => {
    count += 1;
    return resultRow(r, count);
  });
  return rows;
}

function CompanySearch(props) {
  console.log("AA");
  console.log(props);
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container"
  }, void 0, _SearchHeader || (_SearchHeader = /*#__PURE__*/(0, _jsx2.default)(_SearchHeader2.default, {})), /*#__PURE__*/(0, _jsx2.default)("form", {
    action: "/company/search",
    method: "GET"
  }, void 0, _div2 || (_div2 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container03"
  })), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container04"
  }, void 0, _div3 || (_div3 = /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container05"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "text",
    placeholder: "Search Company",
    className: "search-page-textinput input",
    name: "name",
    autoComplete: "off"
  }), /*#__PURE__*/(0, _jsx2.default)("button", {
    className: "search-page-button1 button"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {
    className: "search-page-text"
  }, void 0, "SEARCH")))), /*#__PURE__*/(0, _jsx2.default)("div", {
    className: "search-page-container06"
  }, void 0, props.searchParam && props.records.length == 0 && noResult(), props.searchParam && props.records.length != 0 && results(props.records))))));
}