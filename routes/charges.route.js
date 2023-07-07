const express = require("express");
const router = express.Router();

const {
  getAllCharges,
  getOneCharge,
  createNewCharges,
  updateCharges,
  removeCharges,
  getChargeMois,
  getChargeWeek,
  getChargeMoisDernier,
} = require("../controllers/charges.controller");

router.post("/newCharges", createNewCharges);
router.get("/allCharges", getAllCharges);
router.get("/moisCharges", getChargeMois);
router.get("/weekCharges", getChargeWeek);
router.get("/lastCharges", getChargeMoisDernier);
router.get("/oneCharge/:id", getOneCharge);
router.patch("/editCharges/:id", updateCharges);
router.delete("/removeCharges/:id", removeCharges);

module.exports = router;
