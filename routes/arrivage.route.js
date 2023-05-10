const express = require("express");
const router = express.Router();

const { createArrivage } = require("../controllers/arrivage.controller");

router.post("/newArrivage", createArrivage);

module.exports = router;
