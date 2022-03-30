"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _companysearch = _interopRequireDefault(require("../views/companysearch.js"));

(0, _reactDom.hydrate)( /*#__PURE__*/(0, _jsx2.default)(_companysearch.default, {}), document.getElementById("company_search_body"));