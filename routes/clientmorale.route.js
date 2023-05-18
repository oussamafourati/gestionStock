const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
});

const {
  createClient_Mo,
  getAllClientMo,
  getOneClientMo,
  updateClientMo,
  removeClientMo,
} = require("../controllers/clientmoral.controller");

router.post(
  "/newClientMo",
  upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
  createClient_Mo
);
router.get("/moraleclients", getAllClientMo);
router.get("/oneClientMorale/:id", getOneClientMo);
router.patch(
  "/editClientMorale/:id",
  upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
  updateClientMo
);
router.delete("/deleteClientMorale/:id", removeClientMo);

module.exports = router;
