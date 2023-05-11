const express = require("express");
const router = express.Router();

const {
  getAllCharges,
  getOneCharge,
  createNewCharges,
  updateCharges,
  removeCharges,
} = require("../controllers/charges.controller");

router.post("/newCharges", createNewCharges);
router.get("/allCharges", getAllCharges);
router.get("/oneCharge/:id", getOneCharge);
router.put("/editCharges/:id", updateCharges);
router.delete("/removeCharges/:id", removeCharges);

module.exports = router;