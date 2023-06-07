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

router.get("/allFournisseur", getAllFournisseur);
router.get("/oneFournisseur/:id", getOneFournisseur);
router.patch("/editFournisseur/:id", updateFournisseur);
router.delete("/deleteFournisseur/:id", removeFournisseur);

module.exports = router;
