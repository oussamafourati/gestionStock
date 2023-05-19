const express = require("express");
const router = express.Router();

const {
  createArrivage,
  getAllArrivage,
  getOneArrivage,
  updateArrivage,
  removeArrivage,
} = require("../controllers/arrivage.controller");

router.post("/newArrivage", createArrivage);
router.get("/allArrivage", getAllArrivage);
router.get("/oneArrivage/:id", getOneArrivage);
router.patch("/editArrivage/:id", updateArrivage);
router.delete("/removeArrivage/:id", removeArrivage);

module.exports = router;
