"use strict";

const mongoose = require("mongoose");

const {
  Schema
} = mongoose;
const UserOtpVerificationSchema = new Schema({
  email: String,
  otp: String,
  createdAt: Date,
  expiredAt: Date
});
const UserOtpVerification = mongoose.model("UserOtpVerification", UserOtpVerificationSchema);
module.exports = UserOtpVerification;