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
router.get("/getAll", getAllProducts);
router.get("/getOne/:id", getOneProduct);
router.put("/updateproduct/:id", upload.single("imageProduit"), updateProduct);
router.delete("/deleteproduct/:id", removeProduct);

module.exports = router;
