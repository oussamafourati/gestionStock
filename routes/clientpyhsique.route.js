const express = require("express");
const router = express.Router();

const {
  createClient_Phy,
  getAllClientPhy,
  getOneClientPhy,
  updateClientPhy,
  removeClientPhy,
} = require("../controllers/clientphysique.controller");

router.post("/newClient", createClient_Phy);
router.get("/clients", getAllClientPhy);
router.get("/one/:id", getOneClientPhy);
router.patch("/editClient/:id", updateClientPhy);
router.delete("/deleteClient/:id", removeClientPhy);

module.exports = router;
