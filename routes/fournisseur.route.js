const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllFournisseur,
  createFournisseur,
  getOneFournisseur,
  updateFournisseur,
  removeFournisseur,
} = require("../controllers/fournisseur.controller");

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

router.post("/newfournisseur", upload.single("logo"), createFournisseur);
router.get("/all", getAllFournisseur);
router.get("/one/:id", getOneFournisseur);
router.put("/edit/:id", upload.single("logo"), updateFournisseur);
router.delete("/delete/:id", removeFournisseur);

module.exports = router;
