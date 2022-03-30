"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _placementreports = _interopRequireDefault(require("../../views/admin/placementreports.js"));

var _PlacementReports;

const router = _express.default.Router();

router.get('/', (req, res, next) => {
  const reactComp = (0, _server.renderToString)(_PlacementReports || (_PlacementReports = /*#__PURE__*/(0, _jsx2.default)(_placementreports.default, {})));
  res.render("./admin/placementreports", {
    reactApp: reactComp
  });
});
module.exports = router;