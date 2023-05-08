const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAllFournisseur,
  createFournisseur,
  getOneFournisseur,
  updateFournisseur,
  removeFournisseur,
} = require("../controllers/fournisseur.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/newfournisseur",
  upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
  createFournisseur
);
router.get("/all", getAllFournisseur);
router.get("/one/:id", getOneFournisseur);
router.put(
  "/edit/:id",
  upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
  updateFournisseur
);
router.delete("/delete/:id", removeFournisseur);

module.exports = router;
