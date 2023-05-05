const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createClient_Phy,
} = require("../controllers/clientphysique.controller");

const storage = multer.diskStorage({
  destination: "./image/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/newClient", upload.single("avatar"), createClient_Phy);

module.exports = router;
