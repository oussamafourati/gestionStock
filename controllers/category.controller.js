const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const db = require("../config/db.config");

const storage = multer.diskStorage({
  destination: "./image/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

exports.getAll = async (req, res) => {
  const sql = "SELECT * FROM category";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.getOne = async (req, res) => {
  const categoryId = req.params.id;
  const sql = "SELECT * FROM category WHERE idcategory = ? ";
  db.query(sql, [categoryId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.create = async (req, res) => {
  const sql =
    "INSERT INTO category(`nom`, `image`, `id_parent`, `final_level`) VALUES (?)";

  const values = [
    req.body.nom,
    req.file.filename,
    req.body.id_parent,
    req.body.final_level,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.update = async (req, res) => {
  const categoryId = req.params.id;
  const q =
    "UPDATE category SET `nom`= ?, `image`= ?, `id_parent`= ?, `final_level`= ? WHERE idcategory = ?";

  const values = [
    req.body.nom,
    req.file.filename,
    req.body.id_parent,
    req.body.final_level,
  ];

  db.query(q, [...values, categoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

exports.remove = async (req, res) => {
  const categoryId = req.params.id;
  const q = " DELETE FROM category WHERE idcategory = ? ";

  db.query(q, [categoryId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
