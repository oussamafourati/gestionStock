const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().valueOf() + "_" + file.fieldname);
  },
});

var uploadFile = multer({ storage: storage });
module.exports = uploadFile;
