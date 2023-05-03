const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("../controllers/category.controller");

const storage = multer.diskStorage({
  destination: "../image/",
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

router.get("/all", getAll);
router.get("/one/:id", getOne);
router.post("/new", upload.single("image"), create);
router.put("/edit/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
