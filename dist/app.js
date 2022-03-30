"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _students = require("./dummydata/students.js");

var _companies = require("./dummydata/companies.js");

var _corestudents = require("./dummydata/corestudents.js");

var _newplacements = require("./dummydata/newplacements.js");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

// var _config = require("./config");

var _TestFun;

//user views
const users = require('./auth/controllers/UserController.js');

const student = require('./StudentProfile/controllers/StudentProfileController.js');

const company = require('./CompanyProfile/controllers/CompanyProfileController.js');

const practice = require('./CodingPractice/controller/codingHandler.js');

const test = require('./views/test.js');

const placement = require('./PlacementPage/controller.js'); //admin views


const adminlanding = require("./Admin/Landing/controller.js");

const yeardisplay = require("./Admin/Years/controller.js");

const adminannounce = require("./Admin/Announce/controller.js");

const newplacement = require("./Admin/NewPlacement/controller.js");

const admincompanysearch = require("./Admin/CompanySearch/controller.js");

const placementreports = require("./Admin/PlacementReports/controller.js");

const app = (0, _express.default)();
app.set('view engine', 'ejs');
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
console.log(__dirname);
app.use(_express.default.static(__dirname + "/public")); //user views

app.use('/users', users);
app.use('/student', student);
app.use('/company', company);
app.use('/practice', practice);
// app.use('/', test);
app.use('/placements', placement); //admin views

app.use('/admin', adminlanding);
app.use('/admin/year', yeardisplay);
app.use('/admin/announce', adminannounce);
app.use('/admin/newplacement', newplacement);
app.use('/', yeardisplay);
app.use('/admin/companysearch', admincompanysearch);
app.use('/admin/placementreports', placementreports); // connect to the database

const mongoDbConnect = () => {
  return _mongoose.default.connect(process.env.MONGO_URL);
}; //initialize dummy data


(0, _students.testStudentProfileData)();
(0, _companies.companyProfileData)();
(0, _corestudents.coreStudentProfileData)();
(0, _newplacements.newPlacementData)();
app.get('/portal', function (req, res) {
  let reactComp = (0, _server.renderToString)(_TestFun || (_TestFun = /*#__PURE__*/(0, _jsx2.default)(TestFun, {})));
  res.render('portal', {
    reactApp: reactComp
  });
});
app.post('/portal', function (req, res) {
  let user = req.body.name_input;
  let pass = req.body.password_input;
  console.log(user);
  console.log(pass);
  res.redirect('/');
});

const start = async () => {
  await mongoDbConnect();
  console.log("Database connected !!");
  app.listen(3001, function () {
    console.log('Server is running at port 3001');
  });
};

start();