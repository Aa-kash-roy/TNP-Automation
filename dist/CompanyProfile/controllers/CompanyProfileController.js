"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _company = _interopRequireDefault(require("../../views/company.js"));

var _CompanyProfile = _interopRequireDefault(require("../models/CompanyProfile.js"));

var _companysearch = _interopRequireDefault(require("../../views/companysearch.js"));

const router = _express.default.Router();

router.get('/search', (req, res, next) => {
  const companyName = req.query;

  if ('name' in companyName) {
    _CompanyProfile.default.find({
      name: {
        "$regex": companyName.name,
        "$options": "i"
      }
    }).lean().then(response => {
      // console.log(response)
      const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_companysearch.default, {
        records: response,
        searchParam: true
      }));
      res.render("./companysearch", {
        reactApp: reactComp
      });
    }).catch(err => console.error(err));
  } else {
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_companysearch.default, {
      records: [],
      searchParam: false
    }));
    res.render("./companysearch", {
      reactApp: reactComp
    });
  }
});
router.get('/:id', (req, res, next) => {
  const companyId = req.params.id;
  console.log(companyId);

  _CompanyProfile.default.find({
    id: companyId
  }).lean().then(response => {
    console.log(response);
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_company.default, {
      record: response[0]
    }));
    res.render("./company", {
      reactApp: reactComp
    });
  }).catch(err => console.error(err));
});
module.exports = router;