const express = require("express");
const router = express.Router();

const {
  createUser,
  login,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/compte.controller");

router.post("/signup", createUser);
router.post("/login", login);
router.get("/allUsers", getAllUsers);
router.get("/oneUser/:id", getUser);
router.put("/editUser/:id", updateUser);
router.delete("/removeUser/:id", deleteUser);

module.exports = router;
