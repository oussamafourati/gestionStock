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

// router.post(
//   "/newClient",
//   upload.fields([{ name: "avatar" }, { name: "piecejointes" }]),
//   createClient_Phy
// );
router.post("/newClientMo", upload.single("logo"), createClient_Mo);
router.get("/moraleclients", getAllClientMo);
router.get("/one/:id", getOneClientMo);
// router.put(
//   "/edit/:id",
//   upload.fields([{ name: "logo" }, { name: "piecejointes" }]),
//   updateClientPhy
// );
router.put("/edit/:id", upload.single("logo"), updateClientMo);
router.delete("/delete/:id", removeClientMo);

module.exports = router;
