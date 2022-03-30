"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coreStudentProfileData = coreStudentProfileData;

var _models = _interopRequireWildcard(require("../Admin/Years/models.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function coreStudentProfileData() {
  try {
    const refresh = await _models.default.deleteMany({}); //refresh the table on each restart

    const studentProfile = await _models.default.create({
      enrollmentNumber: "BT18CSE031",
      studentInfo: {
        name: "Akash Kumar",
        cgpa: 9.4,
        semester: 5,
        branch: "CSE",
        passingYear: 2022,
        gender: 'F',
        email: "bt18cse031@iiitn.ac.in"
      },
      backlogs: 1,
      internship: {
        company: "Google",
        designation: "SDE Intern",
        internshipCompleted: "Completed",
        semester: 6
      },
      placement: {
        company: "Microsoft",
        designation: "SDE Intern",
        compensation: "10",
        isPlaced: "Pending"
      }
    });
    const studentProfile2 = await _models.default.create({
      enrollmentNumber: "BT18CSE032",
      studentInfo: {
        name: "Akash Kumar",
        cgpa: 9.4,
        semester: 5,
        branch: "CSE",
        passingYear: 2022,
        gender: 'M',
        email: "bt18cse032@iiitn.ac.in"
      },
      backlogs: 1,
      internship: {
        company: "Google",
        designation: "SDE Intern",
        internshipCompleted: "Pending",
        semester: 6
      },
      placement: {
        company: "Microsoft",
        designation: "SDE Intern",
        compensation: "10",
        isPlaced: "Placed"
      }
    });
  } catch (e) {
    console.log(e);
  }
}