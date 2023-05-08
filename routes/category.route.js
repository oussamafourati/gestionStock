const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("../controllers/category.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/all", getAll);
router.get("/one/:id", getOne);
router.post("/new", upload.single("image"), create);
router.put("/edit/:id", upload.single("image"), update);
router.delete("/delete/:id", remove);

module.exports = router;
