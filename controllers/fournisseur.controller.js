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

exports.createFournisseur = async (req, res) => {
  const sql =
    "INSERT INTO fournisseur(`raison_sociale`, `adresse`, `tel`, `mail`, `type`, `matricule_fiscale`, `logo`, `rib`, `etat`, `piecejointes`) VALUES (?)";

  const values = [
    req.body.raison_sociale,
    req.body.adresse,
    req.body.tel,
    req.body.mail,
    req.body.type,
    req.body.matricule_fiscale,
    req.file.filename,
    req.body.rib,
    req.body.etat,
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

exports.getOneFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const sql = "SELECT * FROM fournisseur WHERE idfournisseur  = ? ";
  db.query(sql, [id_fournisseur], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.status(201).json(data);
  });
};

exports.updateFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const q =
    "UPDATE fournisseur SET `raison_sociale`= ?, `adresse`= ?, `tel`= ?, `mail`= ?, `type`= ?, `matricule_fiscale`= ?, `logo`= ?, `rib`= ?, `etat`= ?, `piecejointes`= ? WHERE idfournisseur = ?";

  const values = [
    req.body.raison_sociale,
    req.body.adresse,
    req.body.tel,
    req.body.mail,
    req.body.type,
    req.body.matricule_fiscale,
    req.file.filename,
    req.body.rib,
    req.body.etat,
    req.body.piecejointes,
  ];

  db.query(q, [...values, id_fournisseur], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).send(data);
  });
};

exports.removeFournisseur = async (req, res) => {
  const id_fournisseur = req.params.id;
  const q = " DELETE FROM fournisseur WHERE idfournisseur = ? ";

  db.query(q, [id_fournisseur], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
