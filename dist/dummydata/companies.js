"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.companyProfileData = companyProfileData;

var _CompanyProfile = _interopRequireDefault(require("../CompanyProfile/models/CompanyProfile.js"));

async function companyProfileData() {
  try {
    const refresh = await _CompanyProfile.default.deleteMany({});
    const companyProfile = await _CompanyProfile.default.create({
      name: "Microsoft",
      id: "10222",
      logo: "/img/microsoft.png",
      companySocial: {
        linkedin: {
          name: "Microsoft Linkedin",
          link: "LINKEDIN LINK"
        },
        website: {
          name: "www.microsoft.com"
        }
      },
      placementData: [{
        year: 2016,
        students: 7,
        ctc: 5
      }, {
        year: 2017,
        students: 8,
        ctc: 7
      }, {
        year: 2018,
        students: 9,
        ctc: 6
      }, {
        year: 2019,
        students: 10,
        ctc: 9
      }, {
        year: 2020,
        students: 11,
        ctc: 10
      }],
      email: "microsoft@gmail.com",
      website: "microsoft.com",
      phone: "1111111111"
    });
    const companyProfile2 = await _CompanyProfile.default.create({
      name: "Linkedin",
      id: "10223",
      logo: "/img/linkedin.png",
      companySocial: {
        linkedin: {
          name: "LINKEDIN",
          link: "LINKEDIN LINK"
        },
        website: {
          name: "linkedin.com"
        }
      },
      placementData: [{
        year: 1111,
        students: 2222,
        ctc: 1
      }, {
        year: 2222,
        students: 3333,
        ctc: 2
      }],
      email: "linkedin@gmail.com",
      website: "linkedin.com",
      phone: "1111111111"
    });
    const companyProfile3 = await _CompanyProfile.default.create({
      name: "Google",
      id: "10224",
      logo: "/img/google.png",
      companySocial: {
        linkedin: {
          name: "LINKEDIN",
          link: "LINKEDIN LINK"
        },
        website: {
          name: "WEBSITE"
        }
      },
      placementData: [{
        year: 1111,
        students: 2222,
        ctc: 1
      }, {
        year: 2222,
        students: 3333,
        ctc: 2
      }],
      email: "google@gmail.com",
      website: "google.com",
      phone: "1111111111"
    });
  } catch (e) {
    console.log(e);
  }
}