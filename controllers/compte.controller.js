const mysql = require("mysql2");
const db = require("../config/db.config");

exports.getAll = async (req, res) => {
  const sql = "SELECT * FROM category";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).send(data);
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
    return res.status(201).send(data);
  });
};

exports.create = async (req, res) => {
  const sql =
    "INSERT INTO category(`nom`, `image`, `id_parent`, `final_level`) VALUES (?)";

  image = req.file.buffer.toString("base64");
  nom = req.body.nom;
  id_parent = req.body.id_parent;
  final_level = req.body.final_level;

  const values = [nom, image, id_parent, final_level];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.update = async (req, res) => {
  const categoryId = req.params.id;
  const q =
    "UPDATE category SET `nom`= ?, `image`= ?, `id_parent`= ?, `final_level`= ? WHERE idcategory = ?";

  const values = [
    req.body.nom,
    req.file.buffer.toString("base64"),
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
