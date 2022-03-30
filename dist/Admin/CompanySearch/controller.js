"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _admincompanysearch = _interopRequireDefault(require("../../views/admin/admincompanysearch.js"));

var _CompanyProfile = _interopRequireDefault(require("../../CompanyProfile/models/CompanyProfile.js"));

var _AdminCompanySearch;

const router = _express.default.Router();

router.get('/', async (req, res, next) => {
  const companyName = req.query;

  if ('name' in companyName) {
    try {
      const response = await _CompanyProfile.default.find({
        name: {
          "$regex": companyName.name,
          "$options": "i"
        }
      }).lean();
      const reactComp = (0, _server.renderToString)(_AdminCompanySearch || (_AdminCompanySearch = /*#__PURE__*/(0, _jsx2.default)(_admincompanysearch.default, {
        records: response,
        searchParam: true
      })));
      res.render("./admin/admincompanysearch", {
        reactApp: reactComp
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_admincompanysearch.default, {
      records: [],
      searchParam: false
    }));
    res.render("./admin/admincompanysearch", {
      reactApp: reactComp
    });
  }
});
module.exports = router;