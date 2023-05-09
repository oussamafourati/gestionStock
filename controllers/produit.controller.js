const mysql = require("mysql2");

const db = require("../config/db.config");

exports.createProduct = async (req, res) => {
  const sql =
    "INSERT INTO produit(`nomProduit`, `imageProduit`, `marque`, `prixAchatHt`, `prixAchatTtc`, `prixVente`, `remise`, `categoryID`, `fournisseurID`) VALUES (?)";

  nomProduit = req.body.nomProduit;
  imageProduit = req.file.buffer.toString("base64");
  marque = req.body.marque;
  prixAchatHt = req.body.prixAchatHt;
  prixAchatTtc = req.body.prixAchatTtc;
  prixVente = req.body.prixVente;
  remise = req.body.remise;
  remarqueProduit = req.body.remarqueProduit;
  categoryID = req.body.categoryID;
  fournisseurID = req.body.fournisseurID;

  const values = [
    nomProduit,
    imageProduit,
    marque,
    prixAchatHt,
    prixAchatTtc,
    prixVente,
    remise,
    remarqueProduit,
    categoryID,
    fournisseurID,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.send(err);
    return res.status(201).json(data);
  });
};
