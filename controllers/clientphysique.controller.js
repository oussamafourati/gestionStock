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

exports.createClient_Phy = async (req, res) => {
  const sql =
    "INSERT INTO client_physique(`raison_sociale`, `cin`, `adresse`, `tel`, `mail`, `avatar`, `rib`, `etat`, `crédit`, `piecejointes`) VALUES (?)";

  const values = [
    req.body.raison_sociale,
    req.body.cin,
    req.body.adresse,
    req.body.tel,
    req.body.mail,
    req.file.filename,
    req.body.rib,
    req.body.etat,
    req.body.crédit,
    req.body.piecejointes,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};

exports.getAllFournisseur = async (req, res) => {
  const sql =
    "SELECT fournisseur.*, piece_jointes.* FROM fournisseur JOIN piece_jointes ON fournisseur.piecejointes = piece_jointes.idpj;";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};
