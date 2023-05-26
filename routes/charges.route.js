const express = require("express");
const router = express.Router();

const {
  getAllCharges,
  getOneCharge,
  createNewCharges,
  updateCharges,
  removeCharges,
  getSumCharges,
} = require("../controllers/charges.controller");

router.post("/newCharges", createNewCharges);
router.get("/allCharges", getAllCharges);
router.get("/sommeCharges", getSumCharges);
router.get("/oneCharge/:id", getOneCharge);
router.patch("/editCharges/:id", updateCharges);
router.delete("/removeCharges/:id", removeCharges);

module.exports = router;
