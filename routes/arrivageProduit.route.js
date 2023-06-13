const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createArrivageProduit,
  getAllArrivageProduit,
  getOneArrivageProduit,
  updateArrivageProduit,
  removeArrivageProduit,
  getSingleArrivageProduit,
} = require("../controllers/arrivageProduit.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/newArrivageProduit", createArrivageProduit);
router.get("/allArrivageProduit", getAllArrivageProduit);
router.get("/OneArrivageProduit/:id", getOneArrivageProduit);
router.get("/SingleArrivageProduit/:id", getSingleArrivageProduit);
router.put("/updateArrivageProduit/:id", updateArrivageProduit);
// router.put("/updateArrivageProduit/:id", upload.single("piecejointes"), updateArrivageProduit);
router.delete("/removeArrivageProduit/:id", removeArrivageProduit);

module.exports = router;
