const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../images")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

module.exports = upload;