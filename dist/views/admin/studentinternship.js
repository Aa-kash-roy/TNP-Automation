"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StudentInternship;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _br, _br2, _br3, _br4, _div;

function removeOfferLetter() {
  var oldInput = document.getElementById("offerletter");
  var newInput = document.createElement("input");
  newInput.type = "file";
  newInput.id = oldInput.id;
  newInput.name = oldInput.name;
  oldInput.parentNode.replaceChild(newInput, oldInput);
}

function displayEmpty(field) {
  console.log(field);
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    name: field,
    id: "AA"
  }), /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    onClick: removeFile(field)
  }, void 0, "Remove"));
}

function displayPDF(field, internship, key) {
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, field, internship[key] ? "AA" : displayEmpty(field));
}

function StudentInternship(props) {
  var _props$record, _props$record2, _props$record2$intern, _props$record3, _props$record3$intern, _props$record4, _props$record4$intern, _props$record5, _props$record5$intern;

  console.log(props);
  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("form", {
    action: "/internship/" + (props === null || props === void 0 ? void 0 : (_props$record = props.record) === null || _props$record === void 0 ? void 0 : _props$record.enrollmentNumber),
    method: "POST",
    encType: "multipart/form-data"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, props === null || props === void 0 ? void 0 : (_props$record2 = props.record) === null || _props$record2 === void 0 ? void 0 : (_props$record2$intern = _props$record2.internship) === null || _props$record2$intern === void 0 ? void 0 : _props$record2$intern.internshipCompleted, "."), _br || (_br = /*#__PURE__*/(0, _jsx2.default)("br", {})), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, props === null || props === void 0 ? void 0 : (_props$record3 = props.record) === null || _props$record3 === void 0 ? void 0 : (_props$record3$intern = _props$record3.internship) === null || _props$record3$intern === void 0 ? void 0 : _props$record3$intern.company), _br2 || (_br2 = /*#__PURE__*/(0, _jsx2.default)("br", {})), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, props === null || props === void 0 ? void 0 : (_props$record4 = props.record) === null || _props$record4 === void 0 ? void 0 : (_props$record4$intern = _props$record4.internship) === null || _props$record4$intern === void 0 ? void 0 : _props$record4$intern.designation), _br3 || (_br3 = /*#__PURE__*/(0, _jsx2.default)("br", {})), /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, props === null || props === void 0 ? void 0 : (_props$record5 = props.record) === null || _props$record5 === void 0 ? void 0 : (_props$record5$intern = _props$record5.internship) === null || _props$record5$intern === void 0 ? void 0 : _props$record5$intern.semester), _br4 || (_br4 = /*#__PURE__*/(0, _jsx2.default)("br", {})), _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    type: "file",
    id: "offerletter",
    name: "logo"
  }), /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "button",
    onClick: removeOfferLetter
  }, void 0, "Remove")))));
}