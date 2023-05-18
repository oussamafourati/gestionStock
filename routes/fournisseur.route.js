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

let storage = multer.memoryStorage();

let upload = multer({
  storage: storage,
});

router.post(
  "/newfournisseur",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "piecejointes", maxCount: 1 },
  ]),
  createFournisseur
);

router.get("/allFournisseur", getAllFournisseur);
router.get("/oneFournisseur/:id", getOneFournisseur);
router.patch(
  "/editFournisseur/:id",
  upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
  updateFournisseur
);
router.delete("/deleteFournisseur/:id", removeFournisseur);

module.exports = router;
