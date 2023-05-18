const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
});

const {
  createClient_Phy,
  getAllClientPhy,
  getOneClientPhy,
  updateClientPhy,
  removeClientPhy,
} = require("../controllers/clientphysique.controller");

router.post(
  "/newClient",
  upload.fields([{ name: "avatar" }, { name: "piecejointes" }]),
  createClient_Phy
);
router.get("/clients", getAllClientPhy);
router.get("/one/:id", getOneClientPhy);
router.patch(
  "/editClient/:id",
  upload.fields([{ name: "avatar" }, { name: "piecejointes" }]),
  updateClientPhy
);
router.delete("/deleteClient/:id", removeClientPhy);

module.exports = router;
