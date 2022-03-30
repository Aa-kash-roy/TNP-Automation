"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TestFun;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _div;

function TestFun() {
  return _div || (_div = /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("h1", {}, void 0, "Login"), /*#__PURE__*/(0, _jsx2.default)("form", {
    action: "/portal",
    method: "post"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("div", {
    id: "input_name"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    name: "name_input",
    type: "text",
    placeholder: "Enrollment Number"
  })), /*#__PURE__*/(0, _jsx2.default)("br", {}), /*#__PURE__*/(0, _jsx2.default)("div", {
    id: "input_password"
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("input", {
    name: "password_input",
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/(0, _jsx2.default)("br", {}), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, /*#__PURE__*/(0, _jsx2.default)("button", {
    type: "submit"
  }, void 0, "Submit")))));
}