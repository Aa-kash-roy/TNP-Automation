"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _landing = _interopRequireDefault(require("../../views/admin/landing.js"));

var _multer = _interopRequireDefault(require("multer"));

var _xlsx = _interopRequireDefault(require("xlsx"));

var _models = _interopRequireDefault(require("../Years/models.js"));

var _AdminLanding;

function getPassingYear(semester) {
  const d = new Date();
  let year = d.getFullYear();
  if (semester == 1) return year + 4;else if (semester == 2) return year + 3;else if (semester == 3) return year + 3;else if (semester == 4) return year + 2;else if (semester == 5) return year + 2;else if (semester == 6) return year + 1;else if (semester == 7) return year + 1;else return year;
}

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage: storage
});

const router = _express.default.Router();

router.get('/', (req, res, next) => {
  const reactComp = (0, _server.renderToString)(_AdminLanding || (_AdminLanding = /*#__PURE__*/(0, _jsx2.default)(_landing.default, {})));
  res.render("./admin/landing", {
    reactApp: reactComp
  });
});
router.post('/', upload.single('newdb'), async (req, res, next) => {
  try {
    console.log(req.file);

    if (!req.file) {
      res.redirect('/admin');
    } else {
      const file = _xlsx.default.read(req.file.buffer);

      const del = await _models.default.deleteMany({});
      const sheets = file.SheetNames;

      for (let i = 0; i < sheets.length; i++) {
        const temp = _xlsx.default.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);

        const semester = parseInt(file.SheetNames[i].charAt(9));

        for (let j = 0; j < temp.length; j++) {
          const cr = await _models.default.create({
            enrollmentNumber: temp[j]['Roll. No.'],
            studentInfo: {
              name: temp[j]['Name'],
              cgpa: temp[j]["CGPA"],
              semester: semester,
              branch: temp[j]["Branch"],
              passingYear: getPassingYear(semester),
              gender: temp[j]["Gender"],
              email: temp[j]["Email"]
            },
            backlogs: temp[j]["Number of Backlogs"],
            internship: {
              company: temp[j]["Internship Company"],
              designation: temp[j]["Internship Designation"],
              internshipCompleted: temp[j]["Internship Status"],
              semester: temp[j]["Internship Semester"]
            },
            placement: {
              company: temp[j]["Placement Company"],
              designation: temp[j]["Placement Designation"],
              compensation: temp[j]["Placement Package"],
              isPlaced: temp[j]["Placement Status"]
            }
          });
        }
      }

      res.redirect('/admin');
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;