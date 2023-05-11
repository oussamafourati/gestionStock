const express = require("express");
const router = express.Router();

const {
  createproduitFacture,
  getAllProduitFacture,
  getOneProductFacture,
  updateProductFacture,
  removeProductFacture,
} = require("../controllers/produitFacture.controller");

router.post("/newProductFacture", createproduitFacture);
router.get("/getAllProduitFacture", getAllProduitFacture);
router.get("/getOneProduitFacture/:id", getOneProductFacture);
router.put("/updateproduitFacture/:id", updateProductFacture);
router.delete("/deleteproductFacture/:id", removeProductFacture);

module.exports = router;
