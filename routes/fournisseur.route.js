const express = require("express");
const router = express.Router();

const {
  getAllFournisseur,
  createFournisseur,
  getOneFournisseur,
  updateFournisseur,
  removeFournisseur,
} = require("../controllers/fournisseur.controller");

router.post("/newfournisseur", createFournisseur);

router.get("/allFournisseur", getAllFournisseur);
router.get("/oneFournisseur/:id", getOneFournisseur);
router.patch("/editFournisseur/:id", updateFournisseur);
router.delete("/deleteFournisseur/:id", removeFournisseur);

module.exports = router;
