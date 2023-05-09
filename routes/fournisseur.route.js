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

// router.post(
//   "/newfournisseur",
//   upload.fields([
//     { name: "logo", maxCount: 1 },
//     { name: "piecejointes", maxCount: 1 },
//   ]),
//   createFournisseur
// );
router.post("/newfournisseur", upload.single("logo"), createFournisseur);
router.get("/all", getAllFournisseur);
router.get("/one/:id", getOneFournisseur);
// router.put(
//   "/edit/:id",
//   upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
//   updateFournisseur
// );
router.put("/edit/:id", upload.single("logo"), updateFournisseur);
router.delete("/delete/:id", removeFournisseur);

module.exports = router;
