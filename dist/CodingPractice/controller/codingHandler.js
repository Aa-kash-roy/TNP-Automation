"use strict";

const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.render('dummy');
});
router.get('/problems', (req, res) => {
  const company = req.query.company;
  res.send(`Im the c ${company}`);
});
module.exports = router;