"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Test;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _br;

function Test(props) {
  const [number, setNumber] = _react.default.useState(0);

  function add() {
    console.log(number);
    setNumber(number => number + 1);
  }

  return /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, props.number, " ", _br || (_br = /*#__PURE__*/(0, _jsx2.default)("br", {})), /*#__PURE__*/(0, _jsx2.default)("button", {
    onClick: add
  }, void 0, "Click Me"), /*#__PURE__*/(0, _jsx2.default)("p", {}, void 0, number));
}