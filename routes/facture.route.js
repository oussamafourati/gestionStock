const express = require("express");
const router = express.Router();

const {
  createNewFacture,
  getOneFacture,
  getAllFactures,
  updateFacture,
  removeFacture,
} = require("../controllers/facture.controller");

router.post("/newFacture", createNewFacture);
router.get("/allFactures", getAllFactures);
router.get("/oneFacture/:id", getOneFacture);
router.put("/editFacture/:id", updateFacture);
router.delete("/removeFacture/:id", removeFacture);

module.exports = router;
