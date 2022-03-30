"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _years = _interopRequireDefault(require("../../views/admin/years.js"));

var _studentinternship = _interopRequireDefault(require("../../views/admin/studentinternship.js"));

var _studentplacement = _interopRequireDefault(require("../../views/admin/studentplacement.js"));

var _models = _interopRequireDefault(require("./models.js"));

var _multer = _interopRequireDefault(require("multer"));

const router = _express.default.Router();

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage: storage
});
router.get('/:id', (req, res, next) => {
  const year = req.params.id;
  console.log(year);
  const even = 2 * year;
  const odd = 2 * year - 1;

  _models.default.find({
    $or: [{
      'studentInfo.semester': even
    }, {
      'studentInfo.semester': odd
    }]
  }).then(resp => {
    console.log(resp);
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_years.default, {
      year: year,
      records: resp
    }));
    res.render("./admin/years", {
      reactApp: reactComp
    });
  }).catch(err => {
    console.log(err);
  });
});
router.get('/internship/:roll', (req, res, next) => {
  const enrollmentNumber = req.params.roll;

  _models.default.findOne({
    enrollmentNumber: enrollmentNumber
  }).then(resp => {
    console.log(resp);
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_studentinternship.default, {
      record: resp
    }));
    res.render("./admin/studentinternship", {
      reactApp: reactComp
    });
  }).catch(err => {
    console.log(err);
  });
});
router.post('/internship/:roll', upload.any('attachments'), (req, res, next) => {
  console.log(req.file);
  res.redirect("/internship/" + req.params.roll);
});
router.get('/placement/:roll', (req, res, next) => {
  const enrollmentNumber = req.params.roll;

  _models.default.findOne({
    enrollmentNumber: enrollmentNumber
  }).then(resp => {
    console.log(resp);
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_studentplacement.default, {
      record: resp
    }));
    res.render("./admin/studentplacement", {
      reactApp: reactComp
    });
  }).catch(err => {
    console.log(err);
  });
});
module.exports = router;