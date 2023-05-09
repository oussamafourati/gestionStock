const express = require("express");
const router = express.Router();
const multer = require("multer");

const { createProduct } = require("../controllers/produit.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/newProduct", upload.single("imageProduit"), createProduct);

module.exports = router;
