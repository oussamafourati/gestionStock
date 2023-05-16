const mysql = require("mysql2");
const db = require("../config/db.config");

exports.getAllNotes = async (req, res) => {
  const sql = "SELECT * FROM notes";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.getOneNote = async (req, res) => {
  const noteId = req.params.id;
  const sql = "SELECT * FROM notes WHERE idNote = ? ";
  db.query(sql, [noteId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
  });
};

exports.createNote = async (req, res) => {
  const sql = "INSERT INTO notes(`description`, `created_at`) VALUES (?)";

  description = req.body.description;
  created_at = req.body.created_at;

  const values = [description, created_at];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.updateNote = async (req, res) => {
  const noteId = req.params.id;
  const sql =
    "UPDATE notes SET `description`= ?, `created_at`= ? WHERE idNote = ?";

  description = req.body.description;
  created_at = req.body.created_at;

  const values = [description, created_at];

  db.query(sql, [...values, noteId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.removeNote = async (req, res) => {
  const noteId = req.params.id;
  const sql = " DELETE FROM notes WHERE idNote = ? ";

  db.query(sql, [noteId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
