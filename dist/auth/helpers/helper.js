"use strict";

const UserOtpVerification = require('../models/otpModel');

const EmailHandler = require('./emailSender');

const sendOTPtoemail = async email => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  const optMessage = await EmailHandler.otpMessage(email, otp);
  await EmailHandler.EmailSender(optMessage);
  const userotp = new UserOtpVerification({
    email: email,
    otp: otp,
    createdAt: Date.now(),
    expiredAt: Date.now() + 900000
  });
  await userotp.save();
};

const validateUser = params => {
  if (EmailHandler.testEmailiiiTNvalid(params.email)) return true;
  console.log("Im returning false");
  return false;
};

const validatePassword = params => {
  if (params.password != params.confirm_password) return false;
  const password = params.password;
  var strength = 0;
  if (password.match(/[a-z]+/)) strength += 1;
  if (password.match(/[A-Z]+/)) strength += 1;
  if (password.match(/[0-9]+/)) strength += 1;
  if (password.match(/[$@#&!]+/)) strength += 1;
  if (password.length >= 8 && strength == 4) return true;
  return false;
};

module.exports = {
  sendOTPtoemail,
  validateUser,
  validatePassword
};