"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _config = require("../../config");

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server.js");

var _announce = _interopRequireDefault(require("../../views/admin/announce.js"));

var _multer = _interopRequireDefault(require("multer"));

var _emailSender = require("../../auth/helpers/emailSender.js");

var _Announce;

const getRecipientsFromYear = require("./helper");

const router = _express.default.Router();

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage: storage
});
const emailid = 'bt18cse030@iiitn.ac.in';

const createMail = (emailid, subject, body, attachments) => {
  const message = {
    from: _config.EMAIL,
    to: emailid,
    subject: subject,
    html: body,
    attachments: attachments
  };
  console.log(message);
  return message;
};

router.get('/', (req, res, next) => {
  const reactComp = (0, _server.renderToString)(_Announce || (_Announce = /*#__PURE__*/(0, _jsx2.default)(_announce.default, {})));
  res.render("./admin/announce", {
    reactApp: reactComp
  });
});
router.post('/', upload.any('attachments'), async (req, res, next) => {
  try {
    var recipients = [];

    if (typeof req.body.year == "string") {
      recipients = recipients.concat(await getRecipientsFromYear(req.body.year));
    } else {
      const years = req.body.year;

      for (const year of years) {
        recipients = recipients.concat(await getRecipientsFromYear(year));
      }
    }

    console.log(recipients);
    let attachments = [];

    for (let i = 0; i < req.files.length; i++) {
      attachments.push({
        filename: req.files[i].originalname,
        content: req.files[i].buffer
      });
    }

    console.log(attachments);
    console.log(req.body);
    const email = await createMail(recipients, req.body['message'], req.body['subject'], attachments);
    await (0, _emailSender.EmailSender)(email);
    res.redirect('/admin/announce');
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;