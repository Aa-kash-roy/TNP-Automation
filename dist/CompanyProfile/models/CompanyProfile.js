"use strict";

const mongoose = require("mongoose");

const {
  Schema
} = mongoose;
const maxUrlNameLength = 64;
const Url = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: maxUrlNameLength
  },
  link: {
    type: String
  }
});
const YearPlacementData = new Schema({
  year: {
    type: Number,
    required: true
  },
  students: {
    type: Number,
    required: true
  },
  ctc: {
    type: Number,
    required: true
  }
});
const CompanySocial = new Schema({
  linkedin: {
    type: Url
  },
  github: {
    type: Url
  },
  website: {
    type: Url
  }
});
const CompanyDetails = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  logo: {
    type: String
  },
  companySocial: {
    type: CompanySocial,
    required: true
  },
  placementData: {
    type: [YearPlacementData],
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  }
});
module.exports = mongoose.model("companyprofiles", CompanyDetails);