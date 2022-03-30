"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _placementpage = _interopRequireDefault(require("../views/placementpage.js"));

var _models = _interopRequireWildcard(require("../Admin/NewPlacement/models.js"));

var _StudentProfile = _interopRequireDefault(require("../StudentProfile/models/StudentProfile.js"));

var _xlsx = _interopRequireDefault(require("xlsx"));

var _models2 = _interopRequireDefault(require("../Admin/Years/models.js"));

var _fs = _interopRequireDefault(require("fs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = _express.default.Router();

router.get('/', async (req, res, next) => {
  try {
    const enrollmentNumber = "BT18CSE031"; //change this to get actual roll or find if user is admin

    const student = await _StudentProfile.default.findOne({
      enrollmentNumber: enrollmentNumber
    }).lean();
    const response = await _models.default.find({}).lean();
    const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_placementpage.default, {
      records: response,
      applications: student['applications']
    }));
    res.render("./placementpage", {
      reactApp: reactComp
    });
  } catch (e) {
    console.log(e);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const enrollmentNumber = "BT18CSE031"; //change this to get actual roll number

    const coreDetails = await _models2.default.findOne({
      enrollmentNumber: enrollmentNumber
    }).lean();
    const jobDetails = await _models.default.findOneAndUpdate({
      _id: req.body['applicationId']
    }, {
      $inc: {
        numberOfApplications: 1
      }
    }, {
      new: true
    }).lean();
    console.log(jobDetails);
    console.log(coreDetails);
    const resumeSourcePath = "./StudentProfile/resumes/" + enrollmentNumber + ".pdf";
    const resumeDestPath = './Applications/' + jobDetails.name + " " + jobDetails.role + " " + jobDetails._id.toString() + "/resumes/" + enrollmentNumber + ".pdf";
    const studentYear = parseInt((coreDetails.studentInfo.semester + 1) / 2).toString();
    let cond1 = coreDetails.studentInfo.cgpa >= jobDetails.minCGPA;
    let cond2 = coreDetails.backlogs <= jobDetails.maxBacklogs;
    let cond3 = jobDetails.gender.includes(coreDetails.studentInfo.gender);
    let cond4 = jobDetails.eligibleYears.includes(studentYear);
    let cond5;

    if (jobDetails.role == "Full-time") {
      if ('compensation' in coreDetails.placement && coreDetails.placement.compensation * 1.5 <= jobDetails.ctc) cond5 = true;else cond5 = false;
    } else {
      if (coreDetails.internship.internshipCompleted == "Pending") cond5 = true;else cond5 = false;
    }

    if (jobDetails.allowAll) cond5 = true;

    let cond6 = _fs.default.existsSync(resumeSourcePath);

    console.log("CGPA" + cond1);
    console.log("BACKLOG" + cond2);
    console.log("GENDER" + cond3);
    console.log("YEAR" + cond4);
    console.log("ALLOW" + cond5);
    console.log("RESUME" + cond6);

    if (cond1 && cond2 && cond3 && cond4 && cond5 && cond6) {
      const upd = await _StudentProfile.default.findOneAndUpdate({
        enrollmentNumber: enrollmentNumber
      }, {
        $push: {
          applications: req.body['applicationId']
        }
      }, {
        new: true
      });
      const path = './Applications/' + jobDetails.name + " " + jobDetails.role + " " + jobDetails._id.toString() + "/details.xlsx";

      const file = _xlsx.default.readFile(path);

      let sheet = file.Sheets[file.SheetNames[0]];

      _xlsx.default.utils.sheet_add_aoa(sheet, [[coreDetails.enrollmentNumber, coreDetails.studentInfo.name, coreDetails.studentInfo.cgpa, coreDetails.backlogs, coreDetails.studentInfo.branch, coreDetails.studentInfo.semester, coreDetails.studentInfo.gender, coreDetails.internship.internshipCompleted, coreDetails.placement.isPlaced]], {
        origin: "A" + (jobDetails.numberOfApplications + 1)
      });

      file.Sheets[file.SheetNames[0]] = sheet;

      _xlsx.default.writeFile(file, path);

      _fs.default.copyFile(resumeSourcePath, resumeDestPath, err => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });

      res.redirect("/placements");
    } else {
      res.redirect("/placements");
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;