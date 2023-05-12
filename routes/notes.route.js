const express = require("express");
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getOneNote,
  updateNote,
  removeNote,
} = require("../controllers/notes.controller");

router.get("/allNotes", getAllNotes);
router.get("/oneNote/:id", getOneNote);
router.post("/newNote", createNote);
router.put("/editNote/:id", updateNote);
router.delete("/removeNote/:id", removeNote);

module.exports = router;
