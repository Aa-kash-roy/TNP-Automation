"use strict";

const mongoose = require("mongoose");

const corestudentprofiles = require("../Years/models");

const findStudentEmailSemesterWise = async semeseter => {
  console.log(semeseter);
  const resp = await corestudentprofiles.find({
    "studentInfo.semester": semeseter
  });
  console.log(resp);
  var listOfEmails = [];
  resp.forEach(function (item) {
    console.log(item);
    listOfEmails.push(item.studentInfo.email);
  });
  console.log(listOfEmails);
  return listOfEmails;
};

const getRecipientsFromYear = async year => {
  var recipients = [];

  if (year == "1styear") {
    recipients = recipients.concat(await findStudentEmailSemesterWise("1"));
    recipients = recipients.concat(await findStudentEmailSemesterWise("2"));
  } else if (year == "2ndyear") {
    recipients = recipients.concat(findStudentEmailSemesterWise("3"));
    recipients = recipients.concat(findStudentEmailSemesterWise("4"));
  } else if (year == "3rdyear") {
    recipients = recipients.concat(findStudentEmailSemesterWise("5"));
    recipients = recipients.concat(findStudentEmailSemesterWise("6"));
  } else {
    recipients = recipients.concat(findStudentEmailSemesterWise("7"));
    recipients = recipients.concat(findStudentEmailSemesterWise("8"));
  }

  return recipients;
};

module.exports = getRecipientsFromYear;