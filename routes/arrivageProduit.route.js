const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createArrivageProduit,
  getAllArrivageProduit,
  getOneArrivageProduit,
  getOneArrProduit,
  updateArrivageProduit,
  removeArrivageProduit,
} = require("../controllers/arrivageProduit.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/newArrivageProduit", createArrivageProduit);
router.get("/allArrivageProduit", getAllArrivageProduit);
router.get("/OneArrivageProduit/:id", getOneArrivageProduit);
router.get("/ArrProduit/:id", getOneArrProduit);
router.put("/updateArrivageProduit/:id", updateArrivageProduit);
router.delete("/removeArrivageProduit/:id", removeArrivageProduit);

module.exports = router;
