"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _student = _interopRequireDefault(require("../../views/student.js"));

var _studentedit = _interopRequireDefault(require("../../views/studentedit"));

var _StudentProfile3 = _interopRequireDefault(require("../models/StudentProfile.js"));

var _multer = _interopRequireDefault(require("multer"));

var _models = _interopRequireDefault(require("../../Admin/Years/models.js"));

var _fs = _interopRequireDefault(require("fs"));

var _StudentProfile, _StudentProfile2;

const router = _express.default.Router(); // const storage = multer.memoryStorage();


const storage = _multer.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./StudentProfile/resumes");
  },
  filename: function (req, file, cb) {
    cb(null, req.params.id + ".pdf");
  }
});

const upload = (0, _multer.default)({
  storage: storage
});
router.get('/:id', async (req, res, next) => {
  try {
    const enrollmentNumber = req.params.id;
    const coredb = await _models.default.findOne({
      enrollmentNumber: enrollmentNumber
    }).lean();
    const studentdb = await _StudentProfile3.default.findOne({
      enrollmentNumber: enrollmentNumber
    }).lean();

    if (coredb) {
      if (!studentdb) {
        const createEntry = await _StudentProfile3.default.create({
          enrollmentNumber: coredb.enrollmentNumber,
          studentInfo: {
            name: coredb.studentInfo.name,
            mobile: "",
            cgpa: coredb.studentInfo.cgpa,
            address: "",
            semester: coredb.studentInfo.semester,
            branch: coredb.studentInfo.branch,
            passingYear: coredb.studentInfo.passingYear,
            personalMail: ""
          },
          studentSocial: {
            linkedin: {
              name: "",
              link: ""
            },
            github: {
              name: ""
            },
            website: {
              name: ""
            }
          },
          achievements: [{}, {}, {}, {}, {}],
          publications: [{}, {}, {}, {}, {}],
          internships: [{
            company: "",
            designation: ""
          }, {
            company: "",
            designation: ""
          }],
          applications: [],
          isPlaced: false
        });
        const reactComp = (0, _server.renderToString)(_StudentProfile || (_StudentProfile = /*#__PURE__*/(0, _jsx2.default)(_student.default, {
          record: createEntry,
          coredb: coredb
        })));
        res.render("./student", {
          reactApp: reactComp
        });
      } else {
        const reactComp = (0, _server.renderToString)(_StudentProfile2 || (_StudentProfile2 = /*#__PURE__*/(0, _jsx2.default)(_student.default, {
          record: studentdb,
          coredb: coredb
        })));
        res.render("./student", {
          reactApp: reactComp
        });
      }
    } else {
      res.status(404);
    }
  } catch (e) {
    console.log(e);
  }
});
router.post('/:id', upload.single('resume'), (req, res, next) => {
  if (!req.file) {
    //if nothing is uploaded then delete from db if it exists
    let path = "./StudentProfile/resumes/" + req.params.id + ".pdf";

    if (_fs.default.existsSync(path)) {
      _fs.default.unlinkSync(path);
    }

    res.redirect('/student/' + req.params.id);
  } else {
    let achievements = [];
    let publications = [];

    for (let i = 0; i < 5; i++) {
      let newach = {
        name: req.body['achievements'][i],
        link: ''
      };
      let newpub = {
        name: req.body['publications'][i],
        link: ''
      };
      achievements.push(newach);
      publications.push(newpub);
    }

    let internships = [];

    for (let i = 0; i < 2; i++) {
      let newexp = {
        company: req.body['company'][i],
        designation: req.body['designation'][i]
      };
      internships.push(newexp);
    } // console.log(req.file.buffer)


    _StudentProfile3.default.findOneAndUpdate({
      enrollmentNumber: req.params.id
    }, {
      $set: {
        achievements: achievements,
        publications: publications,
        internships: internships,
        'studentInfo.name': req.body['full name'],
        'studentInfo.mobile': req.body['mobile number'],
        'studentInfo.cgpa': req.body['cgpa'],
        'studentInfo.address': req.body['address'],
        'studentInfo.personalMail': req.body['email'],
        'studentSocial.linkedin.name': req.body['linkedin'],
        'studentSocial.github.name': req.body['github'],
        'studentSocial.website.name': req.body['website']
      }
    }, {
      new: true
    }).lean().then(response => {
      // console.log(response);
      res.redirect('/student/' + req.params.id);
    }).catch(err => console.error(err));
  }
});
router.get('/:id/edit', (req, res, next) => {
  const enrollmentNumber = req.params.id;

  _StudentProfile3.default.find({
    enrollmentNumber: enrollmentNumber
  }).lean().then(response => {
    if (response.length > 0) {
      const reactComp = (0, _server.renderToString)( /*#__PURE__*/(0, _jsx2.default)(_studentedit.default, {
        record: response[0]
      }));
      res.render("./student", {
        reactApp: reactComp
      });
    } else {
      res.redirect('/student/' + enrollmentNumber);
    }
  }).catch(err => console.error(err));
});
router.post('/resume/:id', async (req, res, next) => {
  try {
    const enrollmentNumber = req.params.id;
    const details = await _StudentProfile3.default.findOne({
      enrollmentNumber: enrollmentNumber
    }).lean();
    const path = './StudentProfile/resumes/' + enrollmentNumber + ".pdf";

    if (_fs.default.existsSync(path)) {
      var data = _fs.default.readFileSync(path);

      res.contentType("application/pdf");
      res.send(data);
    } else {
      res.redirect('/student/' + req.params.id);
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;