"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testStudentProfileData = testStudentProfileData;

var _StudentProfile = _interopRequireWildcard(require("../StudentProfile/models/StudentProfile.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function testStudentProfileData() {
  try {
    const refresh = await _StudentProfile.default.deleteMany({}); //refresh the table on each restart

    const studentProfile = await _StudentProfile.default.create({
      enrollmentNumber: "BT18CSE031",
      studentInfo: {
        name: "Akash Kumar",
        mobile: "1234567890",
        cgpa: 9.4,
        address: "11 street",
        semester: 5,
        branch: "CSE",
        passingYear: 2022,
        personalMail: "akshkmr@gmail.com"
      },
      studentSocial: {
        linkedin: {
          name: "Akash Kumar",
          link: "LINKEDIN LINK"
        },
        github: {
          name: "akash.github"
        },
        website: {
          name: "https://akashkumar.com"
        }
      },
      achievements: [{
        name: "ACM-ICPC Finalist"
      }, {
        name: "Google Summer of Code 2020",
        link: "ACH2 LINK"
      }, {
        name: "Codefchef 4 Star"
      }, {
        name: "Secured 2nd Rank in Coding Competition"
      }, {
        name: "Runner up at Smart India Hackathon"
      }],
      publications: [{
        name: "News-App using Django",
        link: "PUB1 link"
      }, {
        name: "Inventory Management System"
      }, {
        name: "Rainfall Prediction using K-Neighbours Classification",
        link: "PUB3LINK"
      }, {
        name: "Enhancing Privacy Preservation in Speech Data Publishing"
      }, {
        name: "Touch Sensor for Projected Screen Using SDG"
      }],
      internships: [{
        company: "Google",
        designation: "SDE Intern"
      }, {
        company: "Microsoft",
        designation: "SDE Intern"
      }],
      applications: [],
      isPlaced: false
    });
    const studentProfile2 = await _StudentProfile.default.create({
      enrollmentNumber: "BT18CSE032",
      studentInfo: {
        name: "Akash Kumar",
        mobile: "1234567890",
        cgpa: 9.4,
        address: "11 street",
        semester: 5,
        branch: "CSE",
        passingYear: 2022,
        personalMail: "akshkmr@gmail.com"
      },
      studentSocial: {
        linkedin: {
          name: "Akash Kumar",
          link: "LINKEDIN LINK"
        },
        github: {
          name: "akash.github"
        },
        website: {
          name: "https://akashkumar.com"
        }
      },
      achievements: [{
        name: "ACM-ICPC Finalist"
      }, {
        name: "Google Summer of Code 2020",
        link: "ACH2 LINK"
      }, {
        name: "Codefchef 4 Star"
      }, {
        name: "Secured 2nd Rank in Coding Competition"
      }, {
        name: "Runner up at Smart India Hackathon"
      }],
      publications: [{
        name: "News-App using Django",
        link: "PUB1 link"
      }, {
        name: "Inventory Management System"
      }, {
        name: "Rainfall Prediction using K-Neighbours Classification",
        link: "PUB3LINK"
      }, {
        name: "Enhancing Privacy Preservation in Speech Data Publishing"
      }, {
        name: "Touch Sensor for Projected Screen Using SDG"
      }],
      internships: [{
        company: "Google",
        designation: "SDE Intern"
      }, {
        company: "Microsoft",
        designation: "SDE Intern"
      }],
      applications: [],
      isPlaced: false
    });
  } catch (e) {
    console.log(e);
  }
}