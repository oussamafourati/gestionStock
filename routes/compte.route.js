const express = require("express");
const router = express.Router();

const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("../controllers/category.controller");

router.get("/all", getAll);
router.get("/one/:id", getOne);
router.post("/signup", create);
router.put("/edit/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
