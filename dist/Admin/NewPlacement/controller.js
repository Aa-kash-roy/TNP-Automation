"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _newplacement = _interopRequireDefault(require("../../views/admin/newplacement.js"));

// var _config = require("../../config");

var _multer = _interopRequireDefault(require("multer"));

var _models = _interopRequireDefault(require("./models.js"));

var _xlsx = _interopRequireDefault(require("xlsx"));

var _fs = _interopRequireDefault(require("fs"));

var _emailSender = require("../../auth/helpers/emailSender.js");

var _NewPlacement;

const router = _express.default.Router();

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage: storage
});
const emailid = 'bt18cse030@iiitn.ac.in';

const createMail = (emailid, subject, body, attachments) => {
  const message = {
    from: process.env.EMAIL,
    to: emailid,
    subject: subject,
    html: body,
    attachments: attachments
  };
  return message;
};

router.get('/', (req, res, next) => {
  const reactComp = (0, _server.renderToString)(_NewPlacement || (_NewPlacement = /*#__PURE__*/(0, _jsx2.default)(_newplacement.default, {})));
  res.render("./admin/newplacement", {
    reactApp: reactComp
  });
});
router.post('/', upload.any('attachments'), async (req, res, next) => {
  console.log("AaA");
  console.log(req.body['gender']);
  console.log(req.body);
  console.log(req.files); //TODO: handle case when accidentally entered empty gender/role/year/name/ctc

  let gender, role, eligibleYears;
  console.log(typeof req.body.gender);
  console.log(typeof req.body.role);
  if (Array.isArray(req.body['gender'])) gender = req.body['gender'];else gender = [req.body['gender']];
  if (Array.isArray(req.body['role'])) role = req.body['role'];else role = [req.body['role']];
  if (Array.isArray(req.body['year'])) eligibleYears = req.body['year'];else eligibleYears = [req.body['year']];
  console.log(gender);
  console.log(role);
  console.log(eligibleYears);

  try {
    for (let i = 0; i < role.length; i++) {
      const appl = await _models.default.create({
        gender: gender,
        role: role[i],
        eligibleYears: eligibleYears,
        name: req.body.companyname,
        ctc: req.body.compensation,
        minCGPA: req.body.cgpa,
        maxBacklogs: req.body.backlogs,
        allowAll: req.body.allowall,
        numberOfApplications: 0
      });

      const folder = req.body.companyname + " " + appl.role + " " + appl._id.toString();

      _fs.default.mkdirSync("./Applications/" + folder);

      _fs.default.mkdirSync("./Applications/" + folder + "/resumes");

      const data = [{
        RollNo: "",
        Gender: "",
        CGPA: "",
        Backlogs: "",
        Branch: "",
        Semester: "",
        Gender: "",
        "Internship Status": "",
        "Placement Status": ""
      }];

      const ws = _xlsx.default.utils.json_to_sheet(data);

      const wb = _xlsx.default.utils.book_new();

      _xlsx.default.utils.book_append_sheet(wb, ws, 'Responses');

      _xlsx.default.writeFile(wb, "./Applications/" + folder + "/details.xlsx");
    }

    let attachments = [];

    for (let i = 0; i < req.files.length; i++) {
      attachments.push({
        filename: req.files[i].originalname,
        content: req.files[i].buffer
      });
    }

    const email = await createMail(emailid, req.body['message'], req.body['subject'], attachments); // await EmailSender(email)
  } catch (e) {
    console.log(e);
  }

  res.redirect('/placements');
});
module.exports = router;