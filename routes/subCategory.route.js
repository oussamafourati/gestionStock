const express = require("express");
const router = express.Router();

const {
  getAllSubCategory,
  getOneSubCategory,
  createNewSubCategory,
  updateSubCategory,
  removeSubCategory,
} = require("../controllers/subCategory.controller");

router.get("/allsubcategories", getAllSubCategory);
router.get("/onesubcategory", getOneSubCategory);
router.post("/newsubcategory", createNewSubCategory);
router.patch("/editsubcategory/:id", updateSubCategory);
router.delete("/deletesubcategory/:id", removeSubCategory);

module.exports = router;
