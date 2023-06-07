const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/produit.controller");
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/newProduct", upload.single("imageProduit"), createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getOneProduct/:id", getOneProduct);
router.patch("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", removeProduct);

module.exports = router;
