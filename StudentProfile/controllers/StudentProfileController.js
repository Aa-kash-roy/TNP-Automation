const express = require('express')
const router = express.Router();

router.get('/:id', (req, res, next) => {
    res.render("StudentProfile")
})

module.exports = router;