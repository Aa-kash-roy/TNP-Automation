"use strict";

const dotenv = require('dotenv');

const jwt = require('jsonwebtoken'); // get password vars from .env file


dotenv.config();
const TOKEN_SECRET = "abfiudsfnefiuhewof9jeiwkfniewufgiwjhgfiuwg";

async function authenticateToken(req, res, next) {
  const token = await req.headers['form-data'];
  console.log(token);
  token = (await authHeader) && authHeader.split(' ')[1];

  if (token == null) {
    console.log("Token is none");
    return res.sendStatus(401);
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log("token didn't matched");
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

function generateAccessToken(username) {
  return jwt.sign({
    data: username
  }, TOKEN_SECRET, {
    expiresIn: '1h'
  });
}

module.exports = {
  authenticateToken,
  generateAccessToken
};